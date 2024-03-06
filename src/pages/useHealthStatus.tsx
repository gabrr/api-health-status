import { IHealthCheck, ResourceType } from "@/data/models/HealthStatus";
import { HttpError } from "@/services/api/abstraction/IHttpClient";
import getHealthStatus from "@/services/healthStatus";
import { useEffect, useState } from "react";

const HEALTH_STATUS_UPDATE_INTERVAL = 15_000; // 15 seconds

export const useHealthSatus = () => {
  const [healthChecks, setHealthChecks] = useState<
    Map<ResourceType, IHealthCheck>
  >(new Map());

  const updateHealthStatus = async () => {
    const promises = Object.values(ResourceType).map(async (resource) => {
      try {
        const result = await getHealthStatus(resource);
        return { resource, result };
      } catch (error) {
        let errorMessage = "An unknown error occurred";

        if (error instanceof HttpError) {
          errorMessage = `${error.statusCode}: ${error.message}`;
        }

        if (error instanceof Error) {
          errorMessage = error.message;
        }

        return {
          resource,
          result: {
            message: errorMessage,
            hostname: "",
            success: false,
            time: 0,
          },
        };
      }
    });

    const results = await Promise.all(promises);

    setHealthChecks((currentChecks) => {
      const newChecks = new Map(currentChecks);

      results.forEach((r) => {
        if (r) {
          newChecks.set(r.resource, r.result);
        }
      });

      return newChecks;
    });
  };

  useEffect(() => {
    updateHealthStatus();

    const interval = setInterval(
      updateHealthStatus,
      HEALTH_STATUS_UPDATE_INTERVAL
    );

    return () => clearInterval(interval);
  }, []);

  return healthChecks;
};
