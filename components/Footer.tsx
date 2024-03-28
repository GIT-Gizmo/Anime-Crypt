import Image from "next/image";

function Footer() {
  return (
    <footer className="sticky bottom-0 sm:px-16 py-4 px-8 flex justify-between items-center gap-2 flex-wrap bg-[#b6b8bd]">
      <p className="text-base font-bold text-white">@2024 AnimeCrypt</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <Image
          src="./tiktok.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./instagram.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
        <Image
          src="./twitter.svg"
          alt="logo"
          width={19}
          height={19}
          className="object-contain"
        />
      </div>
    </footer>
  );
}

export default Footer;
