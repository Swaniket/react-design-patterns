/* eslint-disable react/prop-types */
// import Splitscreen from "./layout/SplitScreen";
// import LeftHandComponent from "./components/split-screen/LeftHandComponent";
// import RightHandComponent from "./components/split-screen/RightHandComponent";

import RegularList from "./layout/RegularList";
import { peopleListData, productListData } from "./data/listData";
import SmallPersonListItem from "./components/list-and-list-items/people/SmallPersonListItem";
// import LargePersonListItem from "./components/list-and-list-items/people/LargePersonListItem";
// import LargeProductListItem from "./components/list-and-list-items/product/LargeProductListItem";
// import NumberedList from "./layout/NumberedList";
import Modal from "./layout/Modal";

function App() {
  return (
    <>
      {/* Driver Code for Split screen */}
      {/* Components passed as props */}
      {/* <Splitscreen
        left={LeftHandComponent}
        right={RightHandComponent}
        leftWeight={1}
        rightWeight={3}
      /> */}

      {/* Components passed as children */}
      {/* Another advantage of this approch is that we can pass props to our components */}
      {/* <Splitscreen leftWeight={1} rightWeight={3}>
        <LeftHandComponent name="Swaniket" />
        <RightHandComponent message="This is working" />
      </Splitscreen> */}

      {/* Driver code for lists */}
      {/* <RegularList
        items={peopleListData}
        resourceName="person"
        itemComponent={SmallPersonListItem}
      />
      <RegularList
        items={peopleListData}
        resourceName="person"
        itemComponent={LargePersonListItem}
      />
      <NumberedList
        items={productListData}
        resourceName="product"
        itemComponent={LargeProductListItem}
      /> */}

      {/* Driver code for Modals */}
      <Modal>
        <RegularList
          items={peopleListData}
          resourceName="person"
          itemComponent={SmallPersonListItem}
        />
      </Modal>
    </>
  );
}

export default App;
