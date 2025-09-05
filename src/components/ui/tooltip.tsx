import React, { useState, useRef, useEffect } from "react";

interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: "left" | "right" | "top" | "bottom";
  disabled?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  position = "right",
  disabled = false,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [tooltipPosition, setTooltipPosition] = useState({ top: 0, left: 0 });
  const triggerRef = useRef<HTMLDivElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);

  const updatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    const gap = 8;

    let top = 0;
    let left = 0;

    switch (position) {
      case "right":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.right + gap;
        break;
      case "left":
        top = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        left = triggerRect.left - tooltipRect.width - gap;
        break;
      case "top":
        top = triggerRect.top - tooltipRect.height - gap;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
      case "bottom":
        top = triggerRect.bottom + gap;
        left = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        break;
    }

    setTooltipPosition({ top, left });
  };

  useEffect(() => {
    if (isVisible) {
      updatePosition();
    }
  }, [isVisible, position]);

  const handleMouseEnter = () => {
    if (!disabled) {
      setIsVisible(true);
    }
  };

  const handleMouseLeave = () => {
    setIsVisible(false);
  };

  return (
    <div
      ref={triggerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative"
    >
      {children}
      {isVisible && (
        <div
          ref={tooltipRef}
          className="fixed z-50 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded shadow-lg pointer-events-none"
          style={{
            top: `${tooltipPosition.top}px`,
            left: `${tooltipPosition.left}px`,
          }}
        >
          {content}
          <div
            className={`absolute w-2 h-2 bg-gray-900 transform rotate-45 ${
              position === "right"
                ? "left-0 top-1/2 -translate-y-1/2 -translate-x-1"
                : position === "left"
                ? "right-0 top-1/2 -translate-y-1/2 translate-x-1"
                : position === "top"
                ? "bottom-0 left-1/2 -translate-x-1/2 translate-y-1"
                : "top-0 left-1/2 -translate-x-1/2 -translate-y-1"
            }`}
          />
        </div>
      )}
    </div>
  );
};
