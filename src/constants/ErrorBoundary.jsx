import { useRouteError } from "react-router-dom";

export function ErrorBoundary() {
  const error = useRouteError();
  let { statusText, message } = error;
  return (
    <div className="flex items-center flex-col justify-center lg:flex-row py-28 px-6 md:px-24 md:py-20 lg:py-32 gap-16 lg:gap-28">
      <div className="">
        <h1 className="py-4 text-3xl lg:text-4xl font-extrabold text-gray-800">
          Sorry, an unexpected error has occurred.
        </h1>
        <p className="py-4 text-base text-gray-800">{statusText || message}</p>
      </div>
    </div>
  );
}
