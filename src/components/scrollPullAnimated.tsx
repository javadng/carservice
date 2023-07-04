import { motion, Variants, Transition } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  offscreenY: number;
  onscreenY: number;
  viewportAmount?: number;
  scale?: boolean;
  duration?: number;
}

const ScrollPullAnimated: React.FC<Props> = ({
  children,
  className,
  offscreenY,
  onscreenY,
  viewportAmount,
  scale,
  duration,
}) => {
  const cardVariants: Variants = {
    offscreen: { y: offscreenY, opacity: 0 },
    onscreen: {
      y: onscreenY,
      opacity: 1,
      transition: {
        type: "tween",
        bounce: 0.4,
        duration: duration || 0.8,
      } as Transition,
    },
  };

  const cardVariantsScale: Variants = {
    offscreen: { opacity: 0, scale: 0.5 },
    onscreen: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "tween",
        bounce: 0.4,
        duration: duration || 0.8,
      } as Transition,
    },
  };

  const variant = scale ? cardVariantsScale : cardVariants;

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: viewportAmount || 0.8 }}
    >
      <motion.div className={className} variants={variant}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ScrollPullAnimated;
