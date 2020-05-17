import {
  defaultBorder,
  searchMovieTextColor,
  defaultBackgroundColor,
} from 'styles/common';
import styled from '@emotion/styled';

export const Container = styled.div`
  border-radius: ${defaultBorder};
  overflow: hidden;
`;

export const Content = styled.div`
  position: relative;
  & img {
    width: 100%;
    display: block;
  }
`;

export const Menu = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  display: flex;
  flex-direction: column;
`;

export const MenuContent = styled.div`
  margin: auto auto 7px 7px;
`;

const MovieText = styled.div`
  color: ${searchMovieTextColor};
  font-size: 12px;
  text-shadow: 1px 1px 1px ${defaultBackgroundColor};
`;

export const MovieType = styled(MovieText)`
  color: ${(props) => props.color};
`;

export const MovieLocation = styled(MovieText)``;

export const MovieTitle = styled(MovieText)`
  font-size: 13px;
`;

export const MovieTime = styled(MovieText)`
  font-size: 16px;
`;
