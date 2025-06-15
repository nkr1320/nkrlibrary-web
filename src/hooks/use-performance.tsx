import { useCallback, useEffect, useMemo, useRef } from 'react';

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const isVisible = useRef(false);

  const observe = useCallback(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(([entry]) => {
      isVisible.current = entry.isIntersecting;
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options,
    });

    observer.observe(elementRef.current);
    return () => observer.disconnect();
  }, [options]);

  useEffect(() => {
    const cleanup = observe();
    return cleanup;
  }, [observe]);

  return { elementRef, isVisible: isVisible.current };
};

// Debounced value hook
export const useDebounce = <T,>(value: T, delay: number): T => {
  const debouncedValue = useRef(value);
  const timeoutRef = useRef<NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      debouncedValue.current = value;
    }, delay);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [value, delay]);

  return debouncedValue.current;
};

// Memoized search filter
export const useSearchFilter = <T,>(
  items: T[],
  searchTerm: string,
  searchKeys: (keyof T)[]
) => {
  return useMemo(() => {
    if (!searchTerm.trim()) return items;

    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return items.filter(item =>
      searchKeys.some(key => {
        const value = item[key];
        return typeof value === 'string' && 
               value.toLowerCase().includes(lowercaseSearchTerm);
      })
    );
  }, [items, searchTerm, searchKeys]);
};

// Performance monitoring
export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Monitor Core Web Vitals
    if ('web-vital' in window) {
      // This would be implemented with a library like web-vitals
      console.log('Performance monitoring active');
    }
  }, []);
};