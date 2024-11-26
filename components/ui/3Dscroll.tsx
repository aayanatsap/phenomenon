"use client"
import React, { useState, useEffect } from 'react';

const cards = ["Card 1", "Card 2", "Card 3", "Card 4"];

const CardScrollPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [scrollOffset, setScrollOffset] = useState(0);

  // Function to handle scroll event
  const handleScroll = (event: WheelEvent) => {
    // Accumulate scroll offset based on scroll direction
    setScrollOffset((prevOffset) => prevOffset + event.deltaY);

    // Check if cumulative scroll offset has reached ±100vh
    const threshold = window.innerHeight;
    if (scrollOffset >= threshold) {
      setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
      setScrollOffset(0); // Reset scroll offset after card change
    } else if (scrollOffset <= -threshold) {
      setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
      setScrollOffset(0); // Reset scroll offset after card change
    }
  };

  // Set up scroll event listener
  useEffect(() => {
    window.addEventListener('wheel', handleScroll);
    return () => {
      window.removeEventListener('wheel', handleScroll);
    };
  }, [scrollOffset]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 text-white">
      <div
        className="text-5xl font-bold"
        style={{
          transition: 'opacity 0.5s ease',
          backgroundColor: `hsl(${currentIndex * 90}, 70%, 50%)`,
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        {cards[currentIndex]}
      </div>
    </div>
  );
};

export default CardScrollPage;
