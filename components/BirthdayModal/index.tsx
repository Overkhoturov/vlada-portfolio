"use client";

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useParams, usePathname, useRouter } from "next/navigation";
import classNames from "classnames";
import { useDictionary } from "@/utils/providers/dictionary-context";
import Button, { ButtonType, ButtonVariant } from "@/components/Button";
import Input from "@/components/Input";
import NavItem, { TNavItem } from "@/components/layout/Header/NavItem";
import CrossIcon from "@/components/icons/Cross";
import GmailIcon from "@/components/icons/Gmail";
import TGIcon from "@/components/icons/Telegram";
import HHIcon from "@/components/icons/HH";
import Confetti from "./Confetti";

const VISIBLE_DAYS = 2;
const MOSCOW_UTC_OFFSET = "+03:00";

const getVisibilityWindow = (dateStr: string) => {
  const start = new Date(`${dateStr}T00:00:00${MOSCOW_UTC_OFFSET}`);
  const end = new Date(start.getTime() + VISIBLE_DAYS * 24 * 60 * 60 * 1000);
  return { start, end };
};

const socialItems: TNavItem[] = [
  {
    link: "mailto:sunny.prys@gmail.com",
    linkType: "out",
    text: "Email",
    icon: <GmailIcon />,
  },
  {
    link: "https://t.me/sunnyastria",
    linkType: "out",
    text: "Telegram",
    icon: <TGIcon />,
  },
  {
    link: "https://taganrog.hh.ru/resume/3e8e86f1ff0855dd2f0039ed1f30537a515078",
    linkType: "out",
    text: "HeadHunter",
    icon: <HHIcon />,
  },
];

const BirthdayModal = () => {
  const dictionary = useDictionary();
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const currentLang = (params.lang as string) || "ru";

  const [open, setOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const birthdayDate = process.env.NEXT_PUBLIC_BIRTHDAY_DATE;
  const isBirthdayPage = pathname?.startsWith(`/${currentLang}/birthday`);

  useEffect(() => {
    if (!birthdayDate || isBirthdayPage) {
      setOpen(false);
      return;
    }

    const { start, end } = getVisibilityWindow(birthdayDate);
    const now = new Date();
    const shouldOpen = now >= start && now < end;

    setOpen(shouldOpen);
    if (shouldOpen) {
      setAnswer("");
      setError("");
    }
  }, [birthdayDate, isBirthdayPage, pathname]);

  const dismiss = () => setOpen(false);

  const handleVerify = async () => {
    if (!answer.trim() || loading) return;

    setLoading(true);
    setError("");

    try {
      const response = await fetch("/api/birthday-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ answer }),
      });
      const data = await response.json();

      if (data.ok && data.token) {
        setOpen(false);
        router.push(`/${currentLang}/birthday?token=${data.token}`);
      } else {
        setError(dictionary.birthdayModal.inputError);
      }
    } catch {
      setError(dictionary.birthdayModal.inputError);
    } finally {
      setLoading(false);
    }
  };

  if (!birthdayDate) return null;

  return (
    <Dialog
      as="div"
      open={open}
      onClose={dismiss}
      transition
      className="z-50 bg-primary-opacity-24 backdrop-blur-md fixed inset-0 flex w-screen items-center justify-center p-4 transition duration-300 ease-out data-closed:opacity-0"
    >
      {open && <Confetti />}

      <DialogPanel className="relative w-full max-w-[600px] max-h-[90vh] overflow-y-auto rounded-[32px] border border-outline bg-surface-container shadow-inner-100-small animate-modal-pop">
        <div className="relative p-6 flex flex-col gap-6">
          <button
            type="button"
            aria-label={dictionary.birthdayModal.closeAriaLabel}
            onClick={dismiss}
            className="absolute top-6 right-6 text-primary hover:text-primary-on-variant transition-colors"
          >
            <CrossIcon />
          </button>

          <div className="flex flex-col gap-4 pr-8">
            <p className="text-body-medium text-primary">
              {dictionary.birthdayModal.greeting}
            </p>

            <ul className="flex flex-wrap gap-2">
              {socialItems.map((item) => (
                <NavItem
                  {...item}
                  key={item.link}
                  buttonType={ButtonType.SECONDARY}
                  buttonVariant={ButtonVariant.OUTLINED}
                />
              ))}
            </ul>
          </div>

          <div className="h-[1px] w-full bg-outline" />

          <div className="flex flex-col gap-4">
            <h3 className="text-body-medium-strong text-secondary-on-fixed">
              {dictionary.birthdayModal.vladaSubtitle}
            </h3>

            <Input
              value={answer}
              onChange={(value) => {
                setAnswer(value);
                if (error) setError("");
              }}
              placeholder={dictionary.birthdayModal.inputPlaceholder}
              helperText={dictionary.birthdayModal.inputHelper}
              errorText={error}
              disabled={loading}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleVerify();
              }}
            />

            <div className="flex gap-3 justify-end">
              <Button
                text={dictionary.birthdayModal.cancelButton}
                variant={ButtonVariant.GHOST}
                type={ButtonType.SECONDARY}
                size="md"
                onClick={dismiss}
              />
              <Button
                text={dictionary.birthdayModal.okButton}
                variant={ButtonVariant.FILLED}
                type={ButtonType.PRIMARY}
                size="md"
                disabled={loading || !answer.trim()}
                onClick={handleVerify}
                className={classNames({ "opacity-70": loading })}
              />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  );
};

export default BirthdayModal;
