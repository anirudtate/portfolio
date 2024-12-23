import { AppearFromBelow } from "@/components/appear-animations";
import { LinkAnimation } from "@/components/link-animation";
import { ProjectCard } from "@/components/project-card";
import { aboutConfig } from "@/config/aboutConfig";
import { projectsConfig } from "@/config/projectsConfig";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Hero />
      <Projects />
    </div>
  );
}

function Hero() {
  return (
    <div>
      <div className="pt-[100px] sm:pt-[150px]" />
      <AppearFromBelow>
        <div className="text-lg sm:text-2xl max-w-[550px]">
          {aboutConfig.description}
        </div>
      </AppearFromBelow>
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-8 sm:gap-0">
        <AppearFromBelow delay={0.5}>
          <div className="mt-[30px] sm:mt-[50px] text-5xl sm:text-8xl font-serif max-w-[900px]">
            {aboutConfig.designation}
          </div>
        </AppearFromBelow>
        <AppearFromBelow delay={0.8}>
          <div className="flex flex-col sm:items-end">
            <Link href={`mailto:${aboutConfig.email}`}>
              <LinkAnimation>
                <div className="flex gap-2 items-center">
                  <div className="text-sm sm:text-base">
                    {aboutConfig.email}
                  </div>
                  <ArrowUpRight />
                </div>
              </LinkAnimation>
            </Link>
            <div className="text-muted-foreground text-sm sm:text-base">
              Scroll to explore
            </div>
          </div>
        </AppearFromBelow>
      </div>
    </div>
  );
}

function Projects() {
  return (
    <div className="my-[200px] grid grid-cols-2 gap-8 gap-y-16">
      {projectsConfig.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
