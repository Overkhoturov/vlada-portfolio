import Image from "next/image";

const NotFoundVideo = () => (
  <video
    autoPlay
    loop
    muted
    playsInline
    className="w-full h-auto"
    poster="/not-found.gif"
    onError={(e) => {
      e.target.style.display = "none";
      e.target.nextElementSibling.style.display = "block";
    }}
  >
    <source src="/not-found.mp4" type="video/mp4" />
    <Image
      width={100}
      height={100}
      src="/not-found.gif"
      alt="Animation"
      style={{ display: "none" }}
      onLoad={(e) => (e.target.style.display = "block")}
    />
  </video>
);

export default NotFoundVideo;
