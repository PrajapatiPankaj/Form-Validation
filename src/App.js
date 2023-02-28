import React from "react";
import { Form, Button } from "semantic-ui-react";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  const handleRegistration = (data) => console.log(data);

  return (
    <div>
      <Form onSubmit={handleSubmit(handleRegistration)}>
        <Form.Field>
          <label>First Name</label>
          <input
            name="firstName"
            placeholder="First Name"
            type="text"
            {...register("firstName", { required: true, maxLength: 10 })}
          />
          {errors.firstName && <p>Please check the First Name</p>}
        </Form.Field>
        <Form.Field>
          <label>Last Name</label>
          <input
            name="lastName"
            placeholder="Last Name"
            type="text"
            {...register("lastName")}
          />
          {errors.firstName && <p>Please check the Last Name</p>}
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email"
            name="email"
            type="email"
            {...register("email", {
              required: true,
              pattern:
                /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.firstName && <p>Please Enter Valid Email</p>}
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input
            placeholder="Password"
            name="password"
            type="password"
            {...register("password", {
              required: true,
              pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,15}$/,
            })}
          />
          {errors.password && <p>Please check the Password</p>}
        </Form.Field>

        <p>
          <b>NOTE:</b>
          Password must contain one Capital Letter, one Small Letter, and the
          number of characters should be between 6 to 15
        </p>
        <Button type="submit" onSubmit={handleSubmit(onSubmit)}>
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default App;
