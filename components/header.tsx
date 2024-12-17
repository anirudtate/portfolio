"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";

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
  const pathname = usePathname();
  const refs = useRef<(HTMLAnchorElement | null)[]>([]);
  const [underlineWidth, setUnderlineWidth] = useState(0);
  const [underlineOffset, setUnderlineOffset] = useState(0);

  useEffect(() => {
    if (underlineWidth === 0) {
      const index = navElements.findIndex((x) => pathname === x.link);
      const ref = refs.current[index];
      if (ref) {
        setUnderlineWidth(ref?.offsetWidth);
        setUnderlineOffset(ref?.offsetLeft);
      }
    }
  }, [pathname, underlineWidth]);

  return (
    <div className="container flex justify-between px-2 py-6">
      <div>Anirud Tate</div>
      <div className="relative flex">
        {navElements.map((navElement, index) => (
          <Link
            ref={(ref) => {
              refs.current[index] = ref;
            }}
            className="px-2"
            onMouseOver={(e) => {
              setUnderlineWidth(e.currentTarget.offsetWidth);
              setUnderlineOffset(e.currentTarget.offsetLeft);
            }}
            onMouseLeave={() => {
              setUnderlineWidth(0);
              setUnderlineOffset(0);
            }}
            href={navElement.link}
            key={index}
          >
            {navElement.name}
          </Link>
        ))}
        <motion.div
          className="absolute bg-foreground h-[1px] top-7"
          animate={{ left: underlineOffset + 2, width: underlineWidth - 3 }}
        />
      </div>
    </div>
  );
}
