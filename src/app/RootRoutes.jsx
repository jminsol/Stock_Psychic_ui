import React from "react";
import { Redirect } from "react-router-dom";

import HomeRoutes from "./views/home/HomeRoutes";
import dashboardRoutes from "./views/dashboard/DashboardRoutes";
import predictionsRoutes from "./views/predictions/PredictionsRoutes";
import sessionRoutes from "./views/sessions/SessionRoutes";
import adminRoutes from './views/admin/adminRoutes'

import materialRoutes from "./views/material-kit/MaterialRoutes";
import dragAndDropRoute from "./views/Drag&Drop/DragAndDropRoute";

import formsRoutes from "./views/forms/FormsRoutes";
import mapRoutes from "./views/map/MapRoutes";

const redirectRoute = [
  {
    path: "/",
    exact: true,
    component: () => <Redirect to="/home" />
  }
];

const errorRoute = [
  {
    component: () => <Redirect to="/session/404" />
  }
];

const routes = [
  ...adminRoutes,
  ...HomeRoutes,
  ...sessionRoutes,
  ...dashboardRoutes,
  ...materialRoutes,
  ...predictionsRoutes,
  ...dragAndDropRoute,
  ...formsRoutes,
  ...mapRoutes,
  ...redirectRoute,
  ...errorRoute
];

export default routes;
