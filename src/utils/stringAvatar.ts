import { stringToColor } from "./stringToColor";

export const stringAvatar = (name: string) => {
  const splittedString = name.split(" ");
  const avatar = splittedString.length === 1
  ? `${splittedString[0][0]}`
  : `${splittedString[0][0]}${splittedString[1][0]}`;

  return {
    sx: { bgcolor: stringToColor(name) },
    children: avatar,
  };
};
