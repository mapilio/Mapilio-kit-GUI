import React, { useEffect } from 'react';
import { useAppSelector } from "../redux/hooks";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { logout } from '../redux/reducers/userReducer';
import Logo from "../../../assets/images/mapilio.png";
import MapilioBetaLogo from "../../../assets/images/mapilioBetalogo.svg";
import { fetchMyOrganizations, getUserDetails } from '../helper/fetchFunctions';


function LeftSideBar() {
  const { isLogin, avatar, username, userToken, organizations } = useAppSelector((state) => state.user);
  const location = useLocation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (isLogin && !avatar) {
      getUserDetails();
    }
  }, []);


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
              className={`text-menuText font-normal text-2xl ${
                location.pathname === "/upload" && "text-blue-800"
              } transition-all hover:text-gray-700`}
            >
              Upload
            </Link>
            <Link
              to="/about"
              className={`text-menuText  font-normal text-2xl ${
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


            <div
              className="dropdown dropdown-top"
              onClick={fetchMyOrganizations}

            >
              <div tabIndex={0} role="button" className="m-1 flex items-center gap-x-4">
                <img
                  className="rounded-full"
                  alt=""
                  width={40}
                  src={avatar?? "https://www.gravatar.com/avatar"}
                />

                {/* up icon */}
                <svg className="h-4 w-4 text-black"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
                </svg>
              </div>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow rounded-md bg-base-100 w-52">
                <li>
                  <div className="flex items-center">
                    <img
                      className="rounded-full"
                      alt=""
                      width={40}
                      src={avatar?? "https://www.gravatar.com/avatar"}
                    />
                    <span className="ml-2">{username}</span>
                  </div>
                </li>
                <li
                  onClick={() => {
                    dispatch(logout());
                    navigate("/login");
                  }}
                ><a>Logout</a></li>
              </ul>
            </div>
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
