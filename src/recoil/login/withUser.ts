import { atom, DefaultValue, selector, useSetRecoilState } from "recoil";
import { RecoilAtomKeys } from "../RecoilKeys";
import { Response, User } from "./../asynchronous/response";
import axios from "axios";
import loginState from "./atom";
axios.defaults.baseURL = "https://randomuser.me";

const Fetch = async () => {
  const result = await axios.get<Response>(`api`).catch((e) => {
    return {
      data: {
        results: [
          {
            name: {
              last: "",
              first: "",
            },
            id: {
              name: "",
              value: "",
            },
          },
        ],
      },
    };
  });
  const user = result.data.results[0];
  return user;
};

const userState = selector<User>({
  key: RecoilAtomKeys.USER_STATE,
  get: async ({ get }) => {
    const isLogin = get(loginState);
    if (isLogin === 0)
      return {
        name: {
          last: "",
          first: "",
        },
        id: {
          name: "",
          value: "",
        },
      };
    return await Fetch();
  },
  set: ({ set }, newValue) => {
    if (newValue instanceof DefaultValue) {
      set(loginState, 0);
    }
  },
  cachePolicy_UNSTABLE: {
    // Only store the most recent set of dependencies and their values
    eviction: "most-recent",
  },
});

export default userState;
