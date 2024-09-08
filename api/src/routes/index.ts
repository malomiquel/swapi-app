import { ServerRoute } from "@hapi/hapi";
import swapiRoutes from "./swapi.routes";

const routes: ServerRoute[] = [...swapiRoutes];

export { routes }