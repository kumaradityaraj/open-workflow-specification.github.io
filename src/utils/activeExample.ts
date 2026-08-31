const STRIP_ID = "example-tabs";
const CHECKED_TAB = 'input[name="example_tabs"]:checked';

export const getActiveExampleId = (): string =>
  document.querySelector<HTMLInputElement>(CHECKED_TAB)?.value ?? "";

export const getServerActiveExampleId = (): string => "";

export function subscribeActiveExample(
  onChange: () => void,
): () => void {
  const strip = document.getElementById(STRIP_ID);

  if (!strip) {
    if (import.meta.env.DEV) {
      console.warn(
        `[activeExample] #${STRIP_ID} not found; diagram will not follow the tabs.`,
      );
    }

    return () => {};
  }

  strip.addEventListener("change", onChange);

  return () => {
    strip.removeEventListener("change", onChange);
  };
}