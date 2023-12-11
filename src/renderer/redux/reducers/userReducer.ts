import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserState {
  email: string | null;
  password: string | null;
  isLogin: boolean;
  userToken: string | null;
  avatar: string | null;
  username: string | null;
  userType: "Individual" | "Organization";
  organizations:[
    {
      organization_key: string | null;
      organization_username: string | null;
      organization_profile_picture: string | null;
    }
  ] | null;
  organizationKey: string | null;
}

const initialState: UserState = {
  email: null,
  password: null,
  isLogin: false,
  userToken: null,
  avatar: null,
  username: null,
  userType: "Individual",
  organizations: null,
  organizationKey: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (
      state,
      action: PayloadAction<{
        email: string;
        password: string;
        userToken: string;
      }>
    ) => {
      state.email = action.payload.email;
      state.password = action.payload.password;
      state.isLogin = true;
      state.userToken = action.payload.userToken;
    },
    logout: (state) => {
      state.email = null;
      state.password = null;
      state.isLogin = false;
      state.userToken = null;
      state.avatar = null;
      state.username = null;
      state.userType = "Individual";
      state.organizations = null;
      state.organizationKey = null;
    },
    getUserInfo: (state, action:PayloadAction<{
      avatar: string;
      username: string;
    }>) => {
      state.avatar = action.payload.avatar;
      state.username = action.payload.username;
    },
    getMyOrganizations: (state, action:PayloadAction<{
      organizations: [
        {
          organization_key: string;
          organization_username: string | null;
          organization_profile_picture: string | null;
        }
      ];
    }>) => {
      state.organizations = action.payload.organizations;
    },
    changeUserType: (state, action:PayloadAction<{
      userType: "Individual" | "Organization";
      username: string | null;
      avatar: string | null;
      organizationKey: string | null;
    }>) => {


      // find organization and drop it
      // @ts-ignore
      state.organizations = state.organizations?.filter((organization) => {
        if (organization.organization_key !== action.payload.organizationKey) {
          return organization;
        }
      })

      if (state.userType === "Individual" || action.payload.userType === "Individual") {
        state.organizations?.unshift({
          organization_key: state.userType === "Individual" ? null : state.organizationKey,
          organization_username: state.username,
          organization_profile_picture: state.avatar,
        })
      }

      if (state.userType === "Organization" && action.payload.userType === "Organization") {
        state.organizations?.push({
          organization_key: state.organizationKey,
          organization_username: state.username,
          organization_profile_picture: state.avatar,
        })
      }


      state.username = action.payload.username;
      state.avatar = action.payload.avatar;
      state.userType = action.payload.userType;
      state.organizationKey = action.payload.organizationKey;
    }
  },
});

export const {
  login,
  logout,
  getUserInfo,
  getMyOrganizations,
  changeUserType
} = userSlice.actions;

export default userSlice.reducer;
