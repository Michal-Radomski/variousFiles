//* https://medium.com/@tweiss747/getting-started-with-redux-react-typescript-electron-using-vite-ffed63074602

import { useAppSelector } from "./redux/storeHooks";
import Counter from "./Counter";
import { Row, Col } from "antd";

function App() {
  const count = useAppSelector((state) => state.counter.value);
  return (
    <Row justify={"center"}>
      <Col>
        <Row justify={"center"}>
          <Col>
            <h1>The count is {count} </h1>
          </Col>
        </Row>
        <Row justify={"center"}>
          <Col>
            <Counter />
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default App;
