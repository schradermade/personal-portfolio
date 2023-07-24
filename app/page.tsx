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
          <span className="text-lg text-amber-50">
            I build full stack web apps, mostly in React and Next. Find samples
            of my work below. I&apos;ve worked in the insurance and AI
            industries designing SaaS apps built to serve 100k+ users.
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
