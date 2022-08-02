import styled, { css } from "styled-components/native";
export const Container = styled.View`
  ${({ theme }) => css`
    flex: 1;
    background-color: ${theme.colors.backgroundWater};
  `}
`;
export const Content = styled.View`
  ${({ theme }) => css`
    height: 70%;
    justify-content: center;
    align-items: center;
    display: flex;
    background-color: ${theme.colors.backgroundWater};
  `}
`;
export const Footer = styled.View`
  ${({ theme }) => css`
    border-radius: 20px 20px 0px 0px;
    flex: 1;
    height: 30%;
    justify-content: center;
    align-items: center;
    display: flex;
    padding: 20px;
    background-color: ${theme.colors.background};
  `}
`;
export const Title = styled.Text`
  ${({ theme }) => css`
    font-size: 40px;
    margin-top: 20px;
    color: ${theme.colors.text_white};
  `}
`;
export const SubTitle = styled.Text`
  ${({ theme }) => css`
    font-size: 16px;
    margin-top: 20px;
    color: ${theme.colors.text_white};
  `}
`;
export const WrapperAnimation = styled.View`
  ${({ theme }) => css`
    width: 200px;
    height: 300px;
    border-radius: 100px;
    justify-content: center;
    align-items: center;
    background-color: ${theme.colors.types.water};
    transform: rotate(30deg);
  `}
`;
export const WrapperImage = styled.View`
  ${({ theme }) => css`
    transform: rotate(-30deg);
  `}
`;
