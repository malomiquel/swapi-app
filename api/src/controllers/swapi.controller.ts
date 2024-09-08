import { SwapiService } from "../services/swapi.service";
import { Request, ResponseToolkit } from "@hapi/hapi";

export const ResourceController = {
  async getAllResources(request: Request, h: ResponseToolkit) {
    try {
      const { resource } = request.params;
      const resources = await SwapiService.getAll(resource);
      return h.response(resources).code(200);
    } catch {
      return h
        .response({ error: `Unable to fetch ${request.params.resource}` })
        .code(500);
    }
  },

  async getResourceById(request: Request, h: ResponseToolkit) {
    try {
      const { resource, id } = request.params;
      const resourceItem = await SwapiService.getById(resource, id);
      return h.response(resourceItem).code(200);
    } catch {
      return h
        .response({ error: `Unable to fetch ${request.params.resource} with ID: ${request.params.id}` })
        .code(500);
    }
  }
}
