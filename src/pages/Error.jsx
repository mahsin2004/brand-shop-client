import { useRouteError } from "react-router-dom";

export default function Error() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className="flex items-center justify-center h-screen">
      <div id="error-page" className="text-center ">
        <h1 className="text-xl font-medium">Oops!</h1>
        <p className="text-[100px] font-medium">404</p>
        <p className="text-red-500 text-xl font-medium">
          <i>page {error.statusText || error.message}</i>
        </p>
      </div>
    </div>
  );
}
