import Image from "next/image";

const Footer = () => (
  <footer className="w-full h-12 border-t border-gray-200 flex justify-center items-center sm:h-24">
    <a
      className="flex justify-center items-center flex-grow"
      href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
      target="_blank"
      rel="noopener noreferrer"
    >
      Powered by{" "}
      <span className="h-4 ml-2">
        <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
      </span>
    </a>
  </footer>
);

export default Footer;
