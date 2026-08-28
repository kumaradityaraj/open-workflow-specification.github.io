export type ColorMode = "light" | "dark";

export const getTheme = (): ColorMode => {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark"
    ? "dark"
    : "light";
};

export const subscribeTheme = (
  onChange: () => void,
): (() => void) => {
  if (typeof document === "undefined") {
    return () => {};
  }

  const observer = new MutationObserver(onChange);

  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["data-theme"],
  });

  return () => observer.disconnect();
};

export const getServerTheme = (): ColorMode => "light";

export const themeStore = {
  getSnapshot: getTheme,
  getServerSnapshot: getServerTheme,
  subscribe: subscribeTheme,
};