import Link from "next/link";

const works = [
  {
    title: "Freelancing",
    href: "https://www.upwork.com/freelancers/~0116e477cc852f86ec?mp_source=share",
    period: "Dec 2024 - Present",
    role: "Full Stack Web Developer",
    description: "Creating websites as a freelancer",
  },
  {
    title: "TagOn / Pentagon Tapes",
    href: "https://tagonstore.com",
    period: "May 2023 - Nov 2024",
    role: "React JS Developer",
    description:
      "Created ERP system, Logistics system and Seller portal for an e-commerce app TagOn",
  },
];

export function WorkSection() {
  return works.map((item, index) => (
    <div key={index} className="group">
      <Link href={item.href} target="_blank">
        <h3 className="text-xl font-semibold mb-1 text-white group-hover:text-accent transition-colors duration-200">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400 mb-2">
          {item.role} {item.period && `(${item.period})`}
        </p>
        <p className="text-gray-300">{item.description}</p>
      </Link>
    </div>
  ));
}
