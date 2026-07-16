import Image from "next/image";
import Reveal from "@/components/Reveal";

type ProjectSectionProps = {
  id: string;
  label: string;
  title: string;
  lead: string;
  description: string;
  image: string;
  imageAlt: string;
  features: string[];
  technologies: string[];
  projectUrl?: string;
  githubUrl?: string;
  reverse?: boolean;
};

export default function ProjectSection({
  id,
  label,
  title,
  lead,
  description,
  image,
  imageAlt,
  features,
  technologies,
  projectUrl = "#",
  githubUrl = "#",
  reverse = false,
}: ProjectSectionProps) {
  return (
    <section
      id={id}
      className={`projectSection ${reverse ? "projectSectionReverse" : ""}`}
    >
      <div className="projectSectionInner">
        <div className="projectHeading">
          <p className="sectionLabel">{label}</p>
          <h2>{title}</h2>
          <p className="projectLead">{lead}</p>
        </div>

        <div className="projectGrid">
            <Reveal direction={reverse ? "right" : "left"}>
                <div className="projectPreview">
                    <div className="previewWindow">
                    <div className="previewBar" aria-hidden="true">
                        <span />
                        <span />
                        <span />
                    </div>

                    <div className="projectImageFrame">
                        <Image
                        src={image}
                        alt={imageAlt}
                        width={1680}
                        height={1050}
                        className="projectImage"
                        />
                    </div>
                    </div>
                </div>
            </Reveal>

        <Reveal direction={reverse ? "left" : "right"}>
            <div className="projectContent">
                <p className="projectDescription">{description}</p>

                <ul className="featureList">
                {features.map((feature) => (
                    <li key={feature}>{feature}</li>
                ))}
                </ul>

                <div className="techList">
                {technologies.map((technology) => (
                    <span key={technology}>{technology}</span>
                ))}
                </div>

                <div className="homePlusActions">
                <a
                    href={projectUrl}
                    className="primaryLink"
                    target="_blank"
                    rel="noreferrer"
                >
                    View Project
                    <span aria-hidden="true">→</span>
                </a>

                <a
                    href={githubUrl}
                    className="secondaryLink"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                    <span aria-hidden="true">↗</span>
                </a>
                </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}