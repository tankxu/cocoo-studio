import React, { Fragment } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { gsap } from "gsap";
import classnames from "classnames";
import { Popover, Transition, Dialog } from "@headlessui/react";
import {MenuIcon, XIcon } from "@heroicons/react/outline";
import PropTypes from "prop-types";
import { Link, useLocation } from "@reach/router";

const navigation = [
  { name: "设计语言", href: "/" },
  { name: "Monkit设计组件", href: "/monkit" },
  { name: "设计博客", href: "/blog" },
];

const HeaderLink = ({ title, link, activated }) => {
  return (
    <Link
      key={title}
      to={link}
      className={activated ? "col-span-1 text-center text-xl text-white font-semibold" : "col-span-1 text-center text-xl text-white font-normal opacity-80 transition-all hover:opacity-100 hover:font-medium"}
      >
      <span>{title}</span>
      {activated ? <div class="w-60px h-3px bg-white mx-auto relative -bottom-4"></div> : null}
    </Link>
  )
}

const Header = () => {
  const page = useLocation().pathname;
  const isHome = page === "/"

  return(
    <header>
      {/* Hero */}
      <div className="flex flex-col bg-gradient-to-b from-gradient-blue1 to-gradient-blue2 md:flex-col-reverse">
        <Popover as="header" className="relative">
          <div className="bg-transparent pt-6 h-18">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
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
                <div className="lg:mx-auto w-full max-w-xl lg:max-w-2xl hidden md:grid md:grid-cols-3">
                  {navigation.map((item, index) => (
                    <HeaderLink title={item.name} link={item.href} activated={page === item.href} />
                  ))}
                </div>
              </div>
            </nav>
          </div>
          <a href="https://coding.net" target="_blank">
            <button class="font-semibold text-white px-6 py-3.5 bg-gradient-to-br from-brand-blue2 to-brand-blue1 rounded-full absolute right-4 bottom-0 shadow-lightbutton hover:opacity-80 md:right-8 md:bottom-4">CODING 官网</button>
          </a>

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
                  <div className="px-2 space-y-1">
                    {navigation.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <div className={classnames(
          isHome
          ? 'max-h-[880px] pt-10 pb-20'
          : 'max-h-0 opacity-0 pointer-events-none',
          'text-center mx-auto max-w-7xl px-4 sm:px-14 lg:px-32 transition-all duration-500'
        )}>
          <a href="#">
              <span className="sr-only">CocooStudio</span>
              <StaticImage src="../images/cocoostudio-logo.png" alt="Cocoo Studio Logo" width="146" placeholder="none" />
          </a>
          <StaticImage src="../images/home-hero-title.png" alt="云端工作美学" width="1080" placeholder="none" className="mt-28" />
          <div className="text-base text-brand-blue3 mx-auto mt-14 text-left max-w-5xl">
            <p className="leading-relaxed">
              腾讯云 CODING 专注打造DevOps SaaS 产品服务，为企业量身打造云研发工作套件。提出的体验语言“云端工作美学”，是为了让云研发工作体验变得更加“纯净简单”，更能“动态适应”不同场景和功能服务，也能企业变得更有“文化和思考”。
            </p>
            <p className="mt-4">
              Tencent CODING focuses on creating DevOps SaaS products and services, and tailoring cloud R&D work suites for enterprises.The experience language "Cloud Work Aesthetics" proposed by CODING DevOps is to make the cloud R&D work experience more "pure", to "dynamically adapt" to different scenarios and functional services, and to become more "cultural and thinking".
            </p>
          </div>
        </div>
      </div>
    </header>
)}

export default Header