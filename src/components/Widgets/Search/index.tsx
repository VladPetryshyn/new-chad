import { ReactComponent as Search } from "@assets/icons/search.svg";
import { ReactComponent as Duck } from "@assets/icons/duckduckgo.svg";
import styled from "styled-components";

const Input = styled.input`
  width: 100%;
  height: 2.5em;
  background: linear-gradient(
    113.8deg,
    rgba(5, 5, 5, 0.56) 31.72%,
    rgba(9, 8, 8, 0.14) 127.82%
  );
  backdrop-filter: blur(100px);
  border-radius: 20px;
  padding: 0.4em;
  padding-left: 2.5em;
  color: white;
  font-size: inherit;
`;
const Container = styled.form`
  position: relative;
  width: 34%;
  font-size: 2rem;
`;
const SearchIcon = styled(Search)`
  font-size: inherit;
  right: 0.6em;
  top: 25%;
  position: absolute;
`;
const DuckIcon = styled(Duck)`
  position: absolute;
  left: 0;
`;

export const SearchWidget = () => {
  return (
    <Container method="get" action={`https://duckduckgo.com`}>
      <DuckIcon />
      <Input name="q" />
      <button>
        <SearchIcon />
      </button>
    </Container>
  );
};
