import s from 'styled-components';

export const Wrap = s.main`
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
  img {
    width: 150px;
  }
  h1, h2 {
    font-weight: 400;
  }
  h1 {
    margin-top: 10px;
    font-size: 36px;
    margin-bottom: 0;
  }
  h2 {
    margin-top: 3px;
    font-size: 16px;
    margin-bottom: 50px;
  }
  button {
    color: ${({ theme }) => theme.colors.react};
    outline-color: ${({ theme }) => theme.colors.react};
`;
export const Counters = s.div`
  width: 125px;
  justify-content: space-around;
  align-items: center;
  display: flex;
`;