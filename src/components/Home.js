import React, { useRef, useEffect, useState, Fragment } from "react";
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image";
import { useStaticQuery, graphql, Link } from "gatsby"
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import classnames from "classnames";
import { homeSectionTitleEn } from '../components/style.module.css'
import { Popover, Transition, Dialog } from "@headlessui/react";
import PureMotion from "../assets/pure-motion.mp4"
import DynamicMotion from "../assets/dynamic-motion-2.mp4"
import ThinkingMotion from "../assets/thinking-motion.mp4"
import CIFVideo from "../assets/coding-cif.mp4"
import {MenuIcon, XIcon } from "@heroicons/react/outline";
import ProductMatrixImage from '../images/product-matrix.svg';
import Header from "./header";

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
    titleCN: "色彩",
    titleEN: "COLOR",
  },
  {
    titleCN: "质感",
    titleEN: "Texture",
  },
  {
    titleCN: "字体",
    titleEN: "FONT",
  },
  {
    titleCN: "IP形象",
    titleEN: "BRADING",
  },
  {
    titleCN: "开源与社区",
    titleEN: "OPEN SOURCE AND COMMUNITY",
  },
];

const dotmeshTab = [
  { name: '系统页面应用展示', href: '#', current: true },
  { name: '其它页面应用展示', href: '#', current: false },
];


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
        <p className={`font-light uppercase opacity-10 mt-2 text-3xl lg:text-3xl lg:mt-0 ${homeSectionTitleEn}`}>{section.titleEN}</p>
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


/* Tabs -- Start */
class Tabs extends React.Component{
  state = {
    activeTab: this.props.children[0].props.label
  }
  changeTab = (tab) => {
    this.setState({ activeTab: tab });
  };
  render(){
    let content;
    let buttons = [];
    return (
      <div className="flex flex-col items-center">
        {React.Children.map(this.props.children, child =>{
          buttons.push(child.props.label)
          if (child.props.label === this.state.activeTab) content = child.props.children
        })}
        <TabButtons activeTab={this.state.activeTab} buttons={buttons} changeTab={this.changeTab}/>
        <div>{content}</div>
      </div>
    );
  }
}

const TabButtons = ({buttons, changeTab, activeTab}) =>{
  return(
    <nav className="-mb-px flex justify-center space-x-12">
    {buttons.map(button =>{
       return <button className={classnames(
        button === activeTab
          ? 'border-brand-blue2 text-black text-2xl'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 relative',
          'whitespace-nowrap py-4 px-1 border-b-4 font-medium text-sm'
        )} 
        onClick = {()=>changeTab(button) }>
          {button}
        </button>
    })}
    </nav>
  )
}

const Tab = props =>{
  return(
    <React.Fragment>
      {props.children}
    </React.Fragment>
  )
}
/* Tabs -- End */

