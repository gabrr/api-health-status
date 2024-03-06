import { calculateDelay } from "@/utils";
import { Badge, StatusBad, StatusOk } from "../atoms";
import { IHealthCheck } from "@/data/models/HealthStatus";
import clsx from "clsx";
import { timestampToReadableTime } from "@/utils/time";

const ICONS: Record<"error" | "success", JSX.Element> = {
  error: <StatusBad />,
  success: <StatusOk />,
};

interface StatusCardProps extends IHealthCheck {
  index: number;
  resourceName: string;
}

const StatusCard: React.FC<StatusCardProps> = ({
  resourceName,
  hostname,
  message,
  success,
  time,
  index,
}) => (
  <div
    style={{
      animationFillMode: "forwards",
      animationName: "fadeInDown",
      animationDuration: "0.5s",
      animationDelay: calculateDelay(index),
      opacity: 0,
    }}
    className="bg-white transform-gpu border border-gray-200 px-5 py-3 border-solid rounded-xl w-full"
    data-test="list-item"
  >
    <div className="flex justify-between items-center">
      <p className="font-semibold text-slate-600">/{resourceName}</p>

      {success && <Badge>{timestampToReadableTime(time)}</Badge>}
    </div>

    <div className="flex items-center gap-1 ">
      {ICONS[success ? "success" : "error"]}

      <p
        className={clsx(
          "truncate",
          success ? "text-green-600" : "text-red-600"
        )}
      >
        {success ? hostname : message}
      </p>
    </div>
  </div>
);

export default StatusCard;
