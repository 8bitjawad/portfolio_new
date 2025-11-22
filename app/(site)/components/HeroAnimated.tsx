"use client";

import { motion, Variants } from "framer-motion";
import type { ProfileType } from "@/types";
import HeroSvg from "../icons/HeroSvg"; // safe to use inside client component

type Props = {
  profile: ProfileType[]; // data passed from server component
};

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function HeroAnimated({ profile }: Props) {
  const data = profile?.[0];

  return (
    <section className="relative flex xl:flex-row flex-col xl:items-center items-start xl:justify-center justify-between gap-x-12 lg:mt-32 mt-20 mb-16">
      {/* Background SVG */}
      <div className="absolute inset-0 -z-10 -left-10 -right-10 -top-10 -bottom-10">
        <HeroSvg />
      </div>

      <motion.div
        className="lg:max-w-2xl max-w-2xl"
        initial="hidden"
        animate="show"
        variants={container}
      >
        {/* headline */}
        <motion.h1
          variants={item}
          className="text-3xl font-bold tracking-tight sm:text-5xl mb-6 lg:leading-[3.7rem] leading-tight lg:min-w-[700px] min-w-full"
        >
          {data?.headline}
        </motion.h1>

        {/* short bio */}
        <motion.p variants={item} className="text-base text-black leading-relaxed">
          {data?.shortBio}
        </motion.p>

        {/* social links */}
        <motion.ul
          variants={item}
          className="flex items-center gap-x-6 my-10"
        >
          {data &&
            Object.entries(data.socialLinks || {})
              .sort()
              .map(([key, value]) => (
                <motion.li key={key} variants={item}>
                  <a
                    href={value}
                    rel="noreferrer noopener"
                    className="flex items-center text-white border border-transparent bg-[#800080] rounded-md px-2 py-1 gap-x-3 mb-5 hover:text-purple-400 duration-300"
                  >
                    {key[0].toUpperCase() + key.toLowerCase().slice(1)}
                  </a>
                </motion.li>
              ))}
        </motion.ul>
      </motion.div>
    </section>
  );
}