import data from "../../work-samples.json";
import Project from "./Project";

const PortfolioSamples = () => {
  return (
    <>
      {data["samples"].map((sample) => {
        return (
          <>
            <Project
              title={sample.title}
              siteUrl={sample.siteUrl}
              imgPath={sample.imgPath}
              description={sample.description}
            />
          </>
        );
      })}
    </>
  );
};

export default PortfolioSamples;
