import "@openworkflowspec/diagram-editor/styles.css";
import { DiagramEditor } from "@openworkflowspec/diagram-editor";
import { useEffect, useSyncExternalStore } from "react";
import {
  getActiveExampleId,
  getServerActiveExampleId,
  subscribeActiveExample,
} from "../utils/activeExample";
import { themeStore } from "../utils/theme";

interface Example {
  id: string;
  content: string;
}
interface OWSEditorProps {
  examples: Example[];
}

export default function OWSEditor({
  examples,
}: OWSEditorProps) {
  const activeExampleId = useSyncExternalStore(
    subscribeActiveExample,
    getActiveExampleId,
    getServerActiveExampleId,
  );

  const colorMode = useSyncExternalStore(
    themeStore.subscribe,
    themeStore.getSnapshot,
    themeStore.getServerSnapshot,
  );

  const activeExample =
    examples.find((example) => example.id === activeExampleId) ??
    examples[0];

  const content = activeExample?.content ?? "";

  return (
    <DiagramEditor
      content={content}
      isReadOnly={true}
      locale="en"
      colorMode={colorMode}
    />
  );
}