import useConsoleLog from "./useConsoleLog";
import useData from "./useData";

const Component = () => {
  const data = useData();

  useConsoleLog(data);

  return <p>{data?.map((item) => item.id)}</p>;
};

export default Component;
