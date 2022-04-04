import { FC, useState } from "react";
import styled from "styled-components";
import { ReactComponent as Check } from "@assets/icons/check.svg";
import { Textarea } from "@components/Textarea";
import { ModalProps } from "@components/Modals";

const Wrapper = styled.div`
  width: 2.5em;
`;
const TextareaContainer = styled.div`
  font-size: 1.3rem;
  position: relative;
  z-index: 1;
`;
const FormTextarea = styled(Textarea)`
  border: 1px solid ${(p) => p.theme.primary};
  position: absolute;
  right: 70%;
  background: ${(p) => p.theme.bg};
  min-height: 6em;
  border-top-right-radius: 0;
  ::-webkit-scrollbar {
    height: 0.3em;
    width: 0.3em;
    background: ${(p) => p.theme.bg};
    border-radius: 1em;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(p) => p.theme.primary};
    border-radius: 1em;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.75);
  }

  ::-webkit-scrollbar-corner {
    background: ${(p) => p.theme.bg};
  }
`;
const SaveIcon = styled(Check)`
  position: absolute;
  right: 1.8em;
  bottom: -5.7em;
  cursor: pointer;
`;

interface Props extends ModalProps {
  onSubmit(s: string): void;
  defaultValue?: string;
}

export const TasksTextarea: FC<Props> = ({
	onSubmit,
	isOpen,
	onClose,
	defaultValue,
}) => {
	const [textarea, setTextarea] = useState("");

	const submit = () => {
		onSubmit(textarea);
		setTextarea("");
		onClose();
	};

	return (
		<Wrapper>
			{isOpen && (
				<TextareaContainer>
					<FormTextarea
						onChange={(e) => setTextarea(e.target.value)}
						defaultValue={defaultValue}
					/>
					<SaveIcon onClick={submit} />
				</TextareaContainer>
			)}
		</Wrapper>
	);
};
