import { Outlet } from "react-router-dom";
import Headers from "@/layouts/headers";
import { Suspense, memo, useMemo, useRef } from "react";
import Footer from "@/layouts/footer";
import ScrollToTopOnRouteChange from "../constants/ScrollToTopOnRouteChange";
import PopupComponent from "@/components/popUp/popup.index";

const Layout = ({ userType }) => {
  const contentLayoutRef = useRef(null);

  let InitialLoader = () => {
    return (
      <div className="flex items-center justify-center h-full w-[100vw]">
        loading...
      </div>
    );
  };

  // Calculate height based on `userType`
  const headerHeight = useMemo(
    () => (userType === "" ? "h-[8rem] lg:h-[13rem]" : "h-[9rem]"),
    [userType]
  );
  const contentHeight = useMemo(
    () =>
      userType === ""
        ? "h-[calc(100vh-8rem)] lg:h-[calc(100vh-13rem)]"
        : "h-[calc(100vh-9rem)]",
    [userType]
  );

  // Determine sidebar visibility
  return (
    <div className="h-full w-full overflow-hidden">
      <Suspense fallback={<InitialLoader />}>
        {/* Header */}
        <div className={`${headerHeight} bg-gray-100 shadow-md`}>
          <Headers />
        </div>

        {/* Main Content Area */}
        <div className={`${contentHeight} w-full min-h-96`}>
          <div
            ref={contentLayoutRef}
            className="h-full overflow-x-auto scrollbar"
          >
            <ScrollToTopOnRouteChange contentLayout={contentLayoutRef} />

            {/* Grid Layout */}
            <div className={`grid grid-rows-[auto_1fr_auto] h-full`}>
              {/* Main Content Row */}
              <div
                className={`grid gap-4`}
              >
                {/* Main Content */}
                <div className="bg-white shadow-lg p-4 rounded-lg overflow-auto">
                  <Outlet />
                </div>
              </div>
              {/* Footer */}
              <div className="bg-gray-100 relative">
                <Footer companyName="news-application" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <PopupComponent />
        </div>
      </Suspense>
    </div>
  );
};
export default memo(Layout);
