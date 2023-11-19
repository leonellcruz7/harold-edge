import React, { useState } from "react";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import classNames from "classnames";
import Link from "next/link";

const menus = [
  {
    label: "welcome",
    link: "test",
  },
  {
    label: "events",
    link: "test",
  },
  {
    label: "RSVP",
    link: "test",
  },
  {
    label: "photos",
    link: "test",
  },
  {
    label: "accomodation",
    link: "test",
  },
];

const Navbar = () => {
  return (
    <div>
      <Mobile />
      <Desktop />
    </div>
  );
};

export default Navbar;

const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  const panelVariant = {
    true: {
      x: 0,
    },
    false: {
      x: "-100%",
    },
  };

  return (
    <div>
      <div className="fixed top-0 right-0 z-50 w-full h-12 bg-dark flex md:hidden items-center px-4 justify-end">
        <Hamburger
          size={24}
          color="#F3F4F6"
          toggled={isOpen}
          toggle={setIsOpen}
        />
      </div>
      <motion.div
        variants={panelVariant}
        initial={isOpen.toString()}
        animate={isOpen.toString()}
        transition={{ type: "spring", duration: 0.5, bounce: 0 }}
        className="w-[95vw] pt-12 max-w-[500px] h-screen bg-purple fixed z-10 left-0"
      >
        <ul className="p-6 flex flex-col gap-6">
          {menus.map((item, index) => {
            const { label, link } = item;
            return (
              <li key={index} className="text-white capitalize">
                {label}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

const Desktop = () => {
  return (
    <div className="fixed top-0 right-0 z-50 w-full h-16 py-4 bg-dark hidden md:flex items-center px-4 justify-center">
      <ul className="flex items-center gap-8">
        {menus.map((item, index) => {
          const { label, link } = item;
          return (
            <Link href={link}>
              <li
                key={index}
                className={classNames(
                  "text-white capitalize  pb-2",
                  index === 0 && "border-b-[2px] border-white"
                )}
              >
                {label}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};
