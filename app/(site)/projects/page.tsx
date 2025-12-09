import Image from "next/image";
import Link from "next/link";
import { getProject } from "@/sanity/sanity.query";
import type { ProjectType } from "@/types";

export default async function Project() {
  const projects: ProjectType[] = await getProject();

  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6">
      <section className="max-w-2xl mb-16">
        <h1 className="text-3xl font-bold text-[#800080] tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight">
          Featured projects I&apos;ve built over the years
        </h1>
        <p className="text-base text-black leading-relaxed">
          I&apos;ve worked on several projects in full-stack development and AI but these
          are the ones that I&apos;m most proud of. My primary tech stack includes Django or Next.js/Typescript for full-stack development, PostgreSQL for Databases and Python for AIML.
        </p>
      </section>

      <section className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5 mb-12">
        {projects.map((project) => (
          <Link
            href={`/projects/${project.slug}`}
            key={project._id}
            className="flex items-center text-[#800080] gap-x-4 bg-gray-200 border border-transparent hover:border-zinc-700 p-4 rounded-lg ease-in-out"
          >
            <Image
              src={project.logo}
              width={60}
              height={60}
              alt={project.name}
              className="bg-zinc-800 rounded-md p-2"
            />
            <div>
              <h2 className="font-semibold mb-1">{project.name}</h2>
              <div className="flex flex-wrap gap-2">
                {Array.isArray(project.tagline)
                  ? project.tagline.map((tag: string) => (
                      <span
                        key={tag}
                        className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md border border-purple-300"
                      >
                        {tag}
                      </span>
                    ))
                  : project.tagline && (
                      <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-md border border-purple-300">
                        {project.tagline}
                      </span>
                    )}
              </div>
            </div>
          </Link>
        ))}
      </section>
    </main>
  );
}