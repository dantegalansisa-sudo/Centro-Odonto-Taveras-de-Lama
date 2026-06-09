import { useScroll, useTransform, useSpring, type MotionValue } from 'framer-motion';
import { useRef } from 'react';

/**
 * Parallax suave ligado al scroll. Devuelve un ref para el contenedor y un
 * MotionValue `y` (en px) para aplicar a un elemento hijo.
 *
 *   const { ref, y } = useParallax(60);
 *   <div ref={ref}><motion.img style={{ y }} /></div>
 *
 * `distance` controla cuánto se desplaza (px). Positivo = el elemento sube al
 * hacer scroll hacia abajo.
 */
export function useParallax(distance = 60): {
  ref: React.RefObject<HTMLDivElement | null>;
  y: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const raw = useTransform(scrollYProgress, [0, 1], [distance, -distance]);
  const y = useSpring(raw, { stiffness: 120, damping: 30, mass: 0.4 });
  return { ref, y };
}
