import clsx from "clsx";
import Link from "@docusaurus/Link";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import HomepageFeatures from "@site/src/components/HomepageFeatures";

import Heading from "@theme/Heading";
import styles from "./index.module.css";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <>
      <header className="bg-gradient-to-b from-teal-950 to-teal-100 text-white relative">
        <div className="w-full h-full absolute top-0 left-0 bg-[url('/assets/images/noise.jpg')] bg-cover bg-center opacity-10"></div>

        <div className="w-full h-full absolute top-0 left-0 bg-[url('/assets/images/grid.svg')] bg-[length:2000px_1000px] bg-repeat bg-center opacity-10"></div>
        <div className="container mx-auto text-center py-24">
          <div className=" flex  w-full justify-center relative ">
            <div className="z-20">
              <img src="/img/favicon.png" className=" size-20 sm:size-28" />
            </div>
            <h1 className="z-20 text-3xl sm:text-5xl font-bold text-white  self-center mt-2">
              {siteConfig.title}
            </h1>
          </div>
          <p className="text-xl py-6 text-white">{siteConfig.tagline}</p>

          <div className="py-5 relative">
            <Link
              className="bg-white rounded-md text-gray-500 px-4 py-2 z-20"
              to="/docs/intro"
            >
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header>

      {/* <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <Heading as="h1" className="hero__title">
            {siteConfig.title}
          </Heading>

          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className="button button--secondary button--lg"
              to="/docs/intro"
            >
              Docusaurus Tutorial - 5min ⏱️
            </Link>
          </div>
        </div>
      </header> */}
    </>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />"
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
