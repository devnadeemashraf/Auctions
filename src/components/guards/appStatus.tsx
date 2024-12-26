import { PropsWithChildren } from "react";
import { Navigate, useLocation } from "react-router-dom";

import env from "@/config/env";

const AppStatusGuard = ({ children }: PropsWithChildren) => {
  const location = useLocation();

  {
    /**
    If App not Live, render the 'comingsoon' route
    Can extend to support more statuses in future
    */
  }
  if (env.app.status !== "live" && location.pathname !== "/comingsoon") {
    return <Navigate to="/comingsoon" replace />;
  }

  {
    /**
    Redirect back to 'index' page if manually accessing 'comingsoon' route during 'live' status
    */
  }
  if (env.app.status === "live" && location.pathname === "/comingsoon") {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default AppStatusGuard;
