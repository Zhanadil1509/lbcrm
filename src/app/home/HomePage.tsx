import { Label } from "flowbite-react";
import { useGetStatsDaily } from "api/home/useGetStatsDaily.ts";
import { statsHomePage } from "../../shared/constants/common.ts";

export function HomePage() {
  const { data, error, isLoading } = useGetStatsDaily();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return "An error has occurred: " + error;
  }

  return (
    <div className="grid grid-cols-5 antialiased bg-gray-50 dark:bg-gray-900">
      <div className="lg:col-span-2 sm:col-span-3 col-span-5 rounded-lg border-gray-300 dark:border-gray-600 h-96 mb-4">
        <div className="flex flex-col items-start">
          {statsHomePage.map(({ label, stats, _id }) => (
            <Label
              key={stats + _id}
              className="bg-white py-1 px-3 rounded w-full text-base flex justify-between mb-2"
            >
              <span>{label}:</span>
              <span>{data && data[stats].count}</span>
            </Label>
          ))}
        </div>
      </div>
    </div>
  );
}
