import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";

type Something = {
  id: string;
};

const hydrateData = <T,>(data: T): T => {
  // Costly operation
  console.log("Hydrating");
  Array(50).map((n) => Math.sqrt(n));
  return data;
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
