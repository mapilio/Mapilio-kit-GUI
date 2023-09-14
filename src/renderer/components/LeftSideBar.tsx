import { useAppSelector } from "../redux/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { logout } from "../redux/reducers/userReducer";
import Logo from "../../../assets/images/mapilio.png";
import MapilioBetaLogo from "../../../assets/images/mapilioBetalogo.svg";


function LeftSideBar() {
  const { isLogin } = useAppSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <div className="w-1/3 bg-baseprimary flex items-center justify-center ">
      {!isLogin && (
        <img className="ml-48 z-10" src={Logo} alt="" />
      )}
      {isLogin && (
        <div className="absolute top-20 left-8">
          <div className="flex flex-col space-y-4">
            <Link
              to="/upload"
              className={` text-menuText font-normal text-2xl ${
                location.pathname === "/upload" && "text-blue-800"
              } transition-all hover:text-gray-700`}
            >
              Upload
            </Link>
            <Link
              to="/about"
              className={` text-menuText  font-normal text-2xl ${
                location.pathname === "/about" && "text-blue-800"
              } transition-all hover:text-gray-700`}
            >
              About
            </Link>
            <Link
              to="/help"
              className={`text-menuText font-normal text-2xl ${
                location.pathname === "/help" && "text-blue-800"
              } transition-all hover:text-gray-700`}
            >
              Help
            </Link>
          </div>
        </div>
      )}
      {isLogin && (
        <div className="absolute bottom-24 left-8 text-menuText font-normal text-xl">
          <div className="flex items-center space-x-2">
            <img
              className="rounded-full"
              alt=""
              width={40}
            />
            <button
              onClick={() => {
                dispatch(logout());
                navigate("/login");
              }}
            >
              <p>Logout</p>
            </button>
          </div>
        </div>
      )}

      <a target="_blank" href="https://mapilio.com">
        <img
          className="absolute bottom-12 left-8"
          src={MapilioBetaLogo}
          alt=""
          width={150}
        />
      </a>
      <p className="absolute text-sm bottom-4 left-8 text-secondary">
        © Mapilio. 2023. All rights reserved
      </p>
    </div>
  );
}
export default LeftSideBar;
