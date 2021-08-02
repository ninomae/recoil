import { selector } from "recoil";
import textState from "./atom";
import { RecoilSelectorStateKeys } from "../RecoilKeys";

const charCountState = selector({
  key: RecoilSelectorStateKeys.CHARACTER_COUNT_STATE, // unique ID (with respect to other atoms/selectors) Atomから取得したものを加工する
  get: ({ get }) => {
    const text = get(textState);

    return text.length;
  },
});

export default charCountState;
