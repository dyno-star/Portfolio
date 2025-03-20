"use client";
import React, { JSX } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/utils";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: { name: string; link: string; icon?: JSX.Element }[];
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 1, y: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        "flex max-w-fit fixed top-0 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-full dark:bg-black bg-white shadow-lg z-[5000] px-8 py-4 items-center justify-center space-x-4",
        className
      )}
    >
      {navItems.map((navItem, idx) => (
        <Link
          key={`link=${idx}`}
          href={navItem.link}
          className={cn(
            "relative items-center flex space-x-1 text-gray-600 dark:text-gray-200 dark:hover:text-blue-300 hover:text-blue-500"
          )}
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-sm">{navItem.name}</span>
        </Link>
      ))}
    </motion.div>
  );
};