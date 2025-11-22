import { groq } from "next-sanity";
import client from "@/sanity/sanity.client";

export async function getProfile() {
  return client.fetch(
    groq`*[_type == "profile"]{
      _id,
      fullName,
      headline,
      profileImage {alt, "image": asset->url},
      shortBio,
      location,
      fullBio,
      email,
      "resumeURL": resumeURL.asset->url,
      socialLinks,
      skills
    }`
  );
}

export async function getJob(){
  return client.fetch(
    groq`*[_type == "job"]{
      _id,
      name,
      jobTitle,
      logo {alt, "image": asset->url},
      url,
      description,
      startDate,
      endDate,
    }`
  )
}

export async function getProject() {
  return client.fetch(
    groq`*[_type == "project"] | order(order asc){
      _id,
      name,
      "slug":slug.current,
      tagline,
      "logo":logo.asset->url,
      "coverImage":coverImage.asset->url,
      }`
  )
}
export async function getSingleProject(slug: string) {
  return client.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      name,
      "slug": slug.current,
      projectUrl,
      coverImage {
        alt,
        "image": asset->url
      },
      tagline,
      description,
      logo
    }`,
    { slug }
  );
}

export async function getHomeProjects() {
  return client.fetch(
    groq`*[_type == "project" && featured == true] | order(_createdAt desc) [0...3] {
      _id,
      name,
      "slug": slug.current,
      tagline,
      coverImage { alt, "image": asset->url }
    }`
  );
}
