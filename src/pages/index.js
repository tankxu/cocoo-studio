import React, { useRef, useEffect } from "react";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby"
import sal from "gatsby-plugin-scroll-reveal";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import PureMotion from "../assets/pure-motion.mp4"
import DynamicMotion from "../assets/dynamic-motion.mp4"
import ThinkingMotion from "../assets/thinking-motion.mp4"


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
    video: PureMotion,
  },
  {
    name: "Dynamic 动态",
    descCN:
      "面对不同客户的多样化需求，以及同一产品在不同环境下的体验差异，产品和体验设计应当动态化适应绝大多数场景，这需要充分关注用户即刻产生的体验反馈，体验或服务框架的扩展性，以及不同场景切换时的体验一致性，才能让功能服务更加强大，印象更加统一，产品体验更加健康。",
    descEN:
      "Facing the diversified needs of different customers and the experience differences of the same product in different environments, product and experience design should be dynamically adapted to most scenarios, which requires full attention to the user’s immediate experience feedback and the extension of the experience or service framework In order to make the functional services more powerful, the impressions are more unified, and the product experience is healthier.",
    video: DynamicMotion,
  },
  {
    name: "Thinking 思考",
    descCN:
      "以客户为中心的企业级产品体验设计，应当首先考虑客户实际所处的体验环境，包括且不限于企业结构，企业文化，预算成本，售后服务，以及固有的体验资产，品牌印象等，这些因素要求CODING产品服务需要更加灵活，更加具备客户理解力，能够主动为客户思考，增加产品和服务的体验“引力”。",
    descEN:
      'Customer-centric enterprise-level product experience design should first consider the actual experience environment the customer is in, including but not limited to corporate structure, corporate culture, budget cost, after-sales service, and inherent experience assets, brand impressions, etc., these factors Coding products and services are required to be more flexible, have more customer understanding, be able to actively think for customers, and increase the experience "gravity" of products and services.',
    video: ThinkingMotion,
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
    titleEN: "CLOUD DESKTOP",
  },
  {
    titleCN: "布局",
    titleEN: "LAYOUT",
  },
  {
    titleCN: "元素",
    titleEN: "Element",
  },
  {
    titleCN: "品牌识别",
    titleEN: "BRANDING",
  },
  {
    titleCN: "IP形象",
    titleEN: "INTELLECTUAL PROPERTY",
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
    <div className={`z-10 mx-auto max-w-screen-2xl px-4 text-center lg:sticky top-0 lg:text-left lg:mb-14 ${styleName}`}>
      <div className="flex flex-col w-full mt-20 lg:mt-6 lg:w-auto lg:flex-row lg:absolute">
        <h2 className="font-semibold text-4xl lg:text-3xl lg:w-1 lg:order-last">{section.titleCN}</h2>
        <p className="font-light uppercase opacity-10 mt-2 text-3xl lg:text-3xl lg:mt-0 lg:writing-mode-tb">{section.titleEN}</p>
      </div>
    </div>
  )
}

