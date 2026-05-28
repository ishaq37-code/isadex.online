import gsap from "gsap";

export const heroAnimation = (
  contentRef,
  imageRef
) => {
  const tl = gsap.timeline();

  tl.fromTo(
    contentRef.current,
    {
      x: -120,
      opacity: 0,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1,
    }
  );

  tl.fromTo(
    imageRef.current,
    {
      x: 120,
      opacity: 0,
      scale: 0.7,
      rotate: 10,
    },
    {
      x: 0,
      opacity: 1,
      scale: 1,
      rotate: 0,
      duration: 1,
    },
    "-=0.6"
  );
};