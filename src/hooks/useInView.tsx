import { useState, useEffect, useRef, RefObject } from 'react';

interface IntersectionOptions extends IntersectionObserverInit {
  triggerOnce?: boolean;
}

type UseInViewReturnType = [RefObject<HTMLElement>, boolean];

export function useInView(options: IntersectionOptions = {}): UseInViewReturnType {
  const { threshold = 0, root = null, rootMargin = '0px', triggerOnce = false } = options;
  const [isInView, setIsInView] = useState(false);
  const ref = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isVisible = entry.isIntersecting;
        setIsInView(isVisible);
        
        if (isVisible && triggerOnce) {
          observer.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );
    
    observer.observe(element);
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);
  
  return [ref, isInView];
}