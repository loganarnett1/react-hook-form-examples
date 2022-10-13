import React, { useState } from "react";
import { InlineError } from "../InlineError.js";
import { useForm } from "react-hook-form";
import { CodeBlock, dracula } from "react-code-blocks";

const BasicTextForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [formOutput, setFormOutput] = useState({});

  const onSubmit = (data) => {
    setFormOutput(data);
  };

  return (
    <div className="formCard">
      <h1 className="lightText">BasicTextForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name:</label>
          <input
            autoComplete="off"
            type="text"
            {...register(`firstName`, {
              required: `First name is required`
            })}
          />
          <InlineError errors={errors} name="firstName" />
        </div>
        <div>
          <label>Last Name:</label>
          <input
            autoComplete="off"
            type="text"
            {...register(`lastName`, {
              required: `Last name is required`
            })}
          />
          <InlineError errors={errors} name="lastName" />
        </div>
        <input type="submit" value="Submit Form" />
      </form>
      <div className="codeSection">
        <p className="lightText dataLabel">Data:</p>
        <CodeBlock
          text={JSON.stringify(formOutput, null, 4)}
          language="json"
          theme={dracula}
        />
      </div>
    </div>
  );
};

export default BasicTextForm;
