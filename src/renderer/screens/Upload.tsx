import React from 'react';
import Wrapper from "../components/Wrapper";
import UploadIcon from "../../../assets/images/uploadIcon.svg";
import { changeUserType } from '../redux/reducers/userReducer';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchMyOrganizations } from '../helper/fetchFunctions';
import { eel } from '../eel';

function Upload() {
  const { avatar, username, userType, organizations,organizationKey } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();


  // Upload data
  const onClickHandler = async () => {
    const relativePath = await eel.get_absolute_path()();
    eel.image_upload(relativePath)();
  }



  return (
    <Wrapper>
      <div className="flex flex-col p-10 justify-start h-full w-full">
        <p className="text-3xl font-bold">Mapilio Kit Uploader</p>
        <p className="text-md text-menuText mt-4">
          Image GPS and capture time are minimally required to upload images to
          Mapilio.
        </p>

        <div className="w-full text-center my-6">

          <div
            className="dropdown"
            onClick={fetchMyOrganizations}
          >
            <div tabIndex={0} role="button" className="m-1 flex items-center gap-x-4">
              <img
                className="rounded-full"
                alt=""
                width={40}
                src={avatar?? "https://www.gravatar.com/avatar"}
              />

              <div className="flex flex-col items-start">
                <span className="text-md">{username}</span>
                <span className="text-sm text-primary">{userType}</span>
              </div>

              {/* down icon */}
              <svg className="h-4 w-4 ml-10 text-black rotate-180"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 15l7-7 7 7"/>
              </svg>

            </div>
            <ul tabIndex={0} className={`dropdown-content z-[1] menu shadow rounded-md bg-base-100 w-full mt-4 gap-y-2 max-h-64 flex-nowrap overflow-auto ${!organizations && 'hidden'}`}>

              {organizations?.map((org) => (
                <li
                  onClick={()=>{
                    dispatch(
                      changeUserType({
                        avatar: org.organization_profile_picture,
                        username: org.organization_username,
                        userType: org.organization_key ? "Organization" : "Individual",
                        organizationKey: org.organization_key,
                      })
                    )
                  }}
                >
                  <div className="flex items-center px-2">
                    <img
                      className="rounded-full"
                      alt=""
                      width={40}
                      src={org.organization_profile_picture?? "https://www.gravatar.com/avatar"}
                    />
                    <span className="ml-2">{org.organization_username}</span>
                  </div>
                </li>
              ))}

            </ul>
          </div>

        </div>

        {/* TODO : this section is selection of video or image */}

        <div
          className="bg-white w-full h-[190px] mt-4 border-dashed border-2 border-gray-300 rounded-lg flex flex-col justify-center items-center"
          onClick={onClickHandler}
        >
          <img
            src={UploadIcon}
            alt="upload"
            className="w-18 h-18"
          />

          <p className="text-md text-menuText mt-4">
            Drag & Drop files or
            <span
              className="text-blue-600 cursor-pointer ml-1"
            >
              Browse
            </span>
          </p>
          <p className="text-sm text-secondary mt-4">
            Input video path you want to process
          </p>
        </div>
      </div>
    </Wrapper>
  );
}
export default Upload;
