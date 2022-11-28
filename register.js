

import React from "react";
import { useForm } from "react-hook-form";
import "./register.css";

function App() {
  const {register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);
  
  return (
    <>
      <p className="title">Registration Form</p>

      <form className="App" onSubmit={handleSubmit(onSubmit)}>
        <input type="text" placeholder="User Id "{...register("name")} />
        <input type="email" placeholder="Email" {...register("email", { required: true })} />
        {errors.email && <span style={{ color: "red" }}>
        *Email* is mandatory </span>}
        <input type="password" placeholder="password" {...register("password")} />
        <input type={"submit"} style={{ backgroundColor: "#a1eafb" }} />
      </form>
    </>
  );
}
export default App;