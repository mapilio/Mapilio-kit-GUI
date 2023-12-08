import React, { FormEvent } from 'react';
import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import { login } from '../../redux/reducers/userReducer';
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from '../../redux/hooks';
import { useState } from 'react';
import { eel } from "../../eel.js";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [alert, setAlert] = useState('')


  const submitForm = async (e:FormEvent) => {
    e.preventDefault();

    const res = await eel.check_authenticate(email, password)()

    if (res.status){
      dispatch(
        login({
          email: email,
          password: password,
          userToken: res.token
        })
      );
      navigate("/upload");
    } else {
      setAlert(res.message)
    }
  }

  return (
    <Wrapper>
      <div className="p-16 ml-12 flex flex-col h-full justify-center ">
        <p className="text-3xl font-bold">Login</p>
        <form onSubmit={submitForm} className="mt-8">
          <label htmlFor="email">Enter your email or username</label>
          <input
            id="Email"
            placeholder="Email *"
            type="text"
            className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
            onChange={(e) => setEmail(e.target.value)}
          />

          <div className="mt-4">
            <label htmlFor="password">Enter your password</label>
            <a
              target="_blank"
              href="https://mapilio.com"
              className="float-right text-sm text-primary"
            >
              Forgot Password
            </a>
            <input
              id="password"
              placeholder="Password *"
              type="password"
              className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button type={"submit"}>
              <p className="font-medium">Login</p>
            </Button>

            {alert && <div className="mt-4 text-red-500">{alert}</div>}

            <div className="mt-4">
              <p>
                Don't have an account yet?{" "}
                <a
                  target="_blank"
                  href="https://mapilio.com"
                  className="text-primary"
                >
                  Sign up here
                </a>
                .
              </p>
            </div>
          </div>
        </form>
      </div>
    </Wrapper>
  );
}
export default Login;
