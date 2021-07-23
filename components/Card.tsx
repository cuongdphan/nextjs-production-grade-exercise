type CardProps = {
  href: string;
  title: string;
  text: string;
};

const Card = ({ href, title, text }: CardProps) => (
  <a href={href} className="card">
    <h2 className="mb-4">{title} &rarr;</h2>
    <p>{text}</p>
  </a>
);

export default Card;
