import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { Github, Instagram, Linkedin, Mail, Twitter } from "lucide-react";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="text-8xl font-bold">ANIRUD TATE</div>
          <div className="text-3xl text-muted-foreground">
            FRONT-END DEVELOPER
          </div>
          <div className="p-1" />
          <div className="flex gap-2">
            <Button size="icon" variant="outline">
              <Github className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline">
              <Instagram className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline">
              <Linkedin className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline">
              <Mail className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="outline">
              <Twitter className="h-5 w-5" />
            </Button>
          </div>
        </div>
        <Meteors className="" number={40} />
      </div>
      <div className="h-screen w-full max-w-full flex items-center justify-center">
        ANIRUD TATE
      </div>
    </>
  );
}
