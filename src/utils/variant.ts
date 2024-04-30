export const fadeIn = (direction: string, delay: number) => {
  return {
    hidden: {
      y: direction === "up" ? 25 : direction === "down" ? -25 : 0,
      opacity: 0,
      x: direction === "left" ? 25 : direction === "right" ? -25 : 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        // type: 'tween',
        duration: 0.5,
        delay: delay,
        // ease: [0.25, 0.25, 0.25, 0.75],
      },
    },
  };
};
export const variants = (direction: string, delay: number) => {
  return {
    variants: fadeIn(direction, delay),
    initial: "hidden",
    whileInView: "show",
    viewport: { once: true, amount: 0.7 },
  };
};
