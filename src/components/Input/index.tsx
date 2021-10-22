import styled from "styled-components";

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.6em;
  background: #${(p) => p.theme.bg};
  color: #${(p) => p.theme.fg};
  &::placeholder {
    color: #${(p) => p.theme.fg};
  }
`;
