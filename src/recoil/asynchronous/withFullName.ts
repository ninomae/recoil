import { selector } from "recoil";
import userState from "./atom";
import { RecoilSelectorStateKeys } from "../RecoilKeys";

const userFullNameState = selector({
  key: RecoilSelectorStateKeys.USER_FULL_NAME_STATE,
  get: ({ get }) => {
    const {
      name: { first, last },
    } = get(userState);
    return `${first} ${last}`;
  },
});

export default userFullNameState;
