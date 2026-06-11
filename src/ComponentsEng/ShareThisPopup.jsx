import React from "react";
import { useEffect } from "react";
// import { useState } from "react";
// import { EmailShareButton, FacebookShareButton, LinkedinShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
// import { EmailIcon, FacebookIcon, LinkedinIcon, TwitterIcon, WhatsappIcon } from "react-share";

export default function ShareThisPopup({ title, url }) {
    // return (
    //     <div className="DSocialTop mt-2 ">
           
    //         <FacebookShareButton url={url} title={title}>
    //             <FacebookIcon size={30} round={true} />
    //         </FacebookShareButton>
    //         <LinkedinShareButton url={url}>
    //             <LinkedinIcon size={30} round={true} />
    //         </LinkedinShareButton>
    //         <TwitterShareButton url={url}>
    //             <TwitterIcon size={30} round={true} />
    //         </TwitterShareButton>
    //         <EmailShareButton url={url} body="mailto:hello@thenews24.com">
    //             <EmailIcon size={30} round={true} />
    //         </EmailShareButton>
    //         <WhatsappShareButton url={url}>
    //             <WhatsappIcon size={30} round={true} />
    //         </WhatsappShareButton>
           
    //     </div>
    // )
    // const [pageURL, setPageURL] = useState("");


//   useEffect(() => {
//     const urlArr = window.location.href.split("/");
//     // console.log(urlArr);
//     urlArr[urlArr.length - 1] = contentID;
//     const url = urlArr.join("/");
//     setPageURL(url);
//   }, [contentID]);

  useEffect(() => {
    const scriptId = "sharethis-inline-share-buttons";

    // Function to load script synchronously
    const loadShareThis = () => {
      return new Promise((resolve) => {
        const existingScript = document.getElementById(scriptId);
        if (!existingScript) {
          const script = document.createElement("script");
          script.id = scriptId;
          script.src = "https://platform-api.sharethis.com/js/sharethis.js#property=68a2bc3929e65322fc130579&product=sop";
          script.onload = () => resolve(true);
          document.body.appendChild(script);
        } else {
          resolve(true);
        }
      });
    };

    loadShareThis().then(() => {
      if (window.__sharethis__) {
        window.__sharethis__.initialize();
      }
    });
  }, []);

  return (
    <div className="DSocialTop d-flex justify-content-start gap-2 mt-3 mb-2">
        <div className="sharethis-inline-share-buttons" url={url} title={title}></div>
        
      {/* <div className="sharethis-inline-share-buttons" data-url={url} data-title={title}></div> */}
    </div>
  
  );

}
