import React from "react";
import { Toaster as Sonner } from "sonner";
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ React.createElement(
    Sonner,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-ink group-[.toaster]:text-cream group-[.toaster]:border-cream/20 group-[.toaster]:shadow-lg group-[.toaster]:rounded-xl",
          description: "group-[.toast]:text-cream/70",
          actionButton: "group-[.toast]:bg-coral group-[.toast]:text-cream",
          cancelButton: "group-[.toast]:bg-cream/10 group-[.toast]:text-cream"
        }
      },
      ...props
    }
  );
};
export {
  Toaster
};
