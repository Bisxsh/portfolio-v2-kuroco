export function EnterFromLeft({ delay }: any) {
  return {
    initial: { x: -50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      default: {
        delay: delay ? delay + 0.5 : 0.5,
        duration: 0.7,
      },
    },
  };
}

export function EnterFromRight({ delay }: any) {
  return {
    initial: { x: 50, opacity: 0 },
    whileInView: { x: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      default: {
        delay: delay ? delay + 0.5 : 0.5,
        duration: 0.7,
      },
    },
  };
}

export function EnterWithFade({ delay }: any) {
  return {
    initial: { y: 40, opacity: 0 },
    whileInView: { y: 0, opacity: 1 },
    viewport: { once: true },
    transition: {
      default: {
        delay: delay ? delay + 0.5 : 0.5,
        duration: 0.7,
      },
    },
  };
}
