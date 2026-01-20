import { defineStore } from "pinia";
import { ref, computed, readonly } from "vue";

export interface Breakpoints {
  xs: number;
  sm: number;
  md: number;
  lg: number;
  xl: number;
  xxl: number;
}

export type BreakpointName = "xs" | "sm" | "md" | "lg" | "xl" | "xxl";

export const useViewport = defineStore("viewport", () => {
  const width = ref<number>(window.innerWidth);
  const height = ref<number>(window.innerHeight);

  const breakpoints: Readonly<Breakpoints> = {
    xs: 0,
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
  };

  const isMobile = computed(() => width.value < breakpoints.md);
  const isTablet = computed(
    () => width.value >= breakpoints.md && width.value < breakpoints.lg
  );
  const isDesktop = computed(() => width.value >= breakpoints.lg);

  const isXs = computed(() => width.value < breakpoints.sm);
  const isSm = computed(
    () => width.value >= breakpoints.sm && width.value < breakpoints.md
  );
  const isMd = computed(
    () => width.value >= breakpoints.md && width.value < breakpoints.lg
  );
  const isLg = computed(
    () => width.value >= breakpoints.lg && width.value < breakpoints.xl
  );
  const isXl = computed(
    () => width.value >= breakpoints.xl && width.value < breakpoints.xxl
  );
  const isXxl = computed(() => width.value >= breakpoints.xxl);

  const current = computed<BreakpointName>(() => {
    if (width.value >= breakpoints.xxl) return "xxl";
    if (width.value >= breakpoints.xl) return "xl";
    if (width.value >= breakpoints.lg) return "lg";
    if (width.value >= breakpoints.md) return "md";
    if (width.value >= breakpoints.sm) return "sm";
    return "xs";
  });

  const updateDimensions = (): void => {
    width.value = window.innerWidth;
    height.value = window.innerHeight;
  };

  const init = (): void => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  };

  const destroy = (): void => {
    window.removeEventListener("resize", updateDimensions);
  };

  // Helper methods
  const isBreakpoint = (breakpoint: BreakpointName): boolean => {
    return current.value === breakpoint;
  };

  const isAbove = (breakpoint: BreakpointName): boolean => {
    return width.value >= breakpoints[breakpoint];
  };

  const isBelow = (breakpoint: BreakpointName): boolean => {
    return width.value < breakpoints[breakpoint];
  };

  return {
    width: readonly(width),
    height: readonly(height),
    breakpoints,

    isMobile,
    isTablet,
    isDesktop,
    isXs,
    isSm,
    isMd,
    isLg,
    isXl,
    isXxl,
    current,

    init,
    destroy,

    isBreakpoint,
    isAbove,
    isBelow,
  };
});
