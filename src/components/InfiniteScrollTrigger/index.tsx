import { useEffect, useRef } from "react";

export interface InfiniteScrollTriggerProps {
  blockCall: boolean;
  loadNextPage: () => void;
}

export const InfiniteScrollTrigger = ({
  blockCall,
  loadNextPage,
}: InfiniteScrollTriggerProps) => {
  const delayMs = 500;
  const ref = useRef<HTMLDivElement | null>(null);
  const cooldownRef = useRef<boolean>(false);

  useEffect(() => {
    if (blockCall) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;

        if (entry.isIntersecting && !cooldownRef.current) {
          cooldownRef.current = true;
          loadNextPage();

          setTimeout(() => {
            cooldownRef.current = false;
          }, delayMs);
        }
      },
      {
        rootMargin: "50px",
      }
    );

    const el = ref.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [blockCall, loadNextPage, delayMs]);

  return <div ref={ref} style={{ height: "1px" }} />;
};
