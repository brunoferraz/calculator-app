import { atom } from "recoil";
export const screenValAtom = atom({
  key: 'screenValAtom', // unique ID (with respect to other atoms/selectors)
  default: '0', // default value (aka initial value)
});