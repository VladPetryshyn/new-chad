import styled from "styled-components";

export const Input = styled.input`
  border: none;
  outline: none;
  padding: 0.6em;
  background: ${(p) => `linear-gradient(
    113.8deg,
    ${p.theme.bg}8F 31.72%,
    ${p.theme.bg}24 127.82%
  )`};
  color: ${(p) => p.theme.fg};
  backdrop-filter: blur(15px);
  border-radius: 1em;
  font-size: inherit;
  &::placeholder {
    color: ${(p) => p.theme.fg};
  }
`;
