import styled from "styled-components";

export const Wallpapers = styled.img`
  width: 100vw;
  height: 100vh;
  position: fixed;
  z-index: -1;
  background: ${(props) => props.theme.bg};
`;
