import { ResourceController } from "../controllers/swapi.controller"
import { ServerRoute } from "@hapi/hapi";

const routes: ServerRoute[] = [
  {
    method: "GET",
    path: "/api/v1/{resource}",
    handler: ResourceController.getAllResources,
  },
  {
    method: "GET",
    path: "/api/v1/{resource}/{id}",
    handler: ResourceController.getResourceById,
  }
];

export default routes;