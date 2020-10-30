import { MatxLoadable } from "matx";
import { authRoles } from "../../auth/authRoles";

const Apple = MatxLoadable({
  loader: () => import("./Apple")
})
const Tesla = MatxLoadable({
  loader: () => import("./Tesla")
})
const dashboardRoutes = [
  {
    path: "/nasdaq/apple",
    component: Apple,
    auth: authRoles.admin
  },
  {
    path: "/nasdaq/tesla",
    component: Tesla,
    auth: authRoles.admin
  }
];

export default dashboardRoutes;
