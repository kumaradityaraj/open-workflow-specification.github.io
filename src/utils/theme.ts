export type ColorMode = "light" | "dark";
export const THEME_CHANGE_EVENT = "theme-change";

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
  document.addEventListener(THEME_CHANGE_EVENT, onChange);
  return () => {
    document.removeEventListener(THEME_CHANGE_EVENT, onChange);
  };
};

export const notifyThemeChange = (): void => {
  if (typeof document === "undefined") {
    return;
  }
  document.dispatchEvent(new Event(THEME_CHANGE_EVENT));
};

export const getServerTheme = (): ColorMode => "light";

export const themeStore = {
  getSnapshot: getTheme,
  getServerSnapshot: getServerTheme,
  subscribe: subscribeTheme,
};