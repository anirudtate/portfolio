import { ScrambleText } from "@/components/scramble-text";
import { MapPin, LibraryBig, Laptop } from "lucide-react";
import { Age } from "./age";

export function Header() {
  return (
    <header className="mb-16 space-y-4">
      <h1 className="text-4xl font-bold mb-4 animate-fade-in text-white">
        <span className="inline-block">
          <ScrambleText text="Anirud Tate" />
        </span>
      </h1>
      <div className="flex flex-col gap-2 text-gray-400">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Mumbai, India
        </div>
        <div className="flex items-center gap-2">
          <LibraryBig className="w-4 h-4" />
          Pursing MCA @ Thakur Collge and <Laptop className="w-4 h-4" />{" "}
          Freelancing
        </div>
      </div>
      <p className="leading-relaxed animate-fade-in-up">
        I&apos;m a <Age /> years old full stack web developer. I love building
        things and solving problems. I making stuff, solving problems and I live
        on the terminal. If i&apos;m not coding, I&apos;m probably working out,
        watching Anime/Movies or obsessing over bikes and cars.
      </p>
    </header>
  );
}
