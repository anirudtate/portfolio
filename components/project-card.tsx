"use client";

import { projectsConfig } from "@/config/projectsConfig";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { LinkAnimation } from "./link-animation";
import { useState } from "react";

export function ProjectCard({
  project,
}: {
  project: (typeof projectsConfig)[0];
}) {
  const [hoverted, setHovered] = useState(false);
  return (
    <Link href={project.link} target="_blank">
      <motion.div
        className="group flex flex-col"
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
      >
        <div className="w-full rounded-xl overflow-hidden">
          <Image
            className="rounded-xl group-hover:scale-105 transition-all duration-300 ease-in-out"
            src={project.image}
            width={960}
            height={720}
            alt={project.name}
          />
        </div>
        <div className="p-2" />
        <div className="flex flex-col gap-2">
          <LinkAnimation parentHovered={hoverted}>
            <div className="font-semibold flex gap-2 items-center">
              {project.name}
              <ArrowUpRight className="shrink-0" />
            </div>
          </LinkAnimation>
          <div className="text-md text-muted-foreground">
            {project.description}
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
