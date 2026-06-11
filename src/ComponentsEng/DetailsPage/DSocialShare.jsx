import React, { useState, useEffect } from "react";

export default function DSocialShare({ title, contentID }) {
  const [pageURL, setPageURL] = useState("");

  useEffect(() => {
    const urlArr = window.location.href.split("/");
    urlArr[urlArr.length - 1] = contentID;
    const url = urlArr.join("/");
    setPageURL(url);
    console.log(setPageURL);
  }, [contentID]);

  // Load ShareThis script dynamically (once)
  // useEffect(() => {
  //   const scriptId = "sharethis-inline-share-buttons";
  //   if (!document.getElementById(scriptId)) {
  //     const script = document.createElement("script");
  //     script.id = scriptId;
  //     script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=6809e6d0eebbe9001a9ff1c8&product=inline-share-buttons&source=platform" ;
  //     script.async = true;
  //     document.body.appendChild(script);
  //   }
  // }, []);

  // Re-initialize ShareThis when URL changes
  // useEffect(() => {
  //   if (window.__sharethis__) {
  //     window.__sharethis__.initialize();
  //   }
  // }, [pageURL]);
  useEffect(() => {
    const scriptId = "sharethis-inline-share-buttons";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=68a2bc3929e65322fc130579&product=sop";
      script.async = true;
      script.onload = () => {
        if (window.__sharethis__) {
          window.__sharethis__.initialize();
        }
      };
      document.body.appendChild(script);
    } else {
      // If script is already there and ShareThis exists, re-initialize
      if (window.__sharethis__) {
        window.__sharethis__.initialize();
      }
    }
  }, []);
  

  return (
    <div className="DSocialTop gap-2 mt-2">
      {/* Share buttons */}
      <div className="sharethis-inline-share-buttons"  data-url={pageURL} data-title={title}></div>
    </div>
  );
}
