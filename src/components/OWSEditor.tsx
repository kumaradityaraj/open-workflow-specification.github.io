import "@openworkflowspec/diagram-editor/styles.css";
import { DiagramEditor } from "@openworkflowspec/diagram-editor";
import { useEffect, useState } from "react";

interface OWSEditorProps {
  content: string;
  instanceKey: string;
}

export default function OWSEditor({ content, instanceKey }: OWSEditorProps) {
  const [colorMode, setColorMode] = useState<"light" | "dark">("light");

  useEffect(() => {
    const updateColorMode = () => {
      const root = document.documentElement;

      const theme = root.getAttribute("data-theme");

      const isDark =
        theme === "dark" ||
        theme === "night" ||
        root.classList.contains("dark");

      setColorMode(isDark ? "dark" : "light");
    };

    updateColorMode();

    const observer = new MutationObserver(updateColorMode);

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class", "data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <DiagramEditor
      key={`${instanceKey}-${colorMode}`}
      content={content}
      isReadOnly={true}
      locale="en"
      colorMode={colorMode}
    />
  );
}