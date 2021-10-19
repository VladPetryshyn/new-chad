import { useRef } from "react";
import styled from "styled-components";
import { Input } from "@components/Input";
import { validateURL } from "@utils/index";

const WallpapersInput = styled(Input)`
  flex: 2;
  background: orange;
  border-radius: 50px;
  text-align: center;
`;
const InputContainer = styled.form`
  display: flex;
  font-weight: bolder;
  font-size: 1.5rem;
`;
const SubmitBtn = styled.button`
  margin-left: 0.5em;
  outline: none;
  border: none;
  flex: 0.5;
  background: orange;
  padding: 0.5em;
  border-radius: 50px;
`;
export const WallpapersForm = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    // const wallpapers = localStorage.getItem("wallpapers");
    if (validateURL(inputRef!.current!.value)) {
      alert(inputRef!.current!.value);
    }
    // console.log(e.target.elements.name!.value);
    // if (wallpapers) {
    //   localStorage.setItem(
    //     "wallpapers",
    //     JSON.stringify([...JSON.parse(wallpapers)]),
    //   );
    // }
  };
  return (
    <InputContainer onSubmit={onSubmit}>
      <WallpapersInput name="wallpaper" ref={inputRef} />
      <SubmitBtn>OK</SubmitBtn>
    </InputContainer>
  );
};
