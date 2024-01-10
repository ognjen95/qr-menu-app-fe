import { useState, useEffect, useRef, useCallback } from "react";

type IntersectionObserverOptions = IntersectionObserverInit & {
  freezeOnceVisible?: boolean;
};

export type UseIntersectionObserverReturn = [
  React.MutableRefObject<HTMLDivElement | null>,
  boolean,
  IntersectionObserverEntry | null
];

const useIntersectionObserver = (
  options: IntersectionObserverOptions = {}
): UseIntersectionObserverReturn => {
  const [intersectionEntry, setIntersectionEntry] =
    useState<IntersectionObserverEntry | null>(null);

  const targetRef = useRef<HTMLDivElement | null>(null);

  const observerRef = useRef<IntersectionObserver | null>(null);

  const { freezeOnceVisible = false, ...intersectionOptions } = options;

  const handleIntersect: IntersectionObserverCallback = useCallback(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIntersectionEntry(entry);

          if (freezeOnceVisible && observerRef.current) {
            observerRef.current.unobserve(entry.target);
          }
        } else {
          setIntersectionEntry(null);
        }
      });
    },
    [freezeOnceVisible]
  );

  useEffect(() => {
    const target = targetRef.current;

    observerRef.current = new IntersectionObserver(
      handleIntersect,
      intersectionOptions
    );

    if (target && observerRef.current) {
      observerRef.current.observe(target);
    }

    return () => {
      if (target && observerRef.current) {
        observerRef.current.unobserve(target);
      }
    };
  }, [targetRef, intersectionOptions, handleIntersect]);

  return [targetRef, !!intersectionEntry, intersectionEntry];
};

export default useIntersectionObserver;
