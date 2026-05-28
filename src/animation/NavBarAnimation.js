import gsap from "gsap";

export const navbarAnimation = (
  logoRef,
  navRef,
  iconRef
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    logoRef.current,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    }
  );

  tl.fromTo(
    navRef.current,
    {
      y: -100,
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1,
    },
    "-=0.7"
  );

  tl.fromTo(
    iconRef.current,
    {
      x: 100,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    },
    "-=0.7"
  );
};