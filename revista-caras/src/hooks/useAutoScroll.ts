import { useEffect, useRef, MutableRefObject } from 'react';

function useAutoScroll(speed = 1, interval = 20): MutableRefObject<HTMLDivElement | null> {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollIntervalRef = useRef<number | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    // Function to reset the scroll position
    const resetScrollPosition = () => {
      container.scrollLeft = 0; 
    };

    // Function to start auto-scrolling
    const startAutoScroll = () => {
      if (scrollIntervalRef.current) return; 
      scrollIntervalRef.current = window.setInterval(() => {
        if (container) {
          container.scrollLeft += speed;

          // Check if the scroll has reached the maximum and reset
          if (container.scrollLeft >= container.scrollWidth - container.clientWidth) {
            resetScrollPosition();
          }
        }
      }, interval);
    };

    // Function to stop auto-scrolling
    const stopAutoScroll = () => {
      if (scrollIntervalRef.current !== null) {
        clearInterval(scrollIntervalRef.current);
        scrollIntervalRef.current = null;
      }
    };

    // Function to handle mouse wheel scrolling
    const handleMouseWheel = (event: WheelEvent) => {
      event.preventDefault(); 
      container.scrollLeft += event.deltaY;
    };

    
    startAutoScroll();

    
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
    container.addEventListener('wheel', handleMouseWheel);

    
    return () => {
      if (scrollIntervalRef.current !== null) clearInterval(scrollIntervalRef.current);
      if (container) {
        container.removeEventListener('mouseenter', stopAutoScroll);
        container.removeEventListener('mouseleave', startAutoScroll);
        container.removeEventListener('wheel', handleMouseWheel);
      }
    };
  }, [speed, interval]);

  return containerRef;
}

export default useAutoScroll;