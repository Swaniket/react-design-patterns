/* eslint-disable react/prop-types */
const isObject = (x) => {
  console.log("Inside isObj");
  return typeof x === "object" && x !== null;
};

function RecursiveComponent({ data }) {
  // Base Case condition
  if (!isObject(data)) {
    return <li>{data}</li>;
  }

  const pairs = Object.entries(data);

  return (
    <>
      {pairs.map(([key, value]) => (
        <li key={key}>
          {key}:
          <ul>
            <RecursiveComponent data={value} />
          </ul>
        </li>
      ))}
    </>
  );
}

export default RecursiveComponent;
