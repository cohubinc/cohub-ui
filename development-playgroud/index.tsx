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
  Loader
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
      <Loader />
      <Form
        onSubmit={values => alert(JSON.stringify(values))}
        render={() => {
          return (
            <React.Fragment>
              <div>
                <Field
                  name="text"
                  validate={required}
                  render={props => (
                    <Inputs.Text appearance="contrast" {...props} />
                  )}
                />
              </div>
              <div>
                <Field
                  name="text"
                  validate={required}
                  render={props => (
                    <Inputs.Text
                      label="Test"
                      appearance="contrast"
                      {...props}
                    />
                  )}
                />
              </div>
            </React.Fragment>
          );
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
