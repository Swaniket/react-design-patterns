/* eslint-disable react/prop-types */

function SmallPersonListItem({ person }) {
  const { name, age } = person;

  return (
    <p>
      Name: {name}, Age: {age} years
    </p>
  );
}

export default SmallPersonListItem;
