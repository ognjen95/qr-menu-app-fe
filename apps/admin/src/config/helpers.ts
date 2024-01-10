import { IdentityTokenFields } from "./@types/next-auth";

export const extractUserName = ({
  given_name,
  family_name,
  name,
  nickname,
}: IdentityTokenFields) => {
  if (given_name && family_name) return `${given_name} ${family_name}`;

  return name || nickname || "";
};
