/* eslint-disable react/prop-types */
// Items -> List items
// ResourceName -> people/product, its whatever type of list it will display, its the prop that small and large person list item are expecting
// ItemComponent -> Component that will be used for displaying the list
function RegularList({ items, resourceName, itemComponent: ItemComponent }) {
  return (
    <>
      {/* If resourceName = person, then {...{ [resourceName]: item }} will get changed into person={item}*/}
      {items.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </>
  );
}

export default RegularList;
