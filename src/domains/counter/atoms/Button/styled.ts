import s from "styled-components";

export const Button = s.button`
  color: ${({ theme }) => theme.colors.react};
  outline-color: ${({ theme }) => theme.colors.react}
`;
