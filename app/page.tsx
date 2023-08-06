import { PiHandWavingThin } from "react-icons/pi";
import styles from "./page.module.css";
import PortfolioSamples from "./components/PortfolioSamples";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <p className="flex flex-col items-center mt-12 mb-12 text-3xl font-light text-center dark:text-white">
        <span className="flex place-content-center mb-2 text-lime-400">
          Hi,&nbsp;I&apos;m Nathan&nbsp;
          <span className={styles.wave}>
            <PiHandWavingThin size={40} />
          </span>
        </span>
        <div className="w-3/4 max-w-lg">
          <span className="flex flex-col text-lg text-amber-50 mt-4">
            I build full stack web apps.
            <span className="text-xl font-medium my-4">
              Team player, excellent communication and collaboration skills with
              a track record of working cross-functionally in agile, remote,
              distributed environments.
            </span>
            Find samples of my work below.
          </span>
        </div>
      </p>
      <PortfolioSamples />
    </main>
  );
}
