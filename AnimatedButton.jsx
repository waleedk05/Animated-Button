import React, {useRef, useEffect} from "react";
import {gsap} from "gsap";
import {Link} from "react-router-dom"; // Import React Router Link
import "./AnimatedButton.css";

const AnimatedButton = ({
  label = "",
  to = null, // Use 'to' for routing instead of 'href'
  href = null, // Fallback to external link if 'to' is not provided
  onClick = null,
  icon = null,
  target = "_self",
  type = "button",
  disabled = false,
  className = "",
  style = {},
  ...rest
}) => {
  const buttonRef = useRef(null);

  useEffect(() => {
    if (disabled) return;
    const button = buttonRef.current;
    const flair = button.querySelector(".button__flair");
    const xSet = gsap.quickSetter(flair, "xPercent");
    const ySet = gsap.quickSetter(flair, "yPercent");

    const getXY = (e) => {
      const {left, top, width, height} = button.getBoundingClientRect();
      const xTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, width, 0, 100),
        gsap.utils.clamp(0, 100)
      );
      const yTransformer = gsap.utils.pipe(
        gsap.utils.mapRange(0, height, 0, 100),
        gsap.utils.clamp(0, 100)
      );

      return {
        x: xTransformer(e.clientX - left),
        y: yTransformer(e.clientY - top),
      };
    };

    const handleMouseEnter = (e) => {
      const {x, y} = getXY(e);
      xSet(x);
      ySet(y);

      gsap.to(flair, {
        scale: 1,
        duration: 0.4,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = (e) => {
      const {x, y} = getXY(e);
      gsap.killTweensOf(flair);

      gsap.to(flair, {
        xPercent: x > 90 ? x + 20 : x < 10 ? x - 20 : x,
        yPercent: y > 90 ? y + 20 : y < 10 ? y - 20 : y,
        scale: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseMove = (e) => {
      const {x, y} = getXY(e);
      gsap.to(flair, {
        xPercent: x,
        yPercent: y,
        duration: 0.4,
        ease: "power2",
      });
    };

    button.addEventListener("mouseenter", handleMouseEnter);
    button.addEventListener("mouseleave", handleMouseLeave);
    button.addEventListener("mousemove", handleMouseMove);

    return () => {
      button.removeEventListener("mouseenter", handleMouseEnter);
      button.removeEventListener("mouseleave", handleMouseLeave);
      button.removeEventListener("mousemove", handleMouseMove);
    };
  }, [disabled]);

  // Determine the element to render
  const Element = to ? Link : href ? "a" : "button";

  return (
    <Element
      to={to} // React Router 'to' prop
      href={!to ? href : undefined} // Only use 'href' if 'to' is not provided
      className={`button button--stroke ${className}`}
      data-block="button"
      ref={buttonRef}
      onClick={disabled ? undefined : onClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      type={!to && !href ? type : undefined}
      disabled={disabled}
      style={style}
      {...rest} // Spread additional props
    >
      <span className="button__flair"></span>
      <span className="button__label">{label}</span>
      {icon && <img src={icon} alt="icon" className="button__icon" />}
    </Element>
  );
};

export default AnimatedButton;

