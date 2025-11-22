"use client";

import { motion, Variants } from "framer-motion";
import type { ProfileType } from "@/types";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { BiEnvelope, BiFile } from "react-icons/bi";

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageAnim: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7 } },
};

export default function AboutAnimated({ profile }: { profile: ProfileType[] }) {
  const data = profile[0];

  return (
    <motion.main
      className="lg:max-w-7xl mx-auto max-w-3xl md:px-16 px-6"
      initial="hidden"
      animate="show"
      variants={container}
    >
      {/* Top Section */}
      <section className="grid lg:grid-cols-2 grid-cols-1 gap-x-6 justify-items-center">

        {/* Text Column */}
        <motion.div className="order-2 lg:order-none" variants={item}>
          <motion.h1
            variants={item}
            className="lg:text-5xl text-4xl font-bold mb-8"
          >
            I&apos;m <span className="text-[#800080]">{data.fullName}</span>.  
            This is my journey, where I design the future.
          </motion.h1>

          <motion.div
            variants={item}
            className="flex flex-col gap-y-3 text-black leading-relaxed"
          >
            <PortableText value={data.fullBio} />
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <motion.div
          className="flex flex-col lg:justify-self-center justify-self-start gap-y-8 lg:order-1 order-none mb-12"
          variants={item}
        >
          <motion.div variants={imageAnim}>
            <Image
              className="rounded-2xl mb-4 object-cover max-h-96 min-h-96 bg-top bg-[#1d1d20]"
              src={data.profileImage.image}
              width={400}
              height={400}
              quality={100}
              alt={data.profileImage.alt}
            />

            <motion.a
              variants={item}
              href={`${data.resumeURL}?dl=${data.fullName}_resume`}
              className="flex items-center justify-center gap-x-2 bg-[#1d1d20] text-white hover:border-zinc-700 border border-transparent rounded-md duration-200 py-2 text-center font-medium"
            >
              <BiFile className="text-base" /> Download Resumé
            </motion.a>
          </motion.div>

          <motion.ul variants={item}>
            <li>
              <a
                href={`mailto:${data.email}`}
                className="flex items-center gap-x-2 hover:text-purple-400 duration-300"
              >
                <BiEnvelope className="text-lg" />
                {data.email}
              </a>
            </li>
          </motion.ul>
        </motion.div>
      </section>

      {/* Expertise Section */}
      <motion.section className="mt-24 max-w-2xl" variants={item}>
        <motion.h2 variants={item} className="font-semibold text-4xl mb-4">
          Expertise
        </motion.h2>

        <motion.p variants={item} className="text-black max-w-lg">
          I&apos;ve spent some time working on my skills.
          Here are a few of them.
        </motion.p>

        <motion.ul
          className="flex flex-wrap items-center gap-3 mt-8"
          variants={container}
        >
          {data.skills.map((skill, id) => (
            <motion.li
              key={id}
              variants={item}
              className="bg-[#800080] text-white rounded-md px-2 py-1"
            >
              {skill}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </motion.main>
  );
}
