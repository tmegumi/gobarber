import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
  background: #ff9000;
  border-radius: 10px;
  border: 0;
  color: #312e38;
  font-weight: 500;
  height: 56px;
  margin-top: 16px;
  padding: 0 16px;
  transition: background-color 0.2s;
  width: 100%;

  &:hover {
    background: ${shade(0.2, '#ff9000')};
  }
`;
