import React from "react";
import { StaticImage } from "gatsby-plugin-image";

const Monkit = () => {
  return (
    <div className="bg-brand-dark w-full">
      <div className="flex justify-center flex-wrap max-w-7xl px-4 sm:px-6 mx-auto py-16">
        <div className="flex w-full justify-center sm:justify-start">
          <a href="https://coding.net" target="_blank">
            <StaticImage
              src="../images/logo-tencent-coding-colorful.png"
              alt="colorful logo"
              placeholder="tracedSVG"
              height="30"
            ></StaticImage>
          </a>
        </div>
        <div className="flex w-full justify-between text-white text-center pt-16 items-center flex-col sm:flex-row">
          <div className="sm:text-left">
            <div className="hover:text-brand-blue1 text-3xl font-semibold">
              <a href="tel:4008306861">400-830-6861</a>
            </div>
            <div className="hover:text-brand-blue1 text-xl pt-1">
              <a href="mailto:support@coding.net">support@coding.net</a>
            </div>
          </div>
          <div className="sm:text-right text-sm opacity-50 mt-10 sm:mt-0">
            <p className="hover:text-brand-blue">
              <a href="https://coding.net/">
                © 2022 深圳市腾云扣钉科技有限公司
              </a>
            </p>
            <p className="mt-2">
              A Proud Product & Subsidiary of Tencent Cloud
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Monkit;
