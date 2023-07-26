import data from "../../work-samples.json";
import PortfolioSite from "./PortfolioSite";

const PortfolioSamples = () => {
  return (
    <>
      {data["samples"].map((sample) => {
        return (
          <>
            <PortfolioSite
              title={sample.title}
              siteUrl={sample.siteUrl}
              imgPath={sample.imgPath}
            />
          </>
        );
      })}
    </>
  );
};

export default PortfolioSamples;
