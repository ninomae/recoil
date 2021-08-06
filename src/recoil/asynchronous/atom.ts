import { atom, selector } from "recoil";
import { RecoilAtomKeys, RecoilSelectorStateKeys } from "../RecoilKeys";
import { Response, User } from "./response";

const userDefault: User = {
  name: { first: "", last: "" },
};

const withApi = selector<User>({
  key: RecoilSelectorStateKeys.USER_ASYNC_STATE,
  get: async (_) => {
    const response = await fetch("https://randomuser.me/api/");
    const { data } = await response.json();
    return (data as Response).results[0];
  },
});

const userState = atom<User>({
  key: RecoilAtomKeys.USER_STATE,
  default: withApi,
});

export default userState;
