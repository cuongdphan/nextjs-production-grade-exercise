import Image from "next/image";
import type { FC } from "react";

const FeatureSection: FC<{
  invert?: boolean;
  title: string;
  body: string;
  image: string;
}> = ({ title, body, image, invert }) => {
  const Left = () => (
    <div className={invert ? "w-1/2 px-6 order-last" : "w-1/2 px-6"}>
      <h2 className="text-4xl">{title}</h2>
      <p>{body}</p>
    </div>
  );

  const Right = () => (
    <div className="w-1/2 px-6">
      <div className="ring-1 ring-gray-200 ring-opacity-80 border border-gray-200">
        <Image
          alt="Feature section image"
          src={image}
          width={1200}
          height={600}
          layout="responsive"
          quality={100}
        />
      </div>
    </div>
  );

  return (
    <div
      className={
        invert
          ? "min-h-[70vh] py-16 border-t border-gray-200 bg-gray-50 flex items-center"
          : "min-h-[70vh] py-16 border-t border-gray-200 bg-white flex items-center"
      }
    >
      <div className="container flex items-start">
        <Left />
        <Right />
      </div>
    </div>
  );
};

export default FeatureSection;
