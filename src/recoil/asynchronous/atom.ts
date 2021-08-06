import { atom, selector } from "recoil";
import { RecoilAtomKeys, RecoilSelectorStateKeys } from "../RecoilKeys";
import { User } from "./response";

const withApi = selector<User>({
  key: RecoilSelectorStateKeys.USER_ASYNC_STATE,
  get: async (_) => {
    const response = await fetch("https://randomuser.me/api/");
    const { results } = await response.json();
    return results[0];
  },
});

const userState = atom<User>({
  key: RecoilAtomKeys.USER_STATE,
  default: withApi,
});

export default userState;
