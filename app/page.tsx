// import { BlogSection } from "@/components/blog-section";
import { Header } from "@/components/header";
import { ProjectSection } from "@/components/project-section";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

export default function Home() {
  return (
    <>
      <Header />
      <Section title="Projects">
        <ProjectSection limit={2} />
        <ViewAllLink viewAllHref="projects" viewAllText="All Projects" />
      </Section>
      {/* <Section title="Blog">
        <BlogSection limit={4} />
        <ViewAllLink viewAllHref="blogs" viewAllText="All Blogs" />
      </Section> */}
    </>
  );
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="mb-16 animate-fade-in-up">
      <h2 className="text-2xl font-bold mb-6 flex items-center text-white">
        <span className="text-accent mr-2">*</span> {title}
      </h2>
      <div className="space-y-8">{children}</div>
    </section>
  );
}

function ViewAllLink({
  viewAllHref,
  viewAllText,
}: {
  viewAllHref: string;
  viewAllText: string;
}) {
  return (
    <Link
      href={viewAllHref}
      className="inline-flex items-center gap-1 mt-6 text-accent hover:underline group"
    >
      {viewAllText}{" "}
      <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
    </Link>
  );
}
