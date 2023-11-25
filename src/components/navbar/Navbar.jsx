import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import classNames from "classnames";

const menus = [
  {
    label: "home",
    link: "#home",
  },
  {
    label: "couple",
    link: "#couple",
  },
  {
    label: "gallery",
    link: "#gallery",
  },
  {
    label: "bridesmaid & groomsmen",
    link: "#bridesmaid-groomsmen",
  },
  {
    label: "location",
    link: "#location",
  },
];

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full z-50">
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
    <div className="backdrop-blur-lg backdrop-brightness-90">
      <div className="container drop-shadow-md flex items-center justify-between px-4">
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
                <li className="capitalize hover:text-red text-blue font-medium">
                  {label}
                </li>
              </a>
            );
          })}
        </ul>
        <a href="#rsvp" className="button">
          RSVP
        </a>
      </div>
    </div>
  );
};

const Mobile = () => {
  const [show, setShow] = useState(false);
  const menuVariant = {
    true: {
      x: 0,
    },
    false: {
      x: "100%",
    },
  };
  useEffect(() => {
    const content = document.querySelector(".content");

    if (show) {
      content.style.filter = "blur(4px) brightness(.9)";
    } else {
      content.style.filter = "blur(0) brightness(1)";
    }
  }, [show]);

  const handleToggle = (toggled) => {
    toggled ? setShow(true) : setShow(false);
  };

  const handleClick = () => {
    setShow(false);
  };
  return (
    <div className="relative h-14 w-full backdrop-blur-lg backdrop-brightness-90 drop-shadow-md flex items-center">
      <div className="flex justify-between items-center w-full pl-2">
        <div className="translate-y-[10px] z-10">
          <Logo />
        </div>

        <Hamburger
          onToggle={(toggled) => handleToggle(toggled)}
          toggled={show}
          size={20}
          color="#929576"
          distance="sm"
        />
      </div>
      <motion.ul
        variants={menuVariant}
        initial={show.toString()}
        animate={show.toString()}
        transition={{ type: "spring", bounce: 0, duration: 0.6 }}
        className="w-full absolute top-10 overflow-hidden text-right flex flex-col items-end px-8 mt-10"
      >
        {menus.map((item, index) => {
          const { label, link } = item;
          return (
            <a onClick={handleClick} key={index} href={link} className="w-fit">
              <li className="text-red p-4 transition-all text-sm uppercase border-b-[1px] border-[#777] pl-10">
                {label}
              </li>
            </a>
          );
        })}
        <div className="py-4">
          <a href="#rsvp" onClick={handleClick} className="button">
            RSVP
          </a>
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
    <a href="#home">
      <div
        className={classNames(
          "rounded-[50%] bg-white hover:scale-[1.1] transition-all",
          large ? "h-24 w-24" : "h-16 w-16"
        )}
      ></div>
    </a>
  );
};
