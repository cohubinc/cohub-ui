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
  Typography
} from "../dist/";
import { Form, Field } from "react-final-form";

const App = () => {
  const { required, composeValidators, minLength } = InputValidations;

  return (
    <div
      style={
        {
          // maxWidth: "500px"
          // display: "flex",
          // justifyContent: "center",
          // alignItems: "center"
        }
      }
    >
      <CssFramework />
      <Modal open size="large" title="New Thing">
        <Typography>test</Typography>
      </Modal>
      {/* <Form
        onSubmit={values => alert(JSON.stringify(values))}
        render={() => {
          return (
            <React.Fragment>
              <AnimatedCheckmark color={Color.red500} size={100} />
              <div>
                <Field
                  name="states"
                  validate={required}
                  render={props => (
                    <Inputs.Password
                      label="Password"
                      appearance="contrast"
                      {...props}
                    />
                  )}
                />
              </div>
              <br />
              <Field
                name="states"
                validate={required}
                render={props => (
                  <Inputs.Text label="Text" appearance="contrast" {...props} />
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
