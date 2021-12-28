import React from "react";
import { StaticImage } from "gatsby-plugin-image";
import PrimaryButton from "./primaryButton";
import { Helmet } from "react-helmet";

const Monkit = () => {
  return (
    <div className="relative text-center bg-white pt-28 pb-20 px-4 sm:px-6 lg:pt-36 lg:pb-28 lg:px-8 min-h-screen">
      <Helmet>
        <title>CoCoo Studio - Monkit UI</title>
      </Helmet>
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Monkit UI
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4 mb-12">
          Monkit UI 是 CODING 推出的企业级产品设计系统，并为开发者和设计师提供
          React 与 Figma 组件。当前仅供内网访问，敬请谅解。
        </p>
        <a href="http://monkit.coding.io/" target="_blank">
          <StaticImage
            src="../images/monkit-ui-cover.png"
            alt="Monkit UI Cover"
            placeholder="blurred"
            width="960"
            className="shadow-lg rounded-2xl"
          />
        </a>
      </div>
      <a href="http://monkit.coding.io/" target="_blank">
        <PrimaryButton styleName="mt-12">前往 Monkit UI</PrimaryButton>
      </a>
    </div>
  );
};

export default Monkit;
