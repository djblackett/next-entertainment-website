import {
  Heading,
  Input,
  Button,
  Text,
  Link,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, { useState, useEffect } from "react";
import { LoginHeading, LoginButton, LoginInput } from "./LoginForm";
import { useRouter } from "next/router";
import LoginInputCustom from "./LoginInput";

function SignupForm() {
  const router = useRouter();

  const [passwordValid, setPasswordValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [repeatedPasswordValid, setRepeatedPasswordValid] = useState(true);
  const [password, setPassword] = useState("");
  const [repeatedPassword, setRepeatedPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (password !== "") {
      setPasswordValid(true);
    }

    if (username !== "") {
      setUsernameValid(true);
    }

    if (repeatedPassword !== "") {
      setRepeatedPasswordValid(true);
    }
  }, [password, username, repeatedPassword]);

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleRepeatedPasswordChange = (e) => {
    setRepeatedPassword(e.target.value);
  };

  const handleClick = () => {
    if (!password) {
      setPasswordValid(false);
    }

    if (!username) {
      setUsernameValid(false);
    }

    if (!repeatedPassword || repeatedPassword !== password) {
      setRepeatedPasswordValid(false);
    }

    // only redirect if all fields filled
    if (
      username !== "" &&
      password !== "" &&
      repeatedPassword !== "" &&
      repeatedPassword === password
    ) {
      router.push("/");
    }
  };

  return (
    <>
      <LoginHeading alignSelf="flex-start" color="white">
        Sign Up
      </LoginHeading>
      <LoginInputCustom
        handleChange={handleUsernameChange}
        placeholder="Email Address"
        valid={usernameValid}
        errorText={"Can't be empty"}
      ></LoginInputCustom>
      <LoginInputCustom
        placeholder={"Password"}
        type={"password"}
        valid={passwordValid}
        errorText={"Can't be empty"}
        handleChange={handlePasswordChange}
      />
      <LoginInputCustom
        placeholder="Repeat password"
        type={"password"}
        handleChange={handleRepeatedPasswordChange}
        valid={repeatedPasswordValid}
        errorText={
          repeatedPassword.length > 0
            ? "Passwords don't match"
            : "Can't be empty"
        }
      ></LoginInputCustom>
      <LoginButton
        bg="#FC4747"
        color="white"
        w="100%"
        h="12"
        fontWeight={300}
        onClick={handleClick}
      >
        Create an account
      </LoginButton>
      <Text color="white" fontWeight="300">
        Already have an account?{" "}
        <Link href="/login" color="red">
          {" "}
          Login
        </Link>
      </Text>
    </>
  );
}

export default SignupForm;