const VideoModal = ({ show, onClose }) => {
  // let [open, setOpen] = useState(true)

  return (
    <Transition.Root show={show} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0" onClose={onClose}>
        <div className="flex overflow-hidden">
          <Transition.Child
            as={Fragment}
            enter="ease-in duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-white transition-opacity" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-in-out duration-700"
            enterFrom="opacity-0 scale-150"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 scale-100 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 scale-150 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block transform transition-al">
              <div className="grid w-screen h-screen place-items-center px-10">
                <video 
                  playsInline
                  autoPlay
                  muted
                  preload="auto"
                  width="auto"
                  controls
                  src={CIFVideo} 
                  className="w-auto h-auto max-w-full max-h-[calc(100vh-5rem)] rounded-[2.5rem]"
                />
              </div>
            </div>
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="ease-in duration-700"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <button
              type="button"
              className="absolute group right-4 top-4 w-14 h-14 rounded-[1.25rem] bg-brand-dark text-white grid place-items-center focus:outline-none focus:ring-2 focus:ring-offset-2"
              onClick={() => onClose()}
            >
              <XIcon className="h-6 w-6 transition duration-300 ease-in-out group-hover:rotate-90" aria-hidden="true" />
            </button>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}


// markup
const IndexPage = () => {

  gsap.registerPlugin(ScrollTrigger);
  const ideologySection = useRef(null)
  const [showModal, toggleModal] = useState(false);

  useEffect(() => {
    const ideologySectionElement = ideologySection.current

    gsap.fromTo(
      "#product-matrix",
      {
        y: 60,
        opacity: 0,
        scale: 2,
        rotation: -40,
      },
      {
        scrollTrigger: {
          trigger: "#product-matrix",
          start: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 0,
        opacity: 1,
        scale: 1,
        rotation: 0,
        ease: "back.out(2)",
        duration: 0.6,
      }
    )

    const videoState = []

    for (let i = 0; i <= 2; i++) {
      let triggerId = `#ideology-video-${i}`
      let videoElement = ideologySectionElement.querySelector(triggerId)

      videoState[i] = 0
      const playVideo = (videoElement) => {
      if (videoState[i] === 0) {
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
                    <video 
                      id={`ideology-video-${i}`}
                      playsInline
                      muted
                      preload="auto"
                      width="400"
                      src={item.video} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 产品 Section */}
          <div className="bg-brand-dark pt-8 pb-20">
            <SectionTitle section={sectionTitleContent[1]} styleName="text-white lg:mb-28" />
            <div className="mx-auto max-w-7xl px-4 text-center overflow-hidden sm:px-6 lg:px-32 lg:-mt-14">
              <h3 className="text-white text-4xl mt-24 mb-16"><span>云端工作美学</span><IconJoint className="inline-block mx-5 relative -top-1" /><span>产品倾向</span></h3>
              <div id="product-matrix" className="flex justify-center">
                  <object type="image/svg+xml" data={ProductMatrixImage}>Product Matrix Image</object>
              </div>
              <StaticImage src="../images/logo-tencent-coding.png" alt="Tencent Cloud and Coding logo" width="680" placeholder="blurred" className="mt-36"/>
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
            <StaticImage src="../images/coding-in-iphone.png" alt="coding in iphone" width="870" placeholder="blurred" className="relative top-20"></StaticImage>
          </div>

          {/* 云桌面 Section */}
          <div className="bg-brand-blue4 pt-8 pb-20 text-center">
            <SectionTitle section={sectionTitleContent[2]} styleName="lg:mb-48"/>
            <StaticImage src="../images/cloud-desktop.svg" alt="cloud desktop" width="1480" placeholder="blurred" className="mt-20 lg:mt-4"></StaticImage>
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
              <StaticImage src="../images/layout-demo.png" alt="layout demo" width="1150" placeholder="blurred"></StaticImage>
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
          <div className="bg-white pt-8">
            <SectionTitle section={sectionTitleContent[4]} styleName="lg:mb-48"/>
            <div className="pt-36 pb-0 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-28 text-center" >
              <div className="grid grid-cols-2">
                <StaticImage src="../images/element-dotmesh-1.png" alt="dot mesh 1" width="600" placeholder="blurred" className="relative lg:-ml-8 lg:w-4/5"></StaticImage>
                <StaticImage src="../images/element-dotmesh-2.png" alt="dot mesh 2" width="600" placeholder="blurred" className="lg:w-4/5"></StaticImage>
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
            <div className="mt-40">
              <Tabs>
                <Tab label="系统页面应用展示">
                  <div>
                    <StaticImage src="../images/dotmesh-demo1.png" alt="dot mesh demo 1" placeholder="blurred" width="1600"></StaticImage>
                  </div>
                </Tab>
                <Tab label="其它页面应用展示">
                  <div>
                    <StaticImage src="../images/dotmesh-demo2.png" alt="dot mesh demo 2" placeholder="blurred" width="1600"></StaticImage>
                  </div>
                </Tab>
              </Tabs>
            </div>
          </div>  

          {/* 色彩 Section */}
          <div className="bg-white py-8">
            <SectionTitle section={sectionTitleContent[5]} styleName="lg:mb-40"/>
            <div className="pt-36 pb-0 mx-auto max-w-7xl px-4 overflow-hidden sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-20">
              <StaticImage src="../images/color-platten.png" alt="color platten" placeholder="blurred" width="613"></StaticImage>
              <div className="text-base text-left grid grid-cols-6 mt-2 -mb-28">
                <div className="col-span-6 lg:col-span-4 z-10">
                  <p className="leading-relaxed">
                  我们选择用以下几种颜色作为UI及品牌色。<br/>
品牌色以蓝为主，以红，黄作为调整色，保证不会过于冷静，从而在合适的场合表达产品的温度感，我们希望CODING整体鲜活明亮，打破常规To B产品的冷色调风格，用深色，浅色组合使用，塑造出让用户认同的美学风格。<br/>
辅助色为品牌色的邻近色，增强视觉的和谐度，保证品牌和体验的印象统一。
                  </p>
                  <p className="mt-8">
                  We choose the following UI colors and branding colors.<br/>
The brand color is mainly blue, and red and yellow are used as adjustment colors to ensure that it will not be too cool, so as to express the temperature of the product on the right occasion. We hope that the overall color of CODING is fresh and bright, breaking the cool color style of conventional To B products. Use a combination of dark and light colors to create an aesthetic style that users agree with.<br/>
The auxiliary color is the adjacent color of the brand color, which enhances the visual harmony and ensures the unification of the brand and experience.
                  </p>
                  <Link to="">
                    <PrimaryButton styleName="mt-12">下载色板及相关色彩标准</PrimaryButton>
                  </Link>
                </div>
                <div className="text-center col-span-6 lg:col-span-2">
                  <StaticImage src="../images/symbol-number3.png" alt="a symbol about number 3" width="630" placeholder="blurred" className="relative lg:w-630px lg:-top-56 lg:-left-28"></StaticImage> 
                </div>
              </div>
            </div>
          </div>

          {/* 质感 Section */}
          <div className="bg-texture-section-bg2 py-8">
            <SectionTitle section={sectionTitleContent[6]} styleName="lg:mb-40"/>
            <div className="bg-texture-section-bg1 -mt-196px lg:-mt-192px">
              <div className="pt-36 pb-32 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-20" >
                <div className="text-base text-left grid grid-cols-6 mt-2 lg:pt-128">
                  <div className="text-center col-span-6 lg:col-span-1">
                      <StaticImage src="../images/texture-img1.png" alt="texture image 1" placeholder="blurred" className="relative my-20 lg:my-0 lg:w-630px lg:-top-96 lg:-left-44"></StaticImage>
                  </div>
                  <div className="col-span-6 z-10 lg:col-span-5 lg:text-right">
                    <p className="leading-relaxed">
                    CODING的服务面向众多行业，我们搭建的研发平台，是具备高可用，高扩展性的“工作容器“，所以纯净及透明的材质，是表达这种容器感的最佳选择，而材质具备流动感和色彩感，则进一步让用户感知到实际工作场景和内容的丰富多样和情感温度。
                    </p>
                    <p className="mt-8">
                    Coding's services are oriented to many industries. The R&D platform we build is a "work container" with high availability and high scalability, so pure and transparent materials are the best choice to express this sense of container, and the material has a sense of fluidity and The sense of color further allows users to perceive the richness and emotional temperature of actual work scenes and content.
                    </p>
                    <Link to="">
                      <PrimaryButton styleName="mt-12">下载产品解决方案配图素材</PrimaryButton>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-36 pb-12 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-32" >
              <div className="grid grid-cols-8">
                <div className="col-span-full lg:col-start-1 lg:col-end-4" onClick={() => toggleModal(true)}>
                  <VideoModal show={showModal} onClose={() => toggleModal(false)}/>
                  <StaticImage src="../images/texture-video-cover.png" alt="video cover" placeholder="blurred" className="relative"></StaticImage>
                  <p className="text-sm lg:text-xs mt-6 pl-8">*点击观看材质与动画实例</p>
                </div>
                <div className="hidden lg:block col-start-6 col-end-9">
                  <StaticImage src="../images/texture-img2.png" alt="texture image 2" placeholder="blurred" className="relative "></StaticImage>
                </div>
              </div>
            </div>
          </div>

          {/* 字体 Section */}
          <div className="bg-white py-8">
            <SectionTitle section={sectionTitleContent[7]} styleName="lg:mb-40"/>
            <div className="pt-36 pb-40 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-20" >
              <StaticImage src="../images/font-img.png" alt="font image" width="613" placeholder="blurred" ></StaticImage>
              <div className="text-base text-left grid grid-cols-6 mt-2 -mb-28">
                <div className="col-span-6 lg:col-span-5">
                  <p className="leading-relaxed">
                  为了更加契合品牌字体，传达IT工程师文化，在产品页面中，标题使用 Inter 字体；Roboto_Mono 作为数据类字体，代码属性符合产品调性；正文调整为苹方，棱角分明，干净利落，具有品质感。<br/>
于此同时，在运营类设计物料中，可以在标题上适当使用腾讯字体，以保证符合腾讯文化，其余建议使用以上标准字体，以便保证大篇幅的内容可识别性。
                  </p>
                  <p className="mt-8">
                  In order to better fit the brand font and convey the IT engineer culture, on the product page, it is recommended to use Inter font for the title; Roboto_Mono is used as a data font, and the code attributes are in line with the product tone; the text is adjusted to be square, sharp, clean, and with a sense of quality .<br/>
At the same time, in the operational design materials, Tencent fonts can be appropriately used in the titles to ensure compliance with Tencent culture. The rest are recommended to use the above standard fonts and ensure the recognizable content of large pages.
                  </p>
                  <Link to="">
                    <PrimaryButton styleName="mt-12">下载以上字体文件</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* IP Section */}
          <div className="bg-brand-blue5 py-8">
            <SectionTitle section={sectionTitleContent[8]} styleName="lg:mb-40"/>
            <div className="pt-36 pb-40 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-12" >
              <div className="grid grid-cols-4">
                <div className="grid px-4 col-span-2 lg:col-span-1">
                  <p className="text-center mb-4">基本形象</p>
                  <StaticImage src="../images/coding-avatar-1.png" alt="coding avatar" placeholder="blurred"></StaticImage>
                </div>
                <div className="grid px-4 col-span-2 lg:col-span-1">
                  <p className="text-center mb-4">个性化形象</p>
                  <StaticImage src="../images/coding-avatar-2.png" alt="coding avatar" placeholder="blurred"></StaticImage>
                </div>
                <div className="grid px-4 col-span-2 lg:col-span-1">
                  <p className="text-center mb-4">商务化形象</p>
                  <StaticImage src="../images/coding-avatar-3.png" alt="coding avatar" placeholder="blurred"></StaticImage>
                </div>
                <div className="grid px-4 col-span-2 lg:col-span-1">
                  <p className="text-center mb-4">客服形象</p>
                  <StaticImage src="../images/coding-avatar-4.png" alt="coding avatar" placeholder="blurred"></StaticImage>
                </div>
              </div>
              <div className="text-base text-left grid grid-cols-6 mt-12 -mb-28">
                <div className="col-span-6 lg:col-span-5">
                  <p className="leading-relaxed">
                  CODING 洋葱猴形象包含三种基本形象，基本版，个性版，商务版。这些形象应当出现在与用户或客户沟通时的场合或相关设计方案中，包括并不限于“动态广告，运营活动，品牌周边”等场合，请勿滥用形象，请勿低龄化使用这些形象，如有不明白，请咨询Cocoo Studio设计负责人。
                  </p>
                  <p className="mt-8">
                  The CODING onion monkey image contains three basic images, the basic version, the character version, and the business version. These images should appear in occasions when communicating with users or customers or in related design solutions, including but not limited to occasions such as "dynamic advertisements, operational activities, brand surroundings", etc. Do not abuse the images, and do not use these images at a young age, such as If you don’t understand, please consult the design leader of Cocoo Studio.
                  </p>
                  <Link to="">
                    <PrimaryButton styleName="mt-12">下载 3D 形象及源文件</PrimaryButton>
                  </Link>
                </div>
              </div>
            </div>
          </div>

           {/* 开源 Section */}
           <div className="overflow-hidden w-full">
            <div className="flex bg-opensource-bg w-200%">
              <div className="z-10 py-8 w-full">
                <SectionTitle section={sectionTitleContent[9]} styleName="lg:mb-128"/>
                <div className="pt-36 pb-40 mx-auto max-w-7xl px-4 sm:px-6 lg:pt-0 lg:pr-8 lg:px-32 lg:-mt-80" >
                  <StaticImage src="../images/monkit-logo.png" alt="monkit logo" width="520" placeholder="blurred" className="max-w-60%"></StaticImage>
                  <div className="text-base text-left grid grid-cols-6 mt-24 -mb-28">
                    <div className="col-span-6 lg:col-span-4">
                      <p className="leading-relaxed">
                      为了给用户带来更好的产品体验，我们经过大量项目实践和总结，打磨出一个服务于企业级产品的设计体系——Monkit。<br/><br/>

    基于云端工作美学 Pure 纯净、Ddynamic 动态、Thinking 思考 三大设计价值观，通过提供完善的设计指引、最佳实践、设计资源来帮助产品团队降低冗余生产成本，让设计者专注于更好的用户体验。
    未来 Monkit 将对外开放使用，致力于释放每个团队的潜力，共同打造 CODING 产品生态圈。
                      </p>
                      <p className="mt-8">
                      In order to provide users with a better product experience, we have completed a large number of project practices and summaries, and polished a design system that serves enterprise-level products-Monkit.<br/>
    Based on the three design values of cloud work aesthetics: Pure, Ddynamic, and Thinking, it helps product teams reduce redundant production costs by providing complete design guidelines, best practices, and design resources, allowing designers to focus on a better user experience .
    In the future, Monkit will be open to the outside world, committed to releasing the potential of each team and jointly creating a coding product ecosystem.
                      </p>
                      <Link to="">
                        <PrimaryButton styleName="mt-12">查看 Monkit</PrimaryButton>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-opensource-img w-full bg-contain bg-no-repeat relative right-16%"></div>
            </div>
          </div>

          {/* Footer Section */}
          <div className="bg-footer-bg bg-center bg-cover pt-20 pb-40 text-center">           
              <StaticImage src="../images/home-footer-logo.png" alt="footer logo" placeholder="blurred" width="500"></StaticImage>
          </div>

        </main>
      </div>
    </div>
  );
};


export default IndexPage;
