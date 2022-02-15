import { atom } from "recoil";
export const lilscreenValAtom = atom({
  key: 'lilscreenValAtom', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});