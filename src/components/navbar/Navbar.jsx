import Hamburger from "hamburger-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const menus = [
  {
    label: "home",
    link: "#",
  },
  {
    label: "couple",
    link: "#",
  },
  {
    label: "story",
    link: "#",
  },
  {
    label: "gallery",
    link: "#",
  },
  {
    label: "rsvp",
    link: "#",
  },
  {
    label: "events",
    link: "#",
  },
  {
    label: "blog",
    link: "#",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full">
      <Top />
      <div className="md:hidden">
        <Mobile />
      </div>
      <div className="hidden md:block">
        <Desktop />
      </div>
    </div>
  );
};

export default Navbar;

const Desktop = () => {
  return (
    <div className="relative w-full bg-white drop-shadow-md flex items-center justify-between py-2 px-4">
      <div>
        <div className="h-10 z-10">
          <Logo large />
        </div>
      </div>
      <ul className="flex items-center gap-4">
        {menus.map((item, index) => {
          const { label, link } = item;
          return (
            <a key={index} href={link}>
              <li className="capitalize hover:text-green text-orange">
                {label}
              </li>
            </a>
          );
        })}
      </ul>
      <button className="button">RSVP</button>
    </div>
  );
};

const Mobile = () => {
  const [show, setShow] = useState(false);
  const menuVariant = {
    true: {
      height: "fit-content",
    },
    false: {
      height: 0,
    },
  };

  const handleToggle = (toggled) => {
    console.log(toggled);
    toggled ? setShow(true) : setShow(false);
  };
  return (
    <div className="relative h-10 w-full bg-white drop-shadow-md flex items-center">
      <div className="flex justify-between w-full pl-2">
        <div className="translate-y-[10px] z-10">
          <Logo />
        </div>
        <Hamburger
          size={20}
          color="#602925"
          distance="sm"
          onToggle={(toggled) => handleToggle(toggled)}
        />
      </div>
      <motion.ul
        variants={menuVariant}
        initial={show.toString()}
        animate={show.toString()}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
        className="w-full absolute top-10 bg-green overflow-hidden"
      >
        {menus.map((item, index) => {
          const { label, link } = item;
          return (
            <a key={index} href={link}>
              <li className="text-white p-4 hover:bg-blue transition-all text-sm uppercase">
                {label}
              </li>
            </a>
          );
        })}
        <div className="p-2">
          <button className="button">RSVP</button>
        </div>
      </motion.ul>
    </div>
  );
};

const Top = () => {
  const contact = [
    {
      icon: "ri-mail-fill",
      text: "leonellcruz111513@gmail.com",
    },
    {
      icon: "ri-phone-fill",
      text: "09154208301",
    },
  ];
  return (
    <div className="w-full h-6 bg-blue flex items-center px-2">
      <div className="flex items-center gap-3">
        {contact.map((item, index) => {
          const { icon, text } = item;
          return (
            <div
              className="flex items-center gap-2 text-white text-xs"
              key={index}
            >
              <i className={icon} />
              <p className="">{text}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Logo = ({ large }) => {
  return (
    <a href="#">
      <div
        className={classNames(
          "rounded-[50%] bg-blue hover:scale-[1.1] transition-all",
          large ? "h-16 w-16" : "h-12 w-12"
        )}
      ></div>
    </a>
  );
};
