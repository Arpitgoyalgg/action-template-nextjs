import Head from "next/head";
import Header from "../components/Header";
import Countdown from "../components/Countdown";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="//fonts.googleapis.com/css2?family=Montserrat:wght@300;400;600;900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <section className="w3l-coming-soon-page">
        <div className="coming-page-info-6">
          <div className="wrapper">
            <Header />
            <Countdown />
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
}
