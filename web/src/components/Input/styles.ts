import styled, { css } from 'styled-components';

import Tooltip from '../Tooltip';

interface ContainerProps {
  isErrored: boolean;
  isFilled: boolean;
  isFocused: boolean;
}

export const Container = styled.div<ContainerProps>`
  align-items: center;
  background: #232129;
  border-radius: 10px;
  border: 2px solid #232129;
  color: #666360;
  display: flex;
  padding: 16px;
  width: 100%;

  & + div {
    margin-top: 8px;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: #c53030;
    `}

  ${props =>
    props.isFocused &&
    css`
      border-color: #ff9000;
      color: #ff9000;
    `}
  }

  ${props =>
    props.isFilled &&
    css`
      color: #ff9000;
    `}
  }

  input {
    background: transparent;
    border: none;
    color: #f4ede8;
    flex: 1;

    &::placeholder {
      color: #666360;
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Error = styled(Tooltip)`
  height: 20px;
  margin-left: 16px;

  svg {
    margin: 0;
  }

  span {
    background: #c53030;
    color: #fff;

    &::before {
      border-color: #c53030 transparent;
    }
  }
`;
