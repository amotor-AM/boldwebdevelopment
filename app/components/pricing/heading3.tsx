import React from "react";

interface Heading3Props {
  subtitle?: string;
  title: string;
  description?: string;
  color?: "light" | "dark" | "blueGray" | "red" | "orange" | "amber" | "emerald" | "teal" | "lightBlue" | "indigo" | "purple" | "pink";
  alignment?: "left" | "center" | "right";
  whiteContent?: boolean;
}

export default function Heading3({
  subtitle,
  title,
  description,
  color = "blueGray",
  alignment = "left",
  whiteContent = false,
}: Heading3Props) {
  const colors: Record<string, string> = {
    light: "text-blueGray-200",
    dark: "text-blueGray-800",
    blueGray: "text-blueGray-500",
    red: "text-red-500",
    orange: "text-orange-500",
    amber: "text-amber-500",
    emerald: "text-emerald-500",
    teal: "text-teal-500",
    lightBlue: "text-lightBlue-500",
    indigo: "text-indigo-500",
    purple: "text-purple-500",
    pink: "text-pink-500",
  };
  const alignmentsRow: Record<string, string> = {
    left: "justify-start",
    center: "justify-center",
    right: "justify-end",
  };
  const alignmentsText: Record<string, string> = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  const textClasses = whiteContent
    ? "text-white opacity-75"
    : "text-blueGray-400";

  return (
    <>
      <div className={"mb-12 flex flex-wrap -mx-4 " + alignmentsRow[alignment]}>
        <div
          className={
            "px-4 relative w-full lg:w-8/12 " + alignmentsText[alignment]
          }
        >
          {subtitle && (
            <h6 className={"mb-5 font-bold uppercase text-2xl md:text-3xl lg:text-4xl" + colors[color]}>
              {subtitle}
            </h6>
          )}
          {title && (
            <h3
              className={
                "text-3xl md:text-4xl lg:text-6xl font-bold mt-3 mb-10 " +
                (whiteContent ? "text-white" : "text-blueGray-700")
              }
            >
              {title}
            </h3>
          )}
          {description && (
            <p className={"mt-2 mb-4 text-xl leading-relaxed " + textClasses}>
              {description}
            </p>
          )}
        </div>
      </div>
    </>
  );
}