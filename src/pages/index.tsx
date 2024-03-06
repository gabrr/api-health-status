import StatusCard from "@/components/molecules/StatusCard";
import { Inter } from "next/font/google";
import { useHealthSatus } from "./useHealthStatus";
import { IHealthCheck } from "@/data/models/HealthStatus";

const inter = Inter({ subsets: ["latin"] });

const errorStatusFirst = (list: Map<string, IHealthCheck>) =>
  Array.from(list).sort((a, b) => {
    if (a[1].success && !b[1].success) {
      return 1;
    }
    return -1;
  });

const Home = () => {
  const healthChecks = useHealthSatus();

  return (
    <main className={`min-h-screen p-10 ${inter.className}`}>
      <h1 className="text-4xl font-bold text-slate-600">API Health Status</h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-2 py-5">
        {errorStatusFirst(healthChecks).map(
          ([resource, healthCheck], index) => (
            <StatusCard
              key={resource}
              hostname={healthCheck.hostname}
              index={index}
              message={healthCheck.message}
              resourceName={resource}
              success={healthCheck.success}
              time={healthCheck.time}
            />
          )
        )}
      </div>
    </main>
  );
};

export default Home;
