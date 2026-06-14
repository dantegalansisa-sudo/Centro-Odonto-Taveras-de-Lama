import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [phase, setPhase] = useState<
    'black' | 'line' | 'glow' | 'text' | 'flash' | 'done'
  >('black');

  // Timed sequence: black(0.5s) → line(0.8s) → glow(0.5s) → text(0.8s) → flash(0.3s)
  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    timers.push(setTimeout(() => setPhase('line'), 500));
    timers.push(setTimeout(() => setPhase('glow'), 1300));
    timers.push(setTimeout(() => setPhase('text'), 1800));
    timers.push(setTimeout(() => setPhase('flash'), 2600));
    timers.push(setTimeout(() => {
      setPhase('done');
      onComplete();
    }, 2900));
    return () => timers.forEach(clearTimeout);
  }, [onComplete]);

  const isActive = (from: string) => {
    const order = ['black', 'line', 'glow', 'text', 'flash', 'done'];
    return order.indexOf(phase) >= order.indexOf(from);
  };

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="intro"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Horizontal line scan */}
          <motion.div
            className="intro__line"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={
              isActive('line')
                ? { scaleX: 1, opacity: 1 }
                : { scaleX: 0, opacity: 0 }
            }
            transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Expanding glow circle */}
          <motion.div
            className="intro__glow"
            initial={{ scale: 0, opacity: 0 }}
            animate={
              isActive('glow')
                ? { scale: 1, opacity: 1 }
                : { scale: 0, opacity: 0 }
            }
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
          />

          {/* Text reveal — letter by letter ticker */}
          <motion.div
            className="intro__text"
            initial={{ opacity: 0 }}
            animate={isActive('text') ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {'TAVERAS DE LAMA'.split('').map((char, i) => (
              <motion.span
                key={`main-${i}`}
                initial={{ opacity: 0, y: 10 }}
                animate={
                  isActive('text')
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 10 }
                }
                transition={{ delay: i * 0.04, duration: 0.08 }}
              >
                {char}
              </motion.span>
            ))}
            <div className="intro__subtext">
              {'Centro Odontológico Dra. Lilian Taveras de Lama'.split('').map((char, i) => (
                <motion.span
                  key={`sub-${i}`}
                  initial={{ opacity: 0 }}
                  animate={
                    isActive('text') ? { opacity: 1 } : { opacity: 0 }
                  }
                  transition={{ delay: 0.22 + i * 0.009, duration: 0.05 }}
                >
                  {char === ' ' ? ' ' : char}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* White flash */}
          <AnimatePresence>
            {phase === 'flash' && (
              <motion.div
                className="intro__flash"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.9, 0] }}
                transition={{ duration: 0.3, times: [0, 0.4, 1] }}
              />
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
