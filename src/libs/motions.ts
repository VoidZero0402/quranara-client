import { AnimationProps } from "framer-motion";

export const OpacityAnimation: AnimationProps = { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.3 } } as const;
