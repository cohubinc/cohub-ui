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
  Avatar
} from "../dist/";
import { Form, Field } from "react-final-form";

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
      <Icon.Add />
      {/* <Form
        onSubmit={values => alert(JSON.stringify(values))}
        render={() => {
          return (
            <React.Fragment>
              <Field
                name="otp_enabled"
                render={props => (
                  <Inputs.Toggle
                    label="2FA Enabled"
                    labelPosition="top"
                    {...props}
                  />
                )}
              />
              <Field
                name="states"
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
              />
              <Field
                name="states"
                render={props => (
                  <Inputs.Text
                    label="Status"
                    appearance="contrast"
                    {...props}
                  />
                )}
              />
            </React.Fragment>
          );
        }}
      /> */}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
