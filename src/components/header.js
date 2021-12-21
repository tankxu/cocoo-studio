import React, { Fragment, useEffect, useState, useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import classnames from "classnames";
import { Popover, Transition } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "@reach/router";
import {
  wiggleOnHover,
  heroTextMask,
  heroTextMaskInvert,
  heroTextMaskHover,
} from "./style.module.css";
import HeroTitleText1 from "../images/hero-title-text1.inline.svg";
import HeroTitleText2 from "../images/hero-title-text2.inline.svg";

const navigation = [
  { name: "设计语言", href: "/" },
  { name: "设计博客", href: "/blog" },
  { name: "CoStore", href: "/store" },
  { name: "Monkit UI", href: "/monkit" },
];

const HeaderLink = ({ title, link, activated, dark }) => {
  return (
    <Link
      key={title}
      to={link}
      className={classnames(
        activated
          ? "font-semibold"
          : "font-normal opacity-80 hover:opacity-100 hover:font-medium",
        dark ? "text-white" : "text-brand-dark",
        "text-center col-span-1 transition-all"
      )}
    >
      <span>{title}</span>
      {activated ? (
        <div
          className={classnames(
            "bg-white w-60px h-3px mx-auto relative bottom-[-17px] transition-all duration-500 animate-fade-in-500ms opacity-100",
            dark ? "" : "bg-gray-300 bottom-[-10px]"
          )}
        ></div>
      ) : null}
    </Link>
  );
};

const Header = () => {
  const page = useLocation().pathname;
  const isHome = page === "/";
  const [wiggleLogo, setWiggleLogo] = useState(false);
  const [hoverCloud, setHoverCloud] = useState(false);
  const ideologySection = useRef(null);

  const addWiggleClass = () => {
    setWiggleLogo(true);
  };

  const removeWiggleClass = () => {
    setWiggleLogo(false);
  };

  useEffect(() => {
    const logoHorizontal = document.querySelector(`#logo-horizontal`);
    const logoStacked = document.querySelector(`#logo-stacked`);

    if (logoHorizontal) {
      logoHorizontal.addEventListener(`mouseenter`, addWiggleClass, true);
      logoHorizontal.addEventListener(`mouseleave`, removeWiggleClass, true);
    }

    if (logoStacked) {
      logoStacked.addEventListener(`mouseenter`, addWiggleClass, true);
      logoStacked.addEventListener(`mouseleave`, removeWiggleClass, true);
    }

    return () => {
      logoHorizontal.removeEventListener(`mouseenter`, addWiggleClass, true);
      logoHorizontal.removeEventListener(`mouseleave`, removeWiggleClass, true);
      logoStacked.removeEventListener(`mouseenter`, addWiggleClass, true);
      logoStacked.removeEventListener(`mouseleave`, removeWiggleClass, true);
    };

    // const logoStacked = document.querySelector(`#logo-stacked`);
  }, []);

  return (
    <div
      className={classnames(
        isHome
          ? "overflow-hidden"
          : "border-b-[1px] border-gray-200 bg-position-960px fixed z-10",
        "w-full flex flex-col md:flex-col-reverse transition-all duration-700 bg-size-hero bg-white bg-gradient-to-b from-gradient-blue1 to-gradient-blue2 bg-no-repeat"
      )}
    >
      <Popover
        as="header"
        className={classnames("relative mx-auto w-full max-w-7xl")}
      >
        <div
          className={classnames(
            "px-4 sm:px-6 lg:px-8 flex flex-row-reverse md:flex-row justify-end relative mx-auto w-full max-w-7xl transition-all duration-500",
            isHome ? "px-0" : "md:pr-44 lg:pr-44"
          )}
        >
          <div
            id="logo-horizontal"
            className={classnames(
              "opacity-0 transition-all duration-500 md:absolute left-6",
              isHome ? "" : "opacity-100 delay-500",
              wiggleLogo ? wiggleOnHover : ""
            )}
          >
            <Link to="/">
              <span className="sr-only">CocooStudio</span>
              <StaticImage
                src="../images/cocoostudio-logo-horizontal.png"
                alt="Cocoo Studio Logo"
                placeholder="none"
                objectFit="contain"
                className="h-[72px] w-[188px]"
              />
            </Link>
          </div>

          <div
            className={classnames(
              isHome ? "w-0" : "md:w-full",
              "transition-all duration-500"
            )}
          ></div>

          <div
            className={classnames(
              "bg-transparent pt-[14px] md:pt-6 h-18",
              isHome ? "w-full" : "md:min-w-[360px] w-10 mr-6 md:mr-0 md:w-full"
            )}
          >
            <nav
              className={classnames(
                isHome ? "px-4 sm:px-6" : "",
                "relative max-w-7xl mx-auto flex items-center justify-between"
              )}
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div
                  className={classnames(
                    "text-xl lg:mx-auto w-full max-w-xl lg:max-w-2xl hidden md:grid md:grid-cols-4 transition-all duration-500",
                    isHome ? "" : "text-base"
                  )}
                >
                  {navigation.map((item, index) => (
                    <HeaderLink
                      title={item.name}
                      link={item.href}
                      activated={page === item.href}
                      dark={isHome}
                    />
                  ))}
                </div>
              </div>
            </nav>
          </div>

          <a
            href="https://coding.net"
            target="_blank"
            className={classnames(
              isHome
                ? "bottom-0 md:bottom-4 right-4 md:right-8"
                : "bottom-[10px] right-6",
              "hidden absolute xs:block"
            )}
          >
            <button className="font-semibold text-white px-6 py-3.5 bg-gradient-to-br from-brand-blue2 to-brand-blue1 rounded-full shadow-lightbutton hover:opacity-80">
              CODING 官网
            </button>
          </a>
        </div>

        <Transition
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-100 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden z-10"
          >
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600">
                    <span className="sr-only">Close menu</span>
                    <XIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="pt-5 pb-6">
                <div className="space-y-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classnames(
                        "block px-8 py-2 text-base font-medium text-gray-900 hover:bg-gray-50",
                        page === item.href
                          ? "cursor-not-allowed text-brand-blue1"
                          : null
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <a
                  href="https://coding.net"
                  target="_blank"
                  className="block px-8 mt-4 pt-5 border-t border-slate-100 xs:hidden"
                >
                  <button className="font-semibold text-white px-6 py-3.5 bg-gradient-to-br from-brand-blue2 to-brand-blue1 rounded-full shadow-lightbutton hover:opacity-80">
                    CODING 官网
                  </button>
                </a>
              </div>
            </div>
          </Popover.Panel>
        </Transition>
      </Popover>

      {/* Hero */}
      <div
        className={classnames(
          isHome
            ? "max-h-[880px] pt-12 pb-24"
            : "max-h-0 opacity-0 pointer-events-none",
          "text-center mx-auto max-w-7xl px-4 sm:px-14 lg:px-32 transition-all duration-700"
        )}
      >
        <div className={classnames(wiggleLogo ? wiggleOnHover : "")}>
          <Link to="/" id="logo-stacked">
            <span className="sr-only">CocooStudio</span>
            <StaticImage
              src="../images/cocoostudio-logo-stacked.png"
              alt="Cocoo Studio Logo"
              width="146"
              placeholder="none"
            />
          </Link>
        </div>
        <div
          className="inline-grid mt-24 group"
          onMouseEnter={() => setHoverCloud(true)}
          onMouseLeave={() => setHoverCloud(false)}
        >
          <HeroTitleText1 className="col-start-1 col-end-2 row-start-1 row-end-2 w-full h-auto" />
          <HeroTitleText2
            className={classnames(
              `col-start-1 col-end-2 row-start-1 row-end-2 w-full ${heroTextMask} blur-sm fill-[#b6e0f7] transition-all duration-500 h-auto`,
              hoverCloud ? heroTextMaskHover : null
            )}
          />
          <HeroTitleText2
            className={classnames(
              `col-start-1 col-end-2 row-start-1 row-end-2 w-full ${heroTextMaskInvert} fill-[#fff] transition-all duration-500 h-auto`,
              hoverCloud ? heroTextMaskHover : null
            )}
          />
          <StaticImage
            src="../images/hero-title-cloudshadow.png"
            alt="云端工作美学"
            placeholder="none"
            objectFit="contain"
            className="col-start-1 col-end-2 row-start-1 row-end-2 ml-[18.5%] w-[57.5%] h-auto mix-blend-multiply origin-bottom group-hover:scale-y-125 transition-all duration-500 pointer-events-none"
          />
          <StaticImage
            src="../images/hero-title-cloud2.png"
            alt="云端工作美学"
            placeholder="none"
            objectFit="contain"
            className="col-start-1 col-end-2 row-start-1 row-end-2 ml-[18.5%] w-[57.5%] h-auto group-hover:-translate-y-5 transition-all duration-500 pointer-events-none"
          />
          <StaticImage
            src="../images/hero-title-cloud1.png"
            alt="云端工作美学"
            placeholder="none"
            objectFit="contain"
            className="col-start-1 col-end-2 row-start-1 row-end-2 ml-[29.5%] w-[34.5%] h-auto transition-all duration-500 group-hover:-translate-y-7 pointer-events-none"
          />
        </div>
        <div className=" text-sm sm:text-base text-white mx-auto mt-14 text-left max-w-5xl">
          <p className="leading-relaxed">
            腾讯云 CODING 专注打造DevOps SaaS
            产品服务，为企业量身打造云研发工作套件。提出的体验语言“云端工作美学”，是为了让云研发工作体验变得更加“纯净简单”，更能“动态适应”不同场景和功能服务，也能企业变得更有“文化和思考”。
          </p>
          <p className="mt-4">
            Tencent CODING focuses on creating DevOps SaaS products and
            services, and tailoring cloud R&D work suites for enterprises.The
            experience language "Cloud Work Aesthetics" proposed by CODING
            DevOps is to make the cloud R&D work experience more "pure", to
            "dynamically adapt" to different scenarios and functional services,
            and to become more "cultural and thinking".
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
