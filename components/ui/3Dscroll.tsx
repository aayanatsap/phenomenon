import React, { useEffect, useRef, useState } from 'react';

const cards = [
  { id: 1, content: 'Card 1' },
  { id: 2, content: 'Card 2' },
  { id: 3, content: 'Card 3' },
  { id: 4, content: 'Card 4' },
];

const CardScroller: React.FC = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const scrollY = containerRef.current.scrollTop;
      const cardHeight = window.innerHeight; // Full viewport height for each card
      const newCardIndex = Math.floor(scrollY / cardHeight);
      setCurrentCard(Math.max(0, Math.min(newCardIndex, cards.length - 1)));
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="h-screen overflow-y-scroll relative"
      style={{ scrollBehavior: 'smooth' }} // Optional: smooth scrolling
    >
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${
            index === currentCard ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ height: '100vh' }} // Each card takes the full height of the viewport
        >
          <div className="bg-blue-500 w-full h-full flex items-center justify-center text-white text-3xl">
            {card.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardScroller;
