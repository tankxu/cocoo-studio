import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"

import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import {
  CloudUploadIcon,
  CogIcon,
  LockClosedIcon,
  MenuIcon,
  RefreshIcon,
  ServerIcon,
  ShieldCheckIcon,
  XIcon,
} from "@heroicons/react/outline";
import { ChevronRightIcon, ExternalLinkIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "设计语言", href: "/" },
  { name: "Monkit设计组件", href: "/monkit" },
  { name: "设计博客", href: "/blog" },
];

const ideology = [
  {
    name: "Pure 纯净",
    descCN:
      "面向企业的产品体验尤其需要简洁性，每个用户都应当感受到简单清晰的流程和协同工作的便利性，这需要从品牌到界面的整体规划和重视，也需要每个参与产品设计的成员对“纯净”理念的深入理解和持续坚持。",
    descEN:
      'Enterprise-oriented product experience especially needs simplicity. Every user should feel the simple and clear process and the convenience of collaborative work. This requires overall planning and attention from the brand to the interface, as well as the insistence of every member involved in product design. Deep understanding and continuous adherence to the concept of "Pure".',
    image: "../images/pure.png",
    imageAlt: "Pure Symbol",
  },
  {
    name: "Dynamic 动态",
    descCN:
      "面对不同客户的多样化需求，以及同一产品在不同环境下的体验差异，产品和体验设计应当动态化适应绝大多数场景，这需要充分关注用户即刻产生的体验反馈，体验或服务框架的扩展性，以及不同场景切换时的体验一致性，才能让功能服务更加强大，印象更加统一，产品体验更加健康。",
    descEN:
      "Facing the diversified needs of different customers and the experience differences of the same product in different environments, product and experience design should be dynamically adapted to most scenarios, which requires full attention to the user’s immediate experience feedback and the extension of the experience or service framework In order to make the functional services more powerful, the impressions are more unified, and the product experience is healthier.",
    image: "../images/pure.png",
    imageAlt: "Pure Symbol",
  },
  {
    name: "Thinking 思考",
    descCN:
      "以客户为中心的企业级产品体验设计，应当首先考虑客户实际所处的体验环境，包括且不限于企业结构，企业文化，预算成本，售后服务，以及固有的体验资产，品牌印象等，这些因素要求CODING产品服务需要更加灵活，更加具备客户理解力，能够主动为客户思考，增加产品和服务的体验“引力”。",
    descEN:
      'Customer-centric enterprise-level product experience design should first consider the actual experience environment the customer is in, including but not limited to corporate structure, corporate culture, budget cost, after-sales service, and inherent experience assets, brand impressions, etc., these factors Coding products and services are required to be more flexible, have more customer understanding, be able to actively think for customers, and increase the experience "gravity" of products and services.',
    image: "../images/pure.png",
    imageAlt: "Pure Symbol",
  },
];

const sectionTitleContent = [
  {
    titleCN: "理念",
    titleEN: "IEDOLOGY",
  },
  {
    titleCN: "产品",
    titleEN: "PRODUCT",
  },
  {
    titleCN: "云桌面",
    titleEN: "Cloud Desktop",
  },
  {
    titleCN: "品牌识别",
    titleEN: "BRANDING",
  },
  {
    titleCN: "IP形象",
    titleEN: "Intellectual Property",
  },
  {
    titleCN: "品牌识别",
    titleEN: "BRANDING",
  },
  {
    titleCN: "色彩",
    titleEN: "COLOR",
  },
]



// Components

const IconJoint = (props) => {
  return (
    <svg
      width={22}
      height={22}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3 0a.995.995 0 00-.707.293l-2 2a.999.999 0 000 1.414L7.586 11 .293 18.293a.999.999 0 000 1.414l2 2a.999.999 0 001.414 0L11 14.414l7.293 7.293a.999.999 0 001.414 0l2-2a.999.999 0 000-1.414L14.414 11l7.293-7.293a.999.999 0 000-1.414l-2-2a.999.999 0 00-1.414 0L11 7.586 3.707.293A.996.996 0 003 0z"
        fill="#fff"
      />
    </svg>
  )
}

const SectionTitle = ({section, styleName}) => {
  return (
    <div className={`mx-auto max-w-screen-2xl px-4 text-center lg:sticky top-0 lg:text-left lg:mb-14 ${styleName}`}>
      <div className="flex flex-col w-full  mt-4 lg:w-auto lg:flex-row lg:absolute">
        <h2 className="font-semibold text-4xl lg:text-3xl lg:w-1 lg:order-last">{section.titleCN}</h2>
        <p className="opacity-10 mt-2 text-3xl lg:text-3xl lg:mt-0 lg:writing-mode-tb">{section.titleEN}</p>
      </div>
    </div>
  )
}

