import { PiHandWavingThin } from "react-icons/pi";
import PortfolioSite from "./components/PortfolioSite";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <p className="flex flex-col items-center mt-12 mb-12 text-3xl font-light text-center dark:text-white">
        <span className="flex place-content-center mb-2">
          Hi,&nbsp;I'm Nathan&nbsp;
          <PiHandWavingThin />
        </span>
        <div className="w-3/4 max-w-lg">
          <span className="text-lg text-amber-50">
            You can find samples of web apps I've built below. I've worked with
            startups big and small, building out greenfield React and Next apps.
          </span>
        </div>
      </p>
      <PortfolioSite
        title="Cleveland Apartment Brokers"
        siteUrl="https://clevelandapartmentbrokers.com"
        imgPath="/images/cleveland-apt-brokers.png"
      />
      <PortfolioSite
        title="Wiki Results"
        siteUrl="https://main.d1rfafshxnyxgf.amplifyapp.com"
        imgPath="/images/wiki-results.png"
      />
      <PortfolioSite
        title="Tualatin Tek Club"
        siteUrl="https://tualatintekclub.com"
        imgPath="/images/tualatin-tek-club.png"
      />
    </main>
  );
}
