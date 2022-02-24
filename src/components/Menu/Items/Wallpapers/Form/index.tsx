import { FC, useRef } from "react";
import styled from "styled-components";
import { Input } from "@components/Input";
import { validateURL } from "@utils/index";

const WallpapersInput = styled(Input)`
  flex: 2;
  background: ${(p) => p.theme.bg};
  border-radius: 50px;
  text-align: center;
`;
const InputContainer = styled.form`
  display: flex;
  font-weight: bolder;
  font-size: 1.5rem;
  margin-bottom: 1em;
`;
const SubmitBtn = styled.button`
  margin-left: 0.5em;
  outline: none;
  border: none;
  flex: 0.5;
  background: ${(p) => p.theme.primary};
  padding: 0.5em;
  border-radius: 50px;
`;

interface Props {
  addWallpaper: (a: string) => void;
}

export const WallpapersForm: FC<Props> = ({ addWallpaper }) => {
	const inputRef = useRef<HTMLInputElement>(null);

	const onSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const v = inputRef!.current!.value;

		if (validateURL(v)) {
			addWallpaper(v);
      inputRef!.current!.value = "";
		}
	};

	return (
		<InputContainer onSubmit={onSubmit}>
			<WallpapersInput name="wallpaper" ref={inputRef} />
			<SubmitBtn>OK</SubmitBtn>
		</InputContainer>
	);
};
