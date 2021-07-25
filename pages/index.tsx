import FeatureSection from "components/FeatureSection";
import Hero from "components/Hero";
import HomeNav from "components/HomeNav";
import { home } from "content";
import { GetStaticProps } from "next";
import type { FC } from "react";

const Home: FC<{ content: { hero: any; features: any[] } }> = ({ content }) => (
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
          image="/static/images/docs.png"
          invert={i % 2 === 0}
        />
      ))}
    </main>

    <footer className="py-16 bg-gray-500 bg-opacity-70">
      <div className="container">hello</div>
    </footer>
  </>
);

export const getStaticProps: GetStaticProps = ({ preview }) => {
  return {
    props: { content: preview ? home.draft : home.published },
  };
};

export default Home;
