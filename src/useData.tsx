import { useEffect, useMemo, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const useData = () => {
  const { data } = useQuery({
    queryKey: ["localhost:8000"],
    queryFn: async () => {
      const response = await fetch(
        "https://63c82dec5c0760f69ac701ee.mockapi.io/events"
      );
      console.log("Received:", response);
      return response.json();
    },
  });

  const hydratedData = useMemo(() => {
    console.log("Hydrating");
    Array(5).map((n) => Math.sqrt(n));
    return data;
  }, [data]);

  return hydratedData;
};
export default useData;
