import styled from "styled-components";

export const Container = styled.div`
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
`;
export const Hero = styled.div`
  img {
    width: 150px;
  }
  h1,
  h2 {
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
  }
`;

export const Button = styled.button`
  color: ${({ theme }) => theme.colors.react};
  outline-color: ${({ theme }) => theme.colors.react};
`;
export const CounterContainer = styled.div`
  width: 125px;
  justify-content: space-around;
  align-items: center;
  display: flex;
`;
