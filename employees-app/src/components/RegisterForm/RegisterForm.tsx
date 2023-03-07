import React from "react";
import { Card, Typography, TextField, Button } from "@mui/material";
import { auth } from "../../helpers/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useForm } from "react-hook-form";
import { RegisterFormData } from "../../helpers/interfaces";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm<RegisterFormData>();

  const submitHandler = ({ email, password, password2 }: RegisterFormData) => {
    if (password === password2) {
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => console.log("Success"))
        .catch((err) => {
          console.error(err.message);
        });
    } else {
      alert("Passwords are different");
    }
  };

  return (
    <Card
      sx={{
        mt: "1rem",
        display: "block",
        mx: "auto",
        p: ".5rem",
        width: "95%",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={handleSubmit(submitHandler)}
      >
        <Typography align="center" variant="h2" sx={{ fontSize: "1.5 rem" }}>
          Register new account
        </Typography>
        <TextField
          type="email"
          placeholder="email"
          sx={{ display: "block", my: ".5rem", mx: "auto" }}
          {...register("email", { required: true })}
        />
        <TextField
          type="password"
          placeholder="password"
          sx={{ display: "block", my: ".5rem", mx: "auto" }}
          {...register("password", { required: true })}
        />
        <TextField
          type="passsword"
          placeholder="repeat password"
          sx={{ display: "block", my: ".5rem", mx: "auto" }}
          {...register("password2", { required: true })}
        />
        <Button
          variant="contained"
          type="submit"
          sx={{ display: "block", mx: "auto" }}
        >
          Register
        </Button>
      </form>
    </Card>
  );
};

export default RegisterForm;

// skończyłem register form, zostało dodać do App, do interfaces
