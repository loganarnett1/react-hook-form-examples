import React, { useState } from "react";
import { InlineError } from "../InlineError.js";
import { useForm } from "react-hook-form";
import { CodeBlock, dracula } from "react-code-blocks";

const InputValidationForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const [formOutput, setFormOutput] = useState({});

  const onSubmit = (data) => {
    setFormOutput(data);
  };

  const customValidateField = (data) => {
    if (data.charAt(data.length - 1).toLowerCase() === `t`) {
      return true;
    }
    return `Doesn't end in "T"`;
  };

  return (
    <div className="formCard">
      <h1 className="lightText">InputValidationForm</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>Required:</label>
          <input
            autoComplete="off"
            type="text"
            {...register(`requiredField`, {
              required: `required`
            })}
          />
          <InlineError errors={errors} name="requiredField" />
        </div>

        <div>
          <label>Length 3-8 (Inclusive):</label>
          <input
            autoComplete="off"
            type="text"
            {...register(`lengthField`, {
              minLength: {
                value: 3,
                message: `Too short`
              },
              maxLength: {
                value: 8,
                message: `Too long`
              }
            })}
          />
          <InlineError errors={errors} name="lengthField" />
        </div>

        <div>
          <label>Max, Min (3-8):</label>
          <input
            autoComplete="off"
            type="number"
            {...register(`maxMinField`, {
              min: {
                value: 3,
                message: `Too low`
              },
              max: {
                value: 8,
                message: `Too high`
              }
            })}
          />
          <InlineError errors={errors} name="maxMinField" />
        </div>

        <div>
          <label>Max, Min date (Oct 10th - Oct 14th):</label>
          <input
            autoComplete="off"
            type="date"
            {...register(`maxMinDateField`, {
              min: {
                value: "2022-10-10",
                message: `Too low`
              },
              max: {
                value: "2022-10-14",
                message: `Too high`
              }
            })}
          />
          <InlineError errors={errors} name="maxMinDateField" />
        </div>

        <div>
          <label>Pattern (zip code):</label>
          <input
            autoComplete="off"
            type="text"
            {...register(`patternZip`, {
              pattern: {
                value: /^[0-9]{5}(?:-[0-9]{4})?$/,
                message: `Incorrect format`
              }
            })}
          />
          <InlineError errors={errors} name="patternZip" />
        </div>

        <div>
          <label>Validate (custom function):</label>
          <input
            autoComplete="off"
            type="text"
            {...register(`customValidateField`, {
              validate: customValidateField
            })}
          />
          <InlineError errors={errors} name="customValidateField" />
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

export default InputValidationForm;