const PrimaryButton = ({color, styleName, children}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-10 py-4 border border-${color || "brand-dark"} shadow-sm text-base font-medium rounded-sm text-${color || "brand-dark"} hover:bg-brand-blue1 hover:bg-opacity-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue1 ${styleName}`}
    >
      {children}
    </button>
  )
}

// markup
const IndexPage = () => {
  
  return (
    <div className="bg-white">
      <div className="relative">
        <Popover as="header" className="relative">
          <div className="bg-gray-900 pt-6">
            <nav
              className="relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6"
              aria-label="Global"
            >
              <div className="flex items-center flex-1">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="#">
                    <span className="sr-only">Workflow</span>
                    <img
                      className="h-8 w-auto sm:h-10"
                      src="https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg"
                      alt=""
                    />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <Popover.Button className="bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      <MenuIcon className="h-6 w-6" aria-hidden="true" />
                    </Popover.Button>
                  </div>
                </div>
                <div className="hidden space-x-8 md:flex md:ml-10">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className="text-base font-medium text-white hover:text-gray-300"
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-6">
                <a
                  href="#"
                  className="text-base font-medium text-white hover:text-gray-300"
                >
                  Log in
                </a>
                <a
                  href="#"
                  className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700"
                >
                  Start free trial
                </a>
              </div>
            </nav>
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
              className="absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden"
            >
              <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
                <div className="px-5 pt-4 flex items-center justify-between">
                  <div>
                    <img
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg"
                      alt=""
                    />
                  </div>
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
                      <a
                        key={item.name}
                        href={item.href}
                        className="block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                  <div className="mt-6 px-5">
                    <a
                      href="#"
                      className="block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700"
                    >
                      Start free trial
                    </a>
                  </div>
                  <div className="mt-6 px-5">
                    <p className="text-center text-base font-medium text-gray-500">
                      Existing customer?{" "}
                      <a href="#" className="text-gray-900 hover:underline">
                        Login
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>

        <main>
          {/* Hero */}
          <div className="pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
            <div className="mx-auto max-w-7xl lg:px-8">
              <div className="lg:grid lg:grid-cols-2 lg:gap-8">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                  <div className="lg:py-24">
                    <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                      <span className="block">A better way to</span>
                      <span className="pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5">
                        ship web apps
                      </span>
                    </h1>
                    <p className="text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl">
                      Anim aute id magna aliqua ad ad non deserunt sunt. Qui
                      irure qui Lorem cupidatat commodo. Elit sunt amet fugiat
                      veniam occaecat fugiat.
                    </p>
                    <div className="mt-10 sm:mt-12">
                      <form
                        action="#"
                        className="sm:max-w-xl sm:mx-auto lg:mx-0"
                      >
                        <div className="sm:flex">
                          <div className="min-w-0 flex-1">
                            <label htmlFor="email" className="sr-only">
                              Email address
                            </label>
                            <input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              className="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            />
                          </div>
                          <div className="mt-3 sm:mt-0 sm:ml-3">
                            <button
                              type="submit"
                              className="block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900"
                            >
                              Start free trial
                            </button>
                          </div>
                        </div>
                        <p className="mt-3 text-sm text-gray-300 sm:mt-4">
                          Start your free 14-day trial, no credit card
                          necessary. By providing your email, you agree to our{" "}
                          <a href="#" className="font-medium text-white">
                            terms or service
                          </a>
                          .
                        </p>
                      </form>
                    </div>
                  </div>
                </div>
                <div className="mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative">
                  <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0">
                    {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
                    <img
                      className="w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                      src="https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 理念 Section */}
          <div className="bg-white pt-14">
            <SectionTitle section={sectionTitleContent[0]} />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:pl-32">
              {ideology.map((item) => (
                <div className="lg:flex justify-between mt-32 mb-48">
                  <div className="max-w-3xl mr-10 text-base">
                    <h3 className="mb-14 text-2xl font-semibold sm:text-6xl">
                      {item.name}
                    </h3>
                    <p className="leading-relaxed">{item.descCN}</p>
                    <p className="mt-8">{item.descEN}</p>
                  </div>
                  <div className="w-full grid place-items-center">
                    <div className="bg-gray-400 w-60 h-32"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 产品 Section */}
          <div className="bg-brand-dark py-14">
            <SectionTitle section={sectionTitleContent[1]} styleName="text-white" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:px-32 text-center" >
              <h3 className="text-white text-4xl mt-20 mb-16"><p className="inline-block">云端工作美学</p><IconJoint className="inline-block mx-5" /><p className="inline-block">产品倾向</p></h3>
              <StaticImage src="../images/product-matrix.png" alt="Product matrix" width="868" />
              <StaticImage src="../images/logo-tencent-coding.png" alt="Tencent Cloud and Coding logo" width="680" className="mt-36"/>
              <div className="text-base text-brand-blue3 mt-14">
                <p className="leading-relaxed">
                  CODING logo由来已久，代表了code文化，即“严谨，高效，智慧”，新的标识更加简洁明快，在各类屏幕和印刷尺寸下，都可以迅速识别，我们推荐在不同的场合下使用不同的logo排版组合和色彩搭配，以便统一企业印象。
                </p>
                <p className="mt-8">
                  The coding logo has been around for a long time and represents the code culture, that is, "rigorous, efficient, and intelligent". The new logo is more concise and clear. It can be recognized quickly on various screens and print sizes. We recommend using different on different occasions. The combination of logo typesetting and color matching in order to unify the corporate impression.
                </p>
                <Link to="">
                  <PrimaryButton styleName="mt-12" color="brand-blue2">下载标志组合包/PPT模板</PrimaryButton>
                </Link>
              </div>
            </div>
          </div>

          {/* 产品 Section 过渡 */}
          <div className="text-center bg-brand-dark relative z-10 bg-coding-logo-construct bg-112% bg-bottom bg-no-repeat 2xl:bg-2xl">
            <StaticImage src="../images/coding-in-iphone.png" width="870" className="relative top-20"></StaticImage>
          </div>

          {/* 云桌面 Section */}
          <div className="bg-brand-blue4 py-14">
            <SectionTitle section={sectionTitleContent[2]} />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 lg:px-32 text-center" >
              <StaticImage src="../images/coding-in-iphone.png" width="870" className="relative top-20"></StaticImage>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default IndexPage;
