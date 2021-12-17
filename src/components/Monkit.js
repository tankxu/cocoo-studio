import React from "react";

const PrimaryButton = ({ color, styleName, children }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-10 py-4 border border-${
        color || "brand-dark"
      } border-opacity-50 shadow-sm text-base font-medium rounded-sm text-${
        color || "brand-dark"
      } transition-all hover:bg-brand-blue1 hover:bg-opacity-10 hover:border-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue1 ${styleName}`}
    >
      {children}
    </button>
  );
};

const Monkit = () => {
  return (
    <div className="relative text-center bg-white pt-28 pb-20 px-4 sm:px-6 lg:pt-36 lg:pb-28 lg:px-8 min-h-screen">
      <div className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          Monkit UI
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
          Monkit UI 是 CODING 推出的企业级产品设计系统，并为开发者和设计师提供
          React 与 Figma 组件。当前仅供内网访问，敬请谅解。
        </p>
      </div>
      <a href="http://monkit.coding.io/" target="_blank">
        <PrimaryButton styleName="mt-12">前往 Monkit UI</PrimaryButton>
      </a>
    </div>
  );
};

export default Monkit;
