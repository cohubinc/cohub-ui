import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  CssFramework,
  Color,
  Buttons,
  Inputs,
  InputValidations
} from "../dist/";
import { Form, Field } from "react-final-form";

const App = () => {
  const { required, composeValidators, minLength } = InputValidations;

  return (
    <div className="flex justify-center items-center h-100">
      <CssFramework />
      <Buttons.FloatingAction
        icon={"back"}
        iconColor={Color.green500}
        size={50}
        backgroundColor={Color.green100}
        elevation={24}
        type="submit"
      />
      <Form
        onSubmit={values => alert(JSON.stringify(values))}
        render={() => {
          return (
            <Field
              name="name"
              render={props => <Inputs.Text {...props} />}
              validate={composeValidators(required, minLength(2))}
            />
          );
        }}
      />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
