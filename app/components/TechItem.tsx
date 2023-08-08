import React from "react";

import { FaGithub, FaLinkedin, FaNodeJs } from "react-icons/fa";
import { SiSemanticuireact, SiTypescript, SiNaver } from "react-icons/si";
import { BiLogoAws } from "react-icons/bi";
import { HiCloud } from "react-icons/hi";
import { IconType } from "react-icons";

const Svgs: Record<string, IconType> = {
  FaGithub: FaGithub,
  FaLinkedin: FaLinkedin,
  FaNodeJs: FaNodeJs,
  SiSemanticuireact: SiSemanticuireact,
  SiTypescript: SiTypescript,
  BiLogoAws: BiLogoAws,
  HiCloud: HiCloud,
  SiNaver: SiNaver,
};

type Props = {
  label: string;
  svgComponent: string;
};

const TechItem: React.FC<Props> = ({ label, svgComponent }) => {
  const component = Svgs[svgComponent];
  const SvgComponent = React.createElement(component, {
    key: label,
    color: "black",
  });
  return (
    <div className="flex items-center text-lime-300 text-base font-light no-underline">
      {SvgComponent}
      &nbsp;{label}
    </div>
  );
};

export default TechItem;
