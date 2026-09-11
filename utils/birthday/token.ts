import "server-only";
import crypto from "node:crypto";

const SECRET = process.env.BIRTHDAY_TOKEN_SECRET || "dev-secret-change-me";
const TOKEN_TTL_MS = 1000 * 60 * 60 * 24; // token stays valid for 24h after a correct answer

const sign = (data: string) =>
  crypto.createHmac("sha256", SECRET).update(data).digest("hex");

const timingSafeEqualStrings = (a: string, b: string) => {
  const bufA = Buffer.from(a);
  const bufB = Buffer.from(b);

  if (bufA.length !== bufB.length) return false;

  return crypto.timingSafeEqual(bufA, bufB);
};

export const checkPetName = (answer: string): boolean => {
  const names = (process.env.BIRTHDAY_PET_NAMES || "")
    .split(",")
    .map((name) => name.trim().toLowerCase())
    .filter(Boolean);

  return names.includes(answer.trim().toLowerCase());
};

/** Turns a correct answer into a random-looking, signed, expiring access token. */
export const createAccessToken = (answer: string): string => {
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  const answerHash = crypto
    .createHash("sha256")
    .update(answer.trim().toLowerCase())
    .digest("hex")
    .slice(0, 16);
  const nonce = crypto.randomBytes(8).toString("hex");

  const payload = Buffer.from(
    `${expiresAt}:${answerHash}:${nonce}`,
  ).toString("base64url");
  const signature = sign(payload);

  return `${payload}.${signature}`;
};

export const verifyAccessToken = (token: string | null | undefined): boolean => {
  if (!token) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature) return false;

  if (!timingSafeEqualStrings(signature, sign(payload))) return false;

  const decoded = Buffer.from(payload, "base64url").toString();
  const [expiresAtRaw] = decoded.split(":");
  const expiresAt = Number(expiresAtRaw);

  if (!expiresAt || Number.isNaN(expiresAt)) return false;

  return Date.now() <= expiresAt;
};
