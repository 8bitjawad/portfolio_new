import { getProfile } from "@/sanity/sanity.query";
import type { ProfileType } from "@/types";
import AboutAnimated from "./AboutAnimated";

export default async function About() {
  const profile: ProfileType[] = await getProfile();

  return <AboutAnimated profile={profile} />;
}
