import { Modal, ModalProps } from "@components/Modals";
import { ChangeEvent, FC } from "react";
import styled from "styled-components";
import { ReactComponent as Upload } from "@assets/icons/upload.svg";

interface Props extends ModalProps {
  onChange: (file: ChangeEvent<HTMLInputElement>) => void;
  acceptedFileTypes?: string;
}

const Input = styled.input`
  visibility: hidden;
  position: absolute;
  z-index: -99;
  background: transparent;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  padding: 3.4em;
  align-items: center;
`;

const UploadIcon = styled(Upload)`
  color: ${(p) => p.theme.fg};
  width: 15em;
  height: 15em;
`;

const Text = styled.span`
  font-size: 4em;
  color: ${(p) => p.theme.fg};
  margin-top: 0.5em;
`;

export const FileInputModal: FC<Props> = ({
	onChange,
	isOpen,
	onClose,
	acceptedFileTypes,
}) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose}>
			<Input
				id="FileInputModalInput"
				type="file"
				onChange={(e) => onChange(e)}
				accept={acceptedFileTypes}
			/>
			<Label htmlFor="FileInputModalInput">
				<UploadIcon />
				<Text>Drag or select your file</Text>
			</Label>
		</Modal>
	);
};
