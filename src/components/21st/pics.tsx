import { useState, useRef } from "react";
import { motion } from "framer-motion";
import type { PanInfo } from "framer-motion";

interface Card {
  id: number;
  src: string;
  zIndex: number;
}

interface ImgStackProps {
  images: string[];
}

export default function ImgStack({ images }: ImgStackProps) {
  const [cards, setCards] = useState<Card[]>(
    images.map((src, index) => ({
      id: index,
      src,
      zIndex: 50 - index * 10,
    })),
  );

  const [isAnimating, setIsAnimating] = useState(false);
  const dragStartPos = useRef({ x: 0, y: 0 });
  const minDragDistance = 50;

  const getCardStyles = (index: number) => ({
    x: index * -12,
    y: index * -8,
    rotate: index === 0 ? 0 : -(2 + index * 3),
    scale: 1,
  });

  const handleDragStart = (_: any, info: PanInfo) => {
    dragStartPos.current = { x: info.point.x, y: info.point.y };
  };

  const handleDragEnd = (_: any, info: PanInfo) => {
    const dx = info.point.x - dragStartPos.current.x;
    const dy = info.point.y - dragStartPos.current.y;

    const distance = Math.sqrt(dx * dx + dy * dy);

    if (isAnimating || distance < minDragDistance) return;

    setIsAnimating(true);

    setCards((prev) => {
      const newCards = [...prev];
      const first = newCards.shift()!;
      newCards.push(first);

      return newCards.map((card, i) => ({
        ...card,
        zIndex: 50 - i * 10,
      }));
    });

    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="relative flex items-center justify-center w-96 h-96 my-4">
      {cards.map((card, index) => {
        const isTop = index === 0;

        return (
          <motion.div
            key={card.id}
            className="absolute w-64 h-80 rounded-xl overflow-hidden shadow-xl cursor-grab active:cursor-grabbing border border-border bg-background"
            style={{ zIndex: card.zIndex }}
            animate={getCardStyles(index)}
            drag={isTop && !isAnimating}
            dragElastic={0.2}
            dragConstraints={{ left: -150, right: 150, top: -150, bottom: 150 }}
            dragSnapToOrigin
            onDragStart={handleDragStart}
            onDragEnd={handleDragEnd}
            whileHover={isTop ? { scale: 1.05 } : {}}
            whileDrag={{
              scale: 1.1,
              rotate: 0,
              zIndex: 100,
            }}
          >
            <img
              src={card.src}
              alt={`Card ${card.id}`}
              className="w-full h-full object-cover pointer-events-none"
              draggable={false}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
