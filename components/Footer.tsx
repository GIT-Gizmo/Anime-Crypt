import Image from "next/image";

function Footer() {
  return (
    <footer className="sticky bottom-0 sm:px-16 px-8 flex justify-between items-center gap-2 flex-wrap bg-gray-100 backdrop-blur-lg bg-opacity-5">
      <p className="text-base font-bold text-white">@2024 AnimeCrypt</p>
      <Image
        src="./logo.svg"
        alt="logo"
        width={47}
        height={44}
        className="object-contain"
      />
      <div className="flex items-center gap-6">
        <a href="https://github.com/git-gizmo/anime-crypt" target="_blank">
          <Image
            src="./github.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
        <a href="https://davegizmo.vercel.app" target="_blank">
          <Image
            src="./portfolio.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
        <a href="https://twitter.com/dave_gizmo" target="_blank">
          <Image
            src="./twitter.svg"
            alt="logo"
            width={19}
            height={19}
            className="object-contain"
          />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
