import { IHealthCheck, ResourceType } from "@/data/models/HealthStatus";
import api from "./api";

type GetHealthStatus = (resource: ResourceType) => Promise<IHealthCheck>;

const getHealthStatus: GetHealthStatus = (resource) =>
  api.get(`/${resource}/health/status`);

export default getHealthStatus;
