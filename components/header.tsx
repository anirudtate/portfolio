import Link from "next/link";
import { LinkAnimation } from "./link-animation";
import { Button } from "./ui/button";
import { AppearFromAbove, AppearFromBelow } from "./appear-animations";

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
    <div className="container flex justify-between py-6 items-center">
      <AppearFromAbove>
        <div className="text-2xl font-serif">
          <Link href="/">
            <LinkAnimation height="32px">Anirud Tate</LinkAnimation>
          </Link>
        </div>
      </AppearFromAbove>
      <div className="relative flex gap-6 items-center">
        {navElements.map((navElement, index) => (
          <AppearFromBelow key={index} delay={0.5 + index * 0.2} duration={0.4}>
            <Link href={navElement.link}>
              <LinkAnimation height="26px">{navElement.name}</LinkAnimation>
            </Link>
          </AppearFromBelow>
        ))}
        <AppearFromAbove>
          <Button className="text-md rounded-full" asChild>
            <Link
              href="https://docs.google.com/viewer?url=https://docs.google.com/document/d/1znGt5Do-9yDSvCsGDALhy2r9wKSKyWtAu2uQgHImFXk/export?format=pdf"
              target="_blank"
            >
              Resume
            </Link>
          </Button>
        </AppearFromAbove>
      </div>
    </div>
  );
}
