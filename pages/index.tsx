import type { NextPage } from "next";
import Head from "next/head";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";
import { Hero } from "../components/hero";
import { Navigation } from "../components/navigation";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <html lang="en" />
        <title>Vincent Lee, software engineer</title>
        <meta
          name="description"
          content="Portfolio page for Vincent Lee, software engineer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navigation />
        <Hero />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default Home;
