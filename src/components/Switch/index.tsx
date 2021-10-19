import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 6em;
  height: 3em;
  border-radius: 10em;
`;
const Input = styled.input`
  position: relative;
  height: 100%;
  width: 6em;
  border-radius: 10em;
  outline: none;
  border: none;
  transition: 0.3s all;
  -webkit-appearance: none;
  background: white;
  box-shadow: inset 0 0 2em rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:before {
    content: "";
    height: 105%;
    width: 3em;
    background: white;
    position: absolute;
    border-radius: 50%;
    top: -2%;
    transition: 0.5s;
  }
  &:checked {
    background: red;
    &:before {
      transform: translateX(100%);
    }
  }
`;

export const Switch = () => {
  return (
    <Container>
      <Input type="checkbox" />
    </Container>
  );
};
