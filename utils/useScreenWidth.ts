import { useEffect, useState } from 'react';

const useScreenWidth = (): number | undefined => {
  const [width, setWidth] = useState<number | undefined>(
    undefined,
  );
  useEffect(() => {
    function handleResize(): void {
      setWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener('resize', handleResize);
    return (): void => window.removeEventListener('resize', handleResize);
  }, []);

  return width;
};

export default useScreenWidth;
