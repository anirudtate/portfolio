import { Button } from "@/components/ui/button";
import { Meteors } from "@/components/ui/meteors";
import { MaskContainer } from "@/components/ui/svg-mask-effect";
import { mainConfig } from "@/config/mainConfig";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="relative h-screen w-full flex items-center justify-center">
        <div className="flex items-center justify-center flex-col gap-2">
          <div className="text-8xl font-bold">{mainConfig.name}</div>
          <div className="text-3xl text-muted-foreground">
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
        <MaskContainer
          revealText={
            <p className="max-w-4xl mx-auto text-center text-4xl font-bold">
              The first rule of MRR Club is you do not talk about MRR Club. The
              second rule of MRR Club is you DO NOT talk about MRR Club.
            </p>
          }
          className="h-[40rem]"
        >
          The first rule of <span className="text-red-500">MRR Club</span> is
          you do not talk about MRR Club. The second rule of MRR Club is you DO
          NOT talk about <span className="text-red-500">MRR Club</span>.
        </MaskContainer>
        {/* <div className="flex items-center justify-center flex-col gap-2">
          <div className="text-5xl font-bold">ABOUT</div>
          <div className="text-3xl text-muted-foreground">
            {mainConfig.description}
          </div>
        </div> */}
      </div>
    </>
  );
}
