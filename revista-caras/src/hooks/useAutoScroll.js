import { useEffect, useRef } from 'react';

function useAutoScroll(speed = 1, interval = 20) {
  const containerRef = useRef(null);
  const scrollIntervalRef = useRef(null);

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
      scrollIntervalRef.current = setInterval(() => {
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
      clearInterval(scrollIntervalRef.current);
      scrollIntervalRef.current = null; 
    };

    // Function to handle mouse wheel scrolling
    const handleMouseWheel = (event) => {
      event.preventDefault(); 
      container.scrollLeft += event.deltaY;
    };

    
    startAutoScroll();

    
    container.addEventListener('mouseenter', stopAutoScroll);
    container.addEventListener('mouseleave', startAutoScroll);
    container.addEventListener('wheel', handleMouseWheel);

    
    return () => {
      clearInterval(scrollIntervalRef.current);
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