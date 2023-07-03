import { motion, Variants, Transition } from "framer-motion";

interface Props {
  children: React.ReactNode;
  className?: string;
  offscreenY: number;
  onscreenY: number;
  viewportAmount?: number;
}

const ScrollPullAnimated: React.FC<Props> = ({
  children,
  className,
  offscreenY,
  onscreenY,
  viewportAmount,
}) => {
  const cardVariants: Variants = {
    offscreen: { y: offscreenY, opacity: 0 },
    onscreen: {
      y: onscreenY,
      opacity: 1,
      transition: {
        type: "tween",
        bounce: 0.4,
        duration: 0.8,
      } as Transition,
    },
  };

  return (
    <motion.div
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: viewportAmount || 0.8 }}
    >
      <motion.div className={className} variants={cardVariants}>
        {children}
      </motion.div>
    </motion.div>
  );
};

export default ScrollPullAnimated;
