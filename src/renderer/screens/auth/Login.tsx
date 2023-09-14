import Button from "../../components/Button";
import Wrapper from "../../components/Wrapper";
import { login } from "../../redux/reducers/userReducer";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";

function Login() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  return (
    <Wrapper>
      <div className="p-16 ml-12 flex flex-col h-full justify-center ">
        <p className="text-3xl font-bold">Login</p>
        <div className="mt-8">
          <label htmlFor="email">Enter your email or username</label>
          <input
            id="Email"
            placeholder="Email *"
            type="text"
            className="w-full p-2 border-2 border-gray-200 rounded-md focus:outline-none focus:border-blue-500"
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
            />
            <Button
              onClick={() => {
                dispatch(
                  login({
                    email: "info@mapilio.com",
                    password: "mapiliobest!!!",
                  })
                );
                navigate("/upload");
              }}
            >
              <p className="font-medium">Login</p>
            </Button>

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
        </div>
      </div>
    </Wrapper>
  );
}
export default Login;
