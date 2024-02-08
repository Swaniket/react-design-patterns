/* eslint-disable react/prop-types */
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Pane = styled.div`
  flex: ${(props) => props.weight};
`;

// left -> The component that will show in the left hand side
// right -> The component that will show in the right hand side
// leftWeight, rightWeight -> How much space the components will take in the screen
// function Splitscreen({
//   left: Left,
//   right: Right,
//   leftWeight = 1,
//   rightWeight = 1,
// }) {
//   return (
//     <Container>
//       <Pane weight={leftWeight}>
//         <Left />
//       </Pane>
//       <Pane weight={rightWeight}>
//         <Right />
//       </Pane>
//     </Container>
//   );
// }

// A cleaner way is to pass the comonents via children
function Splitscreen({ children, leftWeight = 1, rightWeight = 1 }) {
  const [left, right] = children;

  return (
    <Container>
      <Pane weight={leftWeight}>{left}</Pane>
      <Pane weight={rightWeight}>{right}</Pane>
    </Container>
  );
}

export default Splitscreen;
