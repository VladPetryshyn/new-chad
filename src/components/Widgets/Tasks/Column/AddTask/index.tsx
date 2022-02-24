import styled from "styled-components";
import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { Textarea } from "@components/Textarea";
import { FC, useState } from "react";
import { ReactComponent as Check } from "@assets/icons/check.svg";
import { TaskI } from "@utils/types";
import { v4 as uuid } from "uuid";

const Container = styled.div`
  position: absolute;
  right: 1em;
`;
const PlusIcon = styled(Plus)`
  heihgt: 2.5em;
  width: 2.5em;
  margin-left: auto;
  cursor: pointer;
`;

const TextareaContainer = styled.div`
  font-size: 1.3rem;
`;
const FormTextarea = styled(Textarea)`
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

interface Props {
  onAdd: (tasks: TaskI) => void;
}

export const PlusForm: FC<Props> = ({ onAdd }) => {
	const [isOpen, setIsOpen] = useState(false);
	const [textarea, setTextarea] = useState("");

	const toggleIsOpen = () => {
		setIsOpen((p) => !p);
		setTextarea("");
	};

	const onSubmit = () => {
		onAdd({
			id: uuid(),
			content: textarea,
		});
		toggleIsOpen();
	};

	return (
		<Container>
			<PlusIcon onClick={toggleIsOpen} />
			{isOpen && (
				<TextareaContainer>
					<FormTextarea onChange={(e) => setTextarea(e.target.value)}>
						{textarea}
					</FormTextarea>
					<SaveIcon onClick={onSubmit} />
				</TextareaContainer>
			)}
		</Container>
	);
};
