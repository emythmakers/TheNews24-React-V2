import React, { useEffect } from "react";

export default function ErrorPage() {
  useEffect(() => {
    const canonical = document.querySelectorAll(
      'link[rel="canonical"]'
    )[0];

    if (canonical) {
      canonical.setAttribute("href", window.location.href);
    }
  }, []);

  return (
    <main>
      <div className="container">
        <div className="ErrorPage margin-ErrorPage">
          {/* <ModalADS /> */}
          <div className="row">
            <div className="col-10 offset-1">
              <div className="Errors">
                <i className="fa-solid fa-4"></i>{" "}
                <i className="fa-solid fa-0"></i>{" "}
                <i className="fa-solid fa-4"></i>
              </div>

              <title>404 - Nothing Found</title>

              <h1 className="ErrorHeader">Nothing Found</h1>

              <p className="ErrorText">
                The page you are looking for could not be found. It may not be
                available on <b>The News 24</b>, or the URL may be incorrect.
                Please check the address and try again.
              </p>

              <button className="mt-4">
                <a href="/english">Back to Home</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}