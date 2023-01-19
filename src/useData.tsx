import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import memoize from "lodash/memoize";
import hydrateData from "./hydrateData";

type Something = {
  id: string;
};

const memoizedHydrateData = memoize(hydrateData);

const useData = () => {
  const { data } = useQuery<Something[]>({
    queryKey: ["localhost:8000"],
    queryFn: async () => {
      const response = await fetch(
        "https://63c82dec5c0760f69ac701ee.mockapi.io/events"
      );
      console.log("Received:", response);
      return response.json();
    },
  });

  const hydratedData = useMemo(() => memoizedHydrateData(data), [data]);

  return hydratedData;
};
export default useData;
