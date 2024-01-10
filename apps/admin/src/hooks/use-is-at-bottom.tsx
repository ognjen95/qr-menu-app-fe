import { useEffect, useState } from "react";

const useIsAtBottom = (
  ref: React.RefObject<HTMLElement>,
  threshold = 20
): boolean => {
  const [isAtBottom, setIsAtBottom] = useState(false);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    const handleScroll = () => {
      const element = ref.current;

      if (!element) return;

      const scrollPosition =
        element.scrollHeight - element.scrollTop - element.clientHeight;

      if (scrollPosition <= threshold) {
        setIsAtBottom(true);
      } else {
        setIsAtBottom(false);
      }
    };

    const element = ref.current;

    if (element) {
      element.addEventListener("scroll", handleScroll);

      return () => {
        element.removeEventListener("scroll", handleScroll);
      };
    }
  }, [ref, threshold]);

  return isAtBottom;
};

export default useIsAtBottom;
