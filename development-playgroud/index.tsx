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
    <React.Fragment>
      <CssFramework />
      <Segment>
        <Form
          onSubmit={values => alert(JSON.stringify(values))}
          render={() => {
            return (
              <React.Fragment>
                <Field
                  name="name"
                  render={props => <Inputs.Password {...props} />}
                  validate={composeValidators(required, minLength(2))}
                />
                <Icon.ArrowDown />
                <Avatar />
                <Buttons.Primary>Push Me</Buttons.Primary>
              </React.Fragment>
            );
          }}
        />
      </Segment>
    </React.Fragment>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
