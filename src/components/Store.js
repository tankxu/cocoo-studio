import React from "react";
import { Helmet } from "react-helmet";
import { StaticImage } from "gatsby-plugin-image";

const Store = () => {
  return (
    <section className="relative text-center bg-white pt-28 pb-20 px-4 sm:px-6 lg:pt-36 lg:pb-28 lg:px-8 min-h-screen">
      <Helmet>
        <title>CoCoo Studio - CoStore</title>
      </Helmet>
      <section className="relative max-w-7xl mx-auto">
        <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">
          CoCoo Store
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-lg text-gray-500 sm:mt-4 mb-12">
          CoCoo
          团队致力于做东半球最佳抱枕厂，不定期推出高品质周边。本期产品「会变身的
          Codé 大圣鹅」限时供应，喜欢就多带几个回家吧。
        </p>
        <StaticImage
          src="../images/goods-code-penguin-1.jpg"
          alt="Code Penguin Part 1"
          placeholder="tracedSVG"
          width="900"
          className=""
        />
        <StaticImage
          src="../images/goods-code-penguin-2.jpg"
          alt="Code Penguin Part 1"
          placeholder="tracedSVG"
          width="900"
          className=""
        />
        <StaticImage
          src="../images/goods-code-penguin-3.jpg"
          alt="Code Penguin Part 1"
          placeholder="tracedSVG"
          width="900"
          className=""
        />
        <StaticImage
          src="../images/goods-code-penguin-4.jpg"
          alt="Code Penguin Part 1"
          placeholder="tracedSVG"
          width="900"
          className=""
        />
        <StaticImage
          src="../images/goods-code-penguin-5.jpg"
          alt="Code Penguin Part 1"
          placeholder="tracedSVG"
          width="900"
          className=""
        />
      </section>
    </section>
  );
};

export default Store;
