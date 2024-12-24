import Link from "next/link";
import { LinkAnimation } from "./link-animation";
import { Button } from "./ui/button";
import { AppearFromAbove, AppearFromBelow } from "./appear-animations";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { aboutConfig } from "@/config/aboutConfig";

const navElements = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Blog",
    link: "/blogs",
  },
  {
    name: "Snippets",
    link: "/snippets",
  },
  {
    name: "Resources",
    link: "/resources",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

export function Header() {
  return (
    <div className="sticky top-0 z-50 bg-background/85">
      <div className="container flex justify-between py-6 items-center">
        <AppearFromAbove>
          <div className="text-2xl font-serif">
            <Link href="/">
              <LinkAnimation height="32px">Anirud Tate</LinkAnimation>
            </Link>
          </div>
        </AppearFromAbove>

        {/* Desktop Navigation */}
        <div className="hidden md:flex relative gap-6 items-center">
          {navElements.map((navElement, index) => (
            <AppearFromBelow
              key={index}
              delay={0.5 + index * 0.2}
              duration={0.4}
            >
              <Link href={navElement.link}>
                <LinkAnimation height="26px">{navElement.name}</LinkAnimation>
              </Link>
            </AppearFromBelow>
          ))}
          <AppearFromAbove>
            <Button className="text-md rounded-full" asChild>
              <Link href={aboutConfig.resume_link} target="_blank">
                Resume
              </Link>
            </Button>
          </AppearFromAbove>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <SheetHeader className="hidden">
                <SheetTitle>Navigation</SheetTitle>
                <SheetDescription>Navigation for mobile.</SheetDescription>
              </SheetHeader>
              <nav className="flex flex-col gap-2">
                {navElements.map((navElement, index) => (
                  <Link
                    key={index}
                    href={navElement.link}
                    className="block px-2 py-1 text-lg hover:text-primary"
                  >
                    {navElement.name}
                  </Link>
                ))}
                <Button className="mt-4" asChild>
                  <Link href={aboutConfig.resume_link} target="_blank">
                    Resume
                  </Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
