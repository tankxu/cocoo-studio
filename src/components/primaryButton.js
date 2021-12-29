import React from "react";
import classnames from "classnames";

const PrimaryButton = ({ color, styleName, children }) => {
  return (
    <button
      type="button"
      className={classnames(
        "inline-flex items-center px-10 py-4 border border-opacity-50 shadow-sm text-base font-medium rounded-sm transition-all hover:bg-brand-grey7 hover:bg-opacity-5 hover:border-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue1",
        color
          ? `border-${color} text-${color}`
          : "border-brand-dark text-brand-dark",
        styleName ? styleName : null
      )}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
