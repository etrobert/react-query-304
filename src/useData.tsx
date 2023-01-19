import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import hydrateData from "./hydrateData";

type Something = {
  id: string;
};

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

  const hydratedData = useMemo(() => hydrateData(data), [data]);

  return hydratedData;
};
export default useData;
