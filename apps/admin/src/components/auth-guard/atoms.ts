import { atom, useAtom, useAtomValue } from "jotai";
import { UserRole } from "src/common/enums";

export type UserInfo = {
  userRole: UserRole | null;
  id: string | null;
  firstName: string | null;
  lastName: string | null;
  email: string | null;
  image: string | null;
};

export const userInfoAtom = atom<UserInfo>({
  userRole: null,
  id: null,
  firstName: null,
  lastName: null,
  email: null,
  image: null,
});

export const useUserInfoAtom = () => useAtom(userInfoAtom);
export const useUserInfoAtomValue = () => useAtomValue(userInfoAtom);
