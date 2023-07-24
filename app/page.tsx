import { PiHandWavingThin } from "react-icons/pi";
import PortfolioSite from "./components/PortfolioSite";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <p className="flex flex-col items-center mt-12 mb-12 text-3xl font-light text-center dark:text-white">
        <span className="flex place-content-center mb-2 text-lime-400">
          Hi,&nbsp;I&apos;m Nathan&nbsp;
          <PiHandWavingThin size={40} />
        </span>
        <div className="w-3/4 max-w-lg">
          <span className="flex flex-col text-lg text-amber-50 mt-4">
            I build full stack web apps.
            <span className="text-xl font-medium my-4">
              Team player, excellent communication and collaboration skills with
              a track record of working cross-functionally in agile
              environments.
            </span>
            Find samples of my work below.
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
