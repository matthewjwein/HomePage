"use client";

import React, { useState, useEffect } from "react";

import { Document, Page, pdfjs } from "react-pdf";

import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

export default function Resume() {
    // State to track the width of the window
    const [width, setWidth] = useState(0);

    // useEffect to update the width state when the component mounts
    useEffect(() => {
        // Function to update the width state
        const updateWidth = () => {
            setWidth(window.innerWidth);
        };

        // Call the function to update width when the component mounts
        updateWidth();

        // Add event listener to update width when window is resized
        window.addEventListener("resize", updateWidth);

        // Cleanup function to remove event listener when component unmounts
        return () => {
            window.removeEventListener("resize", updateWidth);
        };
    }, []);

    return (
        <Document className="resume" file={"/resume.pdf"}>
            {/* Render the Page components for each page in the PDF, resume is only one page but keep this in case it goes to two pages */}
            {Array.from(new Array(1), (item, index) => (
                <Page
                    key={`page_${index + 1}`}
                    pageNumber={index + 1}
                    width={width} // Set the width to the width of the viewer
                    scale={0.9} // Adjust the scale factor as needed
                />
            ))}
        </Document>
    );
}