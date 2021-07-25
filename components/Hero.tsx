import type { FC } from "react";

const Hero: FC<{ content: { title: string; body: string } }> = ({
  content,
}) => (
  <div className="flex-grow container py-16 flex flex-col justify-center">
    <h2 className="mb-16">{content.title}</h2>
    <p className="text-2xl">{content.body}</p>
  </div>
);

export default Hero;
