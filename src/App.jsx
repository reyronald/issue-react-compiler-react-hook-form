import * as React from "react";
import {
  useForm,
  useWatch,
  useFormContext,
  FormProvider,
} from "react-hook-form";
import Headers from "./Header";
import "./styles.css";

export default function App() {
  const methods = useForm();
  const { register, handleSubmit, watch, control } = methods;
  const onSubmit = (data) => console.log(data);

  const test = useWatch({ control, name: "test" });

  return (
    <div>
      <Headers description="Performant, flexible and extensible forms with easy-to-use validation." />

      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input {...register("test")} placeholder="Test field" />

          <div>useForm.watch is {watch("test")}</div>

          <div>useForm.useWatch value is {test}</div>

          <Component />

          <input type="submit" />
        </form>
      </FormProvider>
    </div>
  );
}

function Component() {
  const { watch, control } = useFormContext();

  const test = useWatch({ control, name: "test" });

  return (
    <>
      <div>useFormContext.watch is {watch("test")}</div>

      <div>useForm.useWatch value is {test}</div>
    </>
  );
}
