import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { ReactComponent as Close } from "@assets/icons/close.svg";
import { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Item = styled.a`
  border-radius: 50%;
  display: flex;
  width: 50px;
  height: 50px;
  background: linear-gradient(
    113.8deg,
    rgba(13, 13, 13, 0.56) 31.72%,
    rgba(9, 8, 8, 0.14) 127.82%
  );
  backdrop-filter: blur(100px);
  cursor: pointer;
  position: relative;
  align-items: center;
  justify-content: center;
  & + & {
    margin-left: 1em;
  }
`;
const CloseIcon = styled(Close)`
  position: absolute;
  top: 0;
  right: 0;
`;

interface Link {
  url: string;
  id: number;
}

export const BookmarksWidget = () => {
  const [links, setLinks] = useState<Link[]>([]);

  return (
    <Container>
      {links.map(({ url, id }) => (
        <Item key={id} href={url}>
          <CloseIcon />
          <Plus />
        </Item>
      ))}
      {links.length < 7 && (
        <Item>
          <Plus />
        </Item>
      )}
    </Container>
  );
};
