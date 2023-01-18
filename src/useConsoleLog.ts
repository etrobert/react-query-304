import { useEffect } from "react";

function useConsoleLog(...data: unknown[]) {
  useEffect(() => console.log(...data), data);
}

export default useConsoleLog;
