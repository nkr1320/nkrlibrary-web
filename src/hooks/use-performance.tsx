import { useCallback, useEffect, useMemo, useRef } from "react";
import { ReportHandler } from "web-vitals";

// Intersection Observer hook for lazy loading
export const useIntersectionObserver = (
  options: IntersectionObserverInit = {},
) => {
  const elementRef = useRef<HTMLElement>(null);
  const isVisible = useRef(false);

  const observe = useCallback(() => {
    if (!elementRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible.current = entry.isIntersecting;
      },
      {
        threshold: 0.1,
        rootMargin: "50px",
        ...options,
      },
    );

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
  searchKeys: (keyof T)[],
) => {
  return useMemo(() => {
    if (!searchTerm.trim()) return items;

    const lowercaseSearchTerm = searchTerm.toLowerCase();
    return items.filter((item) =>
      searchKeys.some((key) => {
        const value = item[key];
        return (
          typeof value === "string" &&
          value.toLowerCase().includes(lowercaseSearchTerm)
        );
      }),
    );
  }, [items, searchTerm, searchKeys]);
};

// Enhanced performance monitoring using web-vitals
export const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return;
    // Dynamically import web-vitals to avoid unnecessary bundle size in dev
    import("web-vitals").then(({ getCLS, getFID, getLCP, getFCP, getTTFB }) => {
      // Handler to log or send metrics
      const sendToAnalytics: ReportHandler = (metric) => {
        // For real analytics, replace this with a POST to your endpoint or analytics tool
        console.log("[Web Vitals]", metric.name, metric.value, metric);
      };
      getCLS(sendToAnalytics);
      getFID(sendToAnalytics);
      getLCP(sendToAnalytics);
      getFCP(sendToAnalytics);
      getTTFB(sendToAnalytics);
    });
  }, []);
};