const PrimaryButton = ({color, styleName, children}) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-10 py-4 border border-${color || "brand-dark"} border-opacity-50 shadow-sm text-base font-medium rounded-sm text-${color || "brand-dark"} transition-all hover:bg-brand-blue1 hover:bg-opacity-10 hover:border-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue1 ${styleName}`}
    >
      {children}
    </button>
  )
}

// markup
const IndexPage = () => {
  gsap.registerPlugin(ScrollTrigger);
  const ideologySection = useRef(null)

  useEffect(() => {
    const ideologySectionElement = ideologySection.current

    gsap.fromTo(
      "#product-matrix",
      {
        y: 60,
        opacity: 0,
        rotation: -40,
      },
      {
        scrollTrigger: {
          trigger: "#product-matrix",
          start: "top 70%",
          toggleActions: "play none none reverse",
          markers: true,
        },
        y: 0,
        opacity: 1,
        rotation: 0,
        ease: "back.out(2)",
      }
    )

    const videoState = []
    for (let i = 0; i <= 2; i++) {
      let triggerId = `#ideology-video-${i}`
      let videoElement = ideologySectionElement.querySelector(triggerId)

      videoState[i] = 0
      const playVideo = (videoElement) => {
        if (videoState[i] == 0) {
          videoElement.play()
          videoState[i] = 1
        }
      }

      gsap.fromTo(
        triggerId,
        {
          y: 50,
          opacity: 0,
        },
        {
          scrollTrigger: {
            trigger: triggerId,
            start: "top 60%",
            toggleActions: "play none none reverse",
          },
          y: 0,
          opacity: 1,
        }
      )

      ScrollTrigger.create({
        trigger: triggerId,
        markers: true,
        start: "top 60%",
        once: true,
        onToggle: self => self.start ? playVideo(videoElement) : null,
      })
    }
  })

  
  return (
    <div className="bg-white">
      <div className="relative">

        <main>
          {/* Hero */}
          <div className="flex flex-col bg-gradient-to-b from-gradient-blue1 to-gradient-blue2 md:flex-col-reverse">
          <Popover as="header" className="relative">
          <div className="bg-transparent pt-6 h-20">
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
                <div className="mx-auto w-full max-w-2xl hidden md:grid md:grid-cols-3">
                  {navigation.map((item, index) => {
                    if (index == 0) {
                      return (
                        <a
                        key={item.name}
                        href={item.href}
                        className="col-span-1 text-center text-xl text-white font-semibold "
                        >
                        <span>{item.name}</span>
                        </a>
                      )
                    } else {
                      return (
                        <a
                        key={item.name}
                        href={item.href}
                        className="col-span-1 text-center text-xl text-white font-normal opacity-80 hover:opacity-100 hover:font-medium"
                        >
                        {item.name}
                        </a>
                      )
                    }
                  }
                )}
                </div>
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
                </div>
              </div>
            </Popover.Panel>
          </Transition>
          </Popover>

            <div className="mx-auto max-w-7xl pt-10 pb-20 px-4 sm:px-14 lg:px-32 text-center">
              <a href="#">
                  <span className="sr-only">CocooStudio</span>
                  <StaticImage src="../images/cocoostudio-logo.png" alt="Cocoo Studio Logo" width="146"/>
              </a>
              <StaticImage src="../images/home-hero-title.png" alt="云端工作美学" width="1080" className="mt-28" />
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


          {/* 理念 Section */}
          <div className="bg-white pt-8" ref={ideologySection}>
            <SectionTitle section={sectionTitleContent[0]} />
            <div className="mx-auto max-w-7xl px-4 pt-28 sm:px-6 lg:pr-8 lg:pl-32">
              {ideology.map((item, i) => (
                <div className="justify-between mb-48 lg:flex">
                  <div className="max-w-2xl mr-6 text-base">
                    <h3 className="mb-14 text-2xl font-semibold sm:text-6xl">
                      {item.name}
                    </h3>
                    <p className="leading-relaxed">{item.descCN}</p>
                    <p className="mt-8">{item.descEN}</p>
                  </div>
                  <div className="w-full grid place-items-center min-w-88" >
                    <video id={`ideology-video-${i}`} muted width="400">
                      <source src={item.video} type="video/mp4" />
                    </video>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 产品 Section */}
          <div className="bg-brand-dark pt-8 pb-20">
            <SectionTitle section={sectionTitleContent[1]} styleName="text-white lg:mb-28" />
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-32 text-center" >
              <h3 className="text-white text-4xl mt-24 mb-16"><span>云端工作美学</span><IconJoint className="inline-block mx-5 relative -top-1" /><span>产品倾向</span></h3>
              <div id="product-matrix">
                  <StaticImage src="../images/product-matrix.png" alt="Product matrix" width="868" />
              </div>
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
            <StaticImage src="../images/coding-in-iphone.png" alt="coding in iphone" width="870" className="relative top-20"></StaticImage>
          </div>

          {/* 云桌面 Section */}
          <div className="bg-brand-blue4 pt-8 pb-20 text-center">
            <SectionTitle section={sectionTitleContent[2]} styleName="lg:mb-48"/>
            <StaticImage src="../images/cloud-desktop.svg" alt="cloud desktop" width="1480" className="mt-20 lg:mt-4"></StaticImage>
          </div>

          <div className="bg-brand-dark pt-8">
            <div className=" pt-36 pb-40 mx-auto max-w-7xl px-4 sm:px-6 lg:px-32 text-center" >
              <div className="text-base text-brand-blue3">
                <p className="leading-relaxed">
                  云工作美学的核心体验化呈现就是“云桌面”。这种桌面在于将用户的工作资产高效收纳并及时反馈动态，能够适应用户工作场景，也能为用户思考，充分体现每个用户的工作价值，也就是“纯净，动态，思考”这三个核心理念所追求的体验目标。在这样的目标下，无论是产品层级，控件与元素，品牌识别，又或是体验架构，都需要以”围绕企业客户中的工作角色而设计”的原则，通过塑造云工作美学，从而“持续提升每个用户的日常工作体验”。                
                </p>
                <p className="mt-8">
                  The core experiential presentation of cloud work aesthetics is the "cloud desktop". This kind of desktop is to efficiently store the user’s work assets and timely feedback the dynamics. It can adapt to the user’s work scene and can also think for the user. It fully reflects the value of each user’s work, that is, the three cores of "pure, dynamic, and thinking". The experience goal pursued by the concept. Under such a goal, whether it is product level, controls and elements, brand identity, or experience architecture, it is necessary to "design around the job role of enterprise customers" and shape the aesthetics of cloud work to "sustain Enhance the daily work experience of each user".                
                </p>
              </div>
            </div>
          </div>

          {/* 布局 Section */}
          <div className="bg-white py-8">
            <SectionTitle section={sectionTitleContent[3]} styleName="lg:mb-48"/>
            <div className="pt-36 pb-20 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-24 text-center" >
              <StaticImage src="../images/layout-demo.png" alt="layout demo" width="1150" className=""></StaticImage>
              <div className="text-base text-left grid grid-cols-6 mt-20">
                <div className="col-span-6 lg:col-span-5">
                  <p className="leading-relaxed">
                    栅格系统是“云工作美学”特别提出的界面设计与常规内容布局方法，这一方面会打通UI视觉设计和前端开发/界面还原效果的一致性，另一方面也规范和限制了各种新界面设计时的“随意性”，将灵感和功能收纳进无形的容器中，为一致化的体验印象增加了严谨且持续的关注。
                  </p>
                  <p className="mt-8">
                    The grid system is a special interface design and conventional content layout method proposed by "Cloud Work Aesthetics". On the one hand, it will open up the consistency of UI visual design and front-end development/interface restoration effects. On the other hand, it will also regulate and limit various new The "arbitrariness" of the interface design incorporates inspiration and functions into an invisible container, adding rigorous and continuous attention to a consistent experience impression.
                  </p>
                  <Link to="">
                    <PrimaryButton styleName="mt-12">下载栅格 Sketch 模板文件</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* 元素 Section */}
          <div className="bg-white py-8">
            <SectionTitle section={sectionTitleContent[4]} styleName="lg:mb-40"/>
            <div className="pt-36 pb-40 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-20 text-center" >
              <div className="grid grid-cols-2">
                <StaticImage src="../images/element-dotmesh-1.png" alt="dot mesh 1" width="600" className="relative lg:-ml-8 lg:w-4/5"></StaticImage>
                <StaticImage src="../images/element-dotmesh-2.png" alt="dot mesh 2" width="600" className="lg:w-4/5"></StaticImage>
              </div>
              <div className="text-base text-left grid grid-cols-6 mt-16">
                <div className="col-span-6 lg:col-span-5">
                  <p className="leading-relaxed">
                    点阵元素是“云工作美学”中最能体现“严谨与规则化”内涵的核心元素，无论在界面设计还是品牌宣传中，恰当的使用点阵排列，会增强内容或者控件布局的合理性，也能在用户的心智中留下更为精确精密的体验印象。
                  </p>
                  <p className="mt-8">
                  The dot matrix element is the core element that best reflects the connotation of "rigorous and regularized" in the "cloud work aesthetics". Whether in interface design or brand promotion, the proper use of dot matrix arrangement will enhance the rationality of content or control layout. It can also leave a more precise and precise experience impression in the user's mind.
                  </p>
                  <Link to="">
                    <PrimaryButton styleName="mt-12">下载点阵 Sketch 模板文件</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </main>
      </div>
    </div>
  );
};

export default IndexPage;
