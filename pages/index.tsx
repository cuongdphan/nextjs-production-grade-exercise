import FeatureSection from "components/FeatureSection";
import Hero from "components/Hero";
import HomeNav from "components/HomeNav";
import { home } from "content";
import { FC } from "react";

const Home: FC<{ content: { hero: any; features: any[] } }> = ({ content }) => {
  return (
    <>
      <header className="h-screen flex flex-col">
        <HomeNav />
        <Hero content={content.hero} />
      </header>

      <main>
        {content.features.map((feature, i) => (
          <FeatureSection
            key={feature.title}
            title={feature.title}
            body={feature.body}
            image="/docs.png"
            invert={i % 2 == 0}
          />
        ))}
      </main>

      <footer className="py-16 bg-gray-500 bg-opacity-70">
        <div className="container">hello</div>
      </footer>
    </>
  );
};

export function getStaticProps() {
  return {
    props: { content: home.published },
  };
}

export default Home;
