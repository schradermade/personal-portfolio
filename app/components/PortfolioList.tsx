import PortfolioProject from "./PortfolioProject";
import {
  PortfolioProjects,
  PortfolioProjectProps,
} from "../../constants/portfolio-items";

const ProjectList = () => {
  return (
    <>
      {PortfolioProjects.map((item: PortfolioProjectProps) => {
        return (
          <>
            <PortfolioProject
              title={item.title}
              siteUrl={item.siteUrl}
              imgPath={item.imgPath}
              description={item.description}
              features={item.features}
            />
          </>
        );
      })}
    </>
  );
};

export default ProjectList;
