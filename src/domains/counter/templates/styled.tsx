import s from 'styled-components';
import { Container as Hero } from '../atoms/Hero/styled';

export const Container = s.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.bg};
  font-family: ${({ theme }) => theme.font};
  color: white;
  ${Hero} {
    margin-bottom: 50px;
  }
`;