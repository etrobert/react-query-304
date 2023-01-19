const hydrateData = <T>(data: T): T => {
  // Costly operation
  console.log("Hydrating");
  Array(50).map((n) => Math.sqrt(n));
  return data;
};

export default hydrateData;
