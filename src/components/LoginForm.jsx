import { Heading, Input, Button, Text, Link } from "@chakra-ui/react";
import styled from "@emotion/styled";
import React, {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import LoginInputCustom from "./LoginInput";
import { useDispatch } from "react-redux";
import {authenticate} from '../features/userSlice';

export const LoginInput = styled(Input)`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid;
  border-radius: 0;
  width: 100%;
  font-weight: 300;
  outline: none;
  cursor: pointer;
  caret-color: #FC4747;
  padding-bottom: 1rem;

  :focus {
    outline: 0 !important;
    
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.5) !important;
  }
`

export const LoginHeading = styled(Heading)`
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  font-weight: 300;
`

export const LoginButton = styled(Button)`
  &:hover {
    background: white;
    color: black;
  }
`

function LoginForm() {

  const router = useRouter();
  const dispatch = useDispatch();
  const [passwordValid, setPasswordValid] = useState(true);
  const [usernameValid, setUsernameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (password !== "") {
      setPasswordValid(true);
    }

    if (username !== "") {
      setUsernameValid(true);
    }
  }, [password, username])

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handleClick = () => { 
  
    if (!password)  {
      setPasswordValid(false);
    } 
    
    if (!username) {
      setUsernameValid(false);
    }
    
    if (username !== "" && password !== ""){
      dispatch(authenticate());
      router.push("/");
    }
  }

  return (
    <>
      <LoginHeading alignSelf="flex-start" color="white">
        Login
      </LoginHeading>
      <LoginInputCustom placeholder="Email Address" valid={usernameValid} errorText={"Can't be empty"} value={username} handleChange={handleUsernameChange}></LoginInputCustom>
      <LoginInputCustom placeholder={"Password"} type={"password"} valid={passwordValid} errorText={"Can't be empty"} handleChange={handlePasswordChange} />
      <LoginButton bg="#FC4747" color="white" w="100%" h="12" fontWeight={300} onClick={handleClick} > 
        Login to your account 
      </LoginButton>
      <Text color="white" fontWeight="300">
        Don't have an account? <Link href="/sign-up" color="red"> Sign up</Link>
      </Text>
    </>
  );
}

export default LoginForm;
