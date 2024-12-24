import {
  AppearFromAbove,
  AppearFromBelow,
} from "@/components/appear-animations";
import { LinkAnimation } from "@/components/link-animation";
import { ProjectCard } from "@/components/project-card";
import { aboutConfig } from "@/config/aboutConfig";
import { projectsConfig } from "@/config/projectsConfig";
import { experienceConfig } from "@/config/experienceConfig";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Projects />
      <Experience />
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div className="pt-[100px] sm:pt-[150px]" />
      <AppearFromBelow>
        <div className="text-xl sm:text-2xl max-w-[550px]">
          {aboutConfig.description}
        </div>
      </AppearFromBelow>
      <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-8 md:gap-0">
        <AppearFromBelow delay={0.5}>
          <div className="mt-[40px] sm:mt-[50px] text-6xl sm:text-8xl font-serif max-w-[900px]">
            {aboutConfig.designation}
          </div>
        </AppearFromBelow>
        <AppearFromBelow delay={0.8}>
          <div className="flex flex-col md:items-end">
            <Link href={`mailto:${aboutConfig.email}`}>
              <LinkAnimation>
                <div className="flex gap-2 items-center">
                  {aboutConfig.email}
                  <ArrowUpRight />
                </div>
              </LinkAnimation>
            </Link>
            <div className="text-muted-foreground">Scroll to explore</div>
          </div>
        </AppearFromBelow>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="my-[200px]">
      <div className="flex justify-between items-center">
        <AppearFromBelow>
          <div className="text-5xl font-semibold">Projects</div>
        </AppearFromBelow>
        <AppearFromAbove>
          <Link href="/projects">
            <LinkAnimation>
              <div className="flex items-center gap-2">
                View All Projects
                <ArrowUpRight />
              </div>
            </LinkAnimation>
          </Link>
        </AppearFromAbove>
      </div>
      <div className="mt-[50px] grid grid-cols-1 gap-8 gap-y-16 md:grid-cols-2">
        {projectsConfig.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
}

function Experience() {
  return (
    <div className="my-[200px]">
      <AppearFromBelow>
        <div className="text-5xl font-semibold mb-[50px]">Experience</div>
      </AppearFromBelow>
      <div className="space-y-16">
        {experienceConfig.map((exp, index) => (
          <AppearFromBelow key={index} delay={index * 0.2}>
            <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-8">
              <div>
                <div className="text-xl font-medium">{exp.company}</div>
                <div className="text-muted-foreground">{exp.duration}</div>
              </div>
              <div>
                <div className="text-xl font-medium mb-2">{exp.position}</div>
                <div className="text-muted-foreground mb-4">
                  {exp.description}
                </div>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, i) => (
                    <div
                      key={i}
                      className="px-3 py-1 bg-secondary rounded-full text-sm"
                    >
                      {tech}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </AppearFromBelow>
        ))}
      </div>
    </div>
  );
}
