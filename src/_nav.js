import React from "react";
import CIcon from "@coreui/icons-react";
import { cilDrop, cilPencil, cilPuzzle, cilSpeedometer } from "@coreui/icons";
import { CNavGroup, CNavItem, CNavTitle } from "@coreui/react";

const _nav = [
  {
    component: CNavItem,
    name: "Dashboard",
    to: "/dashboard",
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: "info",
      text: "NEW",
    },
  },
  {
    component: CNavTitle,
    name: "IOT Components",
  },
  {
    component: CNavItem,
    name: "Main",
    to: "/iot/main",
    icon: <CIcon icon={cilDrop} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Charts",
    to: "/iot/charts",
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: "Logs",
    to: "/iot/logs",
    icon: <CIcon icon={cilPuzzle} customClassName="nav-icon" />,
  },
];

export default _nav;
