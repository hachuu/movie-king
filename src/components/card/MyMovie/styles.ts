import styled from '@emotion/styled';
import { ButtonColor } from 'styles/color';
import { defaultBorder } from 'styles/common';

export const Container = styled.div`
  border-radius: ${defaultBorder};
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  & img {
    width: 100%;
    height: 436px;
    display: block;
  }
`;

export const Ranking = styled.div`
  font-size: 55px;
  color: white;
  text-shadow: 1px 1px 1px gray;
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const Menu = styled.div`
  position: absolute;
  width: 100%;
  height: 68px;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const MenuContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Title = styled.div`
  color: white;
  font-size: 18px;
  margin: 15px auto 3px 20px;
`;

export const Rating = styled.div`
  color: white;
  opacity: 0.6;
  font-size: 14px;
  margin: 0 auto auto 20px;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  background-color: ${ButtonColor.RESERVATION};
  display: flex;
  width: 77px;
  height: 30px;
  top: 50%;
  transform: translateY(-50%);
  border-radius: ${defaultBorder};
  right: 20px;
  & div {
    width: 100%;
    text-align: center;
    margin-top: 7px;
  }
`;
