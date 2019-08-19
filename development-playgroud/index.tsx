import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CssFramework,
  Color,
  Buttons,
  Inputs,
  InputValidations,
  Segment,
  Icon,
  Avatar,
  AnimatedCheckmark,
  Modal,
  Typography,
  Loader,
  FormGroup
} from "../dist/";
import { Form, Field } from "react-final-form";

import { Container, Row, Col } from "react-grid-system";

const App = () => {
  const { required, composeValidators, minLength } = InputValidations;

  return (
    <div
      style={{
        maxWidth: "500px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
    >
      <CssFramework />
      <Container>
        <Row>
          <Col xs={6} offset={{ xs: 3 }}>
            <Form
              onSubmit={values => alert(JSON.stringify(values))}
              render={() => {
                return (
                  <React.Fragment>
                    <FormGroup direction="horizontal">
                      <Field
                        name="text"
                        validate={required}
                        render={props => (
                          <Inputs.Money
                            style={{ flex: 1 }}
                            appearance="contrast"
                            {...props}
                          />
                        )}
                      />
                      <Field
                        name="text"
                        validate={required}
                        render={props => (
                          <Inputs.Text
                            label="Test"
                            style={{ flex: 1 }}
                            appearance="contrast"
                            {...props}
                          />
                        )}
                      />
                      <Field
                        name="text"
                        validate={required}
                        render={props => (
                          <Inputs.Text
                            label="Test"
                            appearance="contrast"
                            style={{ flex: 2 }}
                            {...props}
                          />
                        )}
                      />
                      {/* <Field
                        name="password"
                        validate={required}
                        render={props => (
                          <Inputs.Password
                            label="Password"
                            appearance="contrast"
                            {...props}
                          />
                        )}
                      />
                      <Field
                        name="status"
                        validate={required}
                        render={props => (
                          <Inputs.MultiSelect
                            label="Status"
                            appearance="contrast"
                            {...props}
                            options={[
                              { value: "pending", label: "Pending" },
                              { value: "placed", label: "Placed" },
                              { value: "completed", label: "Completed" }
                            ]}
                          />
                        )}
                      /> */}
                    </FormGroup>
                  </React.Fragment>
                );
              }}
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
