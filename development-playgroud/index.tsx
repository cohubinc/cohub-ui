import * as React from "react";
import * as ReactDOM from "react-dom";
import { Container, Row, Col } from "react-grid-system";
import { CssFramework } from "../dist";
import DevSandbox from "./DevSandbox";

const App = () => {
  return (
    <React.Fragment>
      <CssFramework />
      <Container>
        <Row>
          <Col xs={12}>
            <DevSandbox />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
