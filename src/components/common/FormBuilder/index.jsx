import React from "react";

const FormBuilder = ({ values, onChange, errors, children }) => {
  const enhancedChildren = React.Children.map(children, (child) => {
    // if not a valid React element
    if (!React.isValidElement(child)) return child;

    const name = child.props.name;

    return React.cloneElement(child, {
      value: values[name],
      onChange: (e) =>
        onChange({
          target: { name, value: e.target.value },
        }),
      error: !!errors[name],
      helperText: errors[name]
    });
  });

  return <div className="space-y-4">{enhancedChildren}</div>;
};

export default FormBuilder