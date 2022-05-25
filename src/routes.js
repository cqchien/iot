import React from "react";

const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));
const Charts = React.lazy(() => import("./views/iot/Charts"));
const Logs = React.lazy(() => import("./views/iot/Logs"));
const Main = React.lazy(() => import("./views/iot/Main"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
  { path: "/iot", name: "IOT", element: Main, exact: true },
  { path: "/iot/main", name: "Main", element: Main },
  { path: "/iot/charts", name: "Charts", element: Charts },
  { path: "/iot/logs", name: "Logs", element: Logs },
];

export default routes;
