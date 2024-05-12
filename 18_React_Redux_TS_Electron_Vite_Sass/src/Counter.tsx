import { Row, Col, Button } from "antd";

import { useAppDispatch } from "./redux/storeHooks";
import { increment, decrement } from "./redux/counterSlice";

export default function Counter() {
  const dispatch = useAppDispatch();

  function incrementCounter() {
    dispatch(increment());
  }

  function decrementCounter() {
    dispatch(decrement());
  }

  return (
    <>
      <Row>
        <Col>
          <Button type="primary" onClick={incrementCounter}>
            Increment +
          </Button>
        </Col>
        <Col>
          <Button type="primary" onClick={decrementCounter}>
            Decrement -
          </Button>
        </Col>
      </Row>
    </>
  );
}
