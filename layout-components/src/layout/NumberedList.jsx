/* eslint-disable react/prop-types */

function NumberedList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {/* If resourceName = person, then {...{ [resourceName]: item }} will get changed into person={item}*/}
      {items.map((item, i) => (
        <>
          <h3>{i + 1}</h3>
          <ItemComponent key={i} {...{ [resourceName]: item }} />
        </>
      ))}
    </>
  );
}

export default NumberedList;
