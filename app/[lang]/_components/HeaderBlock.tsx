import Image from "next/image";

const HeaderBlock = () => {

  return (
    <section className="absolute top-[112px] tablet:top-[130px] hd:top-[152px] 2k:top-[190px] 4k:top-[228px] -translate-x-1/2 pt-4 pb-8 flex flex-col items-center justify-center gap-2">
      <Image width={100} height={100} alt="avatar" src="/avatar.png" />
    </section>
  )
}

export default HeaderBlock;
