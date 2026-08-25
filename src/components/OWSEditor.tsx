import "@openworkflowspec/diagram-editor/styles.css";
import { DiagramEditor } from "@openworkflowspec/diagram-editor";

interface OWSEditorProps {
  content: string;
  instanceKey: string;
}

export default function OWSEditor({ content }: OWSEditorProps) {
  return (
    <DiagramEditor content={content} isReadOnly={true} locale="en" />
  );
}