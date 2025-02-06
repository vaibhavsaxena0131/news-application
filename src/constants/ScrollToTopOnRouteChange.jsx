import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTopOnRouteChange({ contentLayout }) {
  const { pathname } = useLocation();

  useEffect(() => {
    if (contentLayout?.current) {
      contentLayout.current.scrollTop = 0; // Scrolls to the top of the container
    }
  }, [pathname, contentLayout]);

  return null;
}

export default ScrollToTopOnRouteChange;
