import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import HeroAnimated from "./components/HeroAnimated";
import Job from "./components/job";

export default async function Home() {
  const profile: ProfileType[] = await getProfile();

  return (
    <main className="max-w-7xl mx-auto lg:px-16 px-6">
      {/* pass profile to client component */}
      <HeroAnimated profile={profile} />
      <h2 className="text-center text-2xl italic mt-12"> This website was built with Next.js and Sanity Studio.</h2>
      {/* server-side Job component (keeps fetching on server) */}
      <Job />
    </main>
  );
}
