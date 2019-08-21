import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CssFramework,
  Color,
  Buttons,
  Inputs,
  inputValidations,
  Segment,
  Icon,
  Avatar,
  AnimatedCheckmark,
  Modal,
  Typography,
  Loader,
  FormGroup,
  Statistic
} from "../dist/";
import { Form, Field } from "react-final-form";

import { Container, Row, Col } from "react-grid-system";

const App = () => {
  const { required, composeValidators, minLength } = inputValidations;

  return (
    <React.Fragment>
      <CssFramework />
      <Container>
        <Row>
          <Col xs={6} offset={{ xs: 3 }}>
            <Statistic size="huge" label="Stat" value={10000} format="number" />
            <Statistic
              size="xlarge"
              label="Stat"
              value={10000}
              format="number"
            />
            <Statistic
              size="large"
              label="Stat"
              value={10000}
              format="number"
            />
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
                            required
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
                       */}
                    </FormGroup>
                    <FormGroup>
                      <Field
                        name="money"
                        validate={required}
                        render={props => (
                          <Inputs.Money
                            label="Money"
                            appearance="contrast"
                            style={{ flex: 2 }}
                            required
                            {...props}
                          />
                        )}
                      />
                      <Field
                        name="decimal"
                        validate={required}
                        render={props => (
                          <Inputs.Money
                            label="Decimal"
                            appearance="contrast"
                            style={{ flex: 2 }}
                            required
                            {...props}
                          />
                        )}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Field
                        name="status"
                        validate={required}
                        render={props => (
                          <Inputs.Select
                            label="Status"
                            appearance="contrast"
                            style={{ flex: 3 }}
                            {...props}
                            options={[
                              { value: "pending", label: "Pending" },
                              { value: "placed", label: "Placed" },
                              { value: "completed", label: "Completed" }
                            ]}
                          />
                        )}
                      />
                      <Field
                        name="state"
                        validate={required}
                        render={props => (
                          <Inputs.MultiSelect
                            label="Status"
                            appearance="contrast"
                            style={{ flex: 2 }}
                            {...props}
                            options={[
                              { value: "pending", label: "Pending" },
                              { value: "placed", label: "Placed" },
                              { value: "completed", label: "Completed" }
                            ]}
                          />
                        )}
                      />
                    </FormGroup>
                  </React.Fragment>
                );
              }}
            />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
