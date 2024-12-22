import { AppearFromBelow } from "@/components/appear-animations";
import { LinkAnimation } from "@/components/link-animation";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="relative">
      <div className="z-50">
        <div className="pt-[150px]" />
        <AppearFromBelow>
          <div className="text-2xl max-w-[550px] text-accent">
            I specialize in building websites with React JS, Next JS and
            Javascript ecosystem, with strong problemsolving skills and a keen
            eye for aesthetics.
          </div>
        </AppearFromBelow>
        <div className="flex justify-between items-end">
          <AppearFromBelow delay={0.5}>
            <div className="mt-[50px] text-8xl font-serif max-w-[900px]">
              Full Stack Web Developer
            </div>
          </AppearFromBelow>
          <AppearFromBelow delay={0.8}>
            <div className="flex flex-col items-end">
              <Link href="mailto:anirud.programming@gmail.com">
                <LinkAnimation>
                  <div className="flex gap-2 items-center">
                    <div>anirud.programming@gmail.com</div>
                    <ArrowUpRight />
                  </div>
                </LinkAnimation>
              </Link>
              <div className="text-muted-foreground">Scroll to explore</div>
            </div>
          </AppearFromBelow>
        </div>
      </div>
    </div>
  );
}
