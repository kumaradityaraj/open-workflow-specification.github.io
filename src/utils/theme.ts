export type ColorMode = "light" | "dark";
const THEME_CHANGE_EVENT = "theme-change";

export const getTheme = (): ColorMode => {
  if (typeof document === "undefined") {
    return "light";
  }

  return document.documentElement.dataset.theme === "dark"
    ? "dark"
    : "light";
};

export const setTheme = (theme: ColorMode): void => {
  if (typeof document === "undefined") {
    return;
  }
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  document.dispatchEvent(new Event(THEME_CHANGE_EVENT));
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

export const initializeThemeToggle = (): void => {
  const checkbox = document.getElementById("theme-toggle");
  if (!(checkbox instanceof HTMLInputElement)) {
    return;
  }
  checkbox.addEventListener("change", () => {
    setTheme(checkbox.checked ? "light" : "dark");
  });
};

export const getServerTheme = (): ColorMode => "light";

export const themeStore = {
  getSnapshot: getTheme,
  getServerSnapshot: getServerTheme,
  subscribe: subscribeTheme,
};