import React from "react";

const PrimaryButton = ({ color, styleName, children }) => {
  return (
    <button
      type="button"
      className={`inline-flex items-center px-10 py-4 border border-${
        color || "brand-dark"
      } border-opacity-50 shadow-sm text-base font-medium rounded-sm text-${
        color || "brand-dark"
      } transition-all hover:bg-brand-grey7 hover:bg-opacity-5 hover:border-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue1 ${styleName}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
