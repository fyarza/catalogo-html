import React from "react";

interface RainbowButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

export const RainbowButton = React.forwardRef<
  HTMLButtonElement,
  RainbowButtonProps
>(({ children, className = "", ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex overflow-hidden relative gap-2 justify-center items-center px-6 py-3 text-sm font-medium text-white whitespace-nowrap rounded-lg transition-all duration-300 cursor-pointer outline-none group shrink-0 focus-visible:ring-2 focus-visible:ring-blue-500 disabled:pointer-events-none disabled:opacity-50 hover:scale-105 hover:shadow-lg ${className}`}
      style={{
        background: `
          linear-gradient(#121213, #121213),
          linear-gradient(90deg, #ff6b6b, #4ecdc4, #45b7d1, #96ceb4, #feca57)
        `,
        backgroundClip: "padding-box, border-box",
        backgroundOrigin: "border-box",
        border: "1px solid transparent",
        backgroundSize: "100%, 200%",
        animation: "rainbow 3s ease infinite",
      }}
      {...props}
    >
      <span className="flex relative z-10 gap-2 items-center">{children}</span>
    </button>
  );
});

RainbowButton.displayName = "RainbowButton";
