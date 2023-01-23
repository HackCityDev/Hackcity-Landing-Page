import React, { useEffect } from "react";
import { useLocation } from "react-router";

function ScrollToTop(props) {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return <div>{props.children}</div>;
}

export default ScrollToTop;
