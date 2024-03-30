"use client";

import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { mainConfig } from "@/config/mainConfig";
import Link from "next/link";
import { useEffect } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const diffCalc = () => {
      const diff =
        (new Date().getTime() - new Date(mainConfig.date_of_birth).getTime()) /
        1000 /
        60 /
        60 /
        24 /
        365;
      return diff.toFixed(9);
    };

    const ageElement = document.getElementById("age");

    const updateAge = () => {
      if (ageElement) {
        ageElement.innerText = diffCalc().toString();
      }
      setTimeout(() => {
        updateAge();
      }, 10);
    };

    updateAge();
  }, []);
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-2 text-center">
          <div className="md:text-8xl text-5xl font-bold">
            {mainConfig.name}
          </div>
          <div className="md:text-3xl text-2xl text-muted-foreground font-normal">
            {mainConfig.profession}
          </div>
          <div className="p-1" />
          <div className="flex gap-2">
            {mainConfig.socials.map((social, index) => (
              <Link key={index} href={social.link} target="_blank">
                <Button size="icon" variant="outline">
                  <social.icon className="h-5 w-5" />
                </Button>
              </Link>
            ))}
          </div>
        </div>
        <Meteors className="" number={40} />
      </div>
      <div className="h-screen w-full max-w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-8 text-center">
          <div className="text-3xl max-w-5xl px-4 leading-normal font-light">
            I'm <span id="age"></span> years old {mainConfig.description}
          </div>
        </div>
      </div>
      <div className="h-screen w-full max-w-full flex items-center justify-center">
        <ProjectCard />
      </div>
    </>
  );
}

function ProjectCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <ProjectModal
          trigger={
            <img
              className="rounded-sm hover:rotate-2 transition-transform cursor-pointer"
              src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
              alt="project-image"
            />
          }
        />
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-1 -mt-2">
          <div className="text-xl font-bold">AlgoVisual</div>
          <div className="font-light text-lg">
            A real-time coaching app for students learning to paint. This app is
            my baby, designed and built on my own.{" "}
            <ProjectModal
              trigger={
                <span className="font-normal underline cursor-pointer underline-offset-4">
                  Read more
                </span>
              }
            />
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex gap-1">
        <Button className="flex-1" variant="secondary">
          Github
        </Button>
        <Button className="flex-1" variant="outline">
          View Live
        </Button>
      </CardFooter>
    </Card>
  );
}

function ProjectModal({ trigger }: { trigger: React.ReactNode }) {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader className="mt-4">
          <img
            className="rounded-sm"
            src="https://steam-portfolio-demo.vercel.app/project-imgs/example-project.jpg"
            alt="project-image"
          />
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4"></div>
          <div className="grid grid-cols-4 items-center gap-4"></div>
        </div>
        <DialogFooter>
          <Button type="submit">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
