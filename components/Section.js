import classnames from "classnames";

// Provides a flexible layout building block
export default function Section({
  children,
  className = "",
  short = false,
  narrow = false,
}) {
  const spacing = classnames({
    "py-4 md:py-6 lg:py-8": short,
    "py-8 md:py-10 lg:py-20": !short,
    "layout-narrow": narrow,
    layout: !narrow,
  });
  return (
    <section className={`w-full px-4 md:px-8 ${spacing} ${className}`}>
      {children}
    </section>
  );
}