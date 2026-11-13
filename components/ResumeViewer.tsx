"use client";

import { useEffect, useRef, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import "react-pdf/dist/Page/AnnotationLayer.css";
import "react-pdf/dist/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.mjs",
  import.meta.url
).toString();

// Renders the resume with pdf.js so links inside the PDF open in a new tab
// (the browser's built-in PDF viewer in an iframe navigates in place).
export default function ResumeViewer({ file }: { file: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>();
  const [numPages, setNumPages] = useState(0);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(([entry]) => setWidth(entry.contentRect.width));
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="w-full">
      <Document
        file={file}
        externalLinkTarget="_blank"
        externalLinkRel="noopener noreferrer"
        onLoadSuccess={({ numPages }) => setNumPages(numPages)}
        loading={<p className="text-center py-10 text-gray-500">Loading resume…</p>}
        error={
          <p className="text-center py-10">
            Couldn&apos;t load the preview.{" "}
            <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              Open the PDF
            </a>
          </p>
        }
      >
        {Array.from({ length: numPages }, (_, i) => (
          <Page key={i} pageNumber={i + 1} width={width} className="mb-4 last:mb-0" />
        ))}
      </Document>
    </div>
  );
}
