import { useEffect, useState } from 'react';

function useScroll() {
  const [scrollPos, setScrollPos] = useState(0);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollPos(window.scrollY);
    });
  }, []);

  return scrollPos;
};

export default useScroll;