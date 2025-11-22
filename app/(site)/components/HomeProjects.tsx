import Link from "next/link";
import Image from "next/image";
import type { ProjectType } from "@/types";

export default function HomeProjects({ projects }: { projects: ProjectType[] }) {
  return (
    <section className="mt-24">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <Link 
          href="/projects"
          className="text-purple-600 hover:text-purple-400 transition"
        >
          View All →
        </Link>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <Link
            key={project._id}
            href={`/projects/${project.slug}`}
            className="group block"
          >
            <div className="relative h-48 rounded-xl overflow-hidden border border-zinc-800">
              <Image
                src={project.coverImage?.image}
                alt={project.coverImage?.alt || project.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <h3 className="text-xl font-semibold mt-4 group-hover:text-purple-500 transition">
              {project.name}
            </h3>

            <p className="text-sm text-zinc-500 mt-1">
              {project.tagline}
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}
