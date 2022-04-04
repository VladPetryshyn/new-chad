import { ReactComponent as Plus } from "@assets/icons/plus.svg";
import { ReactComponent as Close } from "@assets/icons/close.svg";
import { FC, useState } from "react";
import styled from "styled-components";
import { iconsList } from "@utils/iconList";
import { LinkModal } from "@components/Modals/Link";
import { LinkItemI } from "@utils/types";
import { useToggle } from "@utils/hooks";
import { DefaultWidgetProps } from "../types";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 3.2em;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.2rem;
  max-width: 18em;
  margin-bottom: -0.5em;
`;

const Item = styled.a`
  border-radius: 50%;
  display: flex;
  width: 4em;
  height: 4em;
  background: ${(p) => p.theme.bg};
  backdrop-filter: blur(100px);
  align-items: center;
  justify-content: center;
  color: ${(p) => p.theme.primary};
`;
const CloseIcon = styled(Close)`
  position: absolute;
  top: 0;
  right: 0;
  transition: 0.3s ease all;
  color: ${(p) => p.theme.primary};
  z-index: 1;
  opacity: 0;
`;

const ItemContainer = styled.div`
  position: relative;
  cursor: pointer;
  margin-bottom: 0.5em;
  margin-left: 0.5em;
  &:hover {
    ${CloseIcon} {
      opacity: 1;
    }
  }
  &:first-child,
  &:nth-child(5) {
    margin-left: 0;
  }
`;

const bookmarks = localStorage.getItem("bookmarks");

export const BookmarksWidget: FC<DefaultWidgetProps> = ({ isPreview }) => {
	const [links, setLinks] = useState<LinkItemI[]>(
		bookmarks && !isPreview ? JSON.parse(bookmarks) : [],
	);
	const [isOpen, toggleIsOpen] = useToggle(false);
	const onAdd = (item: LinkItemI) => {
		const newLinks = [...links, item];
		setLinks(newLinks);
		localStorage.setItem("bookmarks", JSON.stringify(newLinks));
	};
	const onDelete = (id: string) => () => {
		const newLinks = links.filter((link) => link.id !== id);
		setLinks(newLinks);
		localStorage.setItem("bookmarks", JSON.stringify(newLinks));
	};

	return (
		<Wrapper>
			<Container>
				{links.map(({ link, icon, id }) => (
					<ItemContainer key={id}>
						<CloseIcon onClick={onDelete(id)} />
						<Item href={link}>{iconsList[icon]}</Item>
					</ItemContainer>
				))}
				{links.length < 8 && (
					<ItemContainer>
						<Item onClick={toggleIsOpen}>
							<Plus />
						</Item>
					</ItemContainer>
				)}
				<LinkModal
					isLink={true}
					isOpen={isOpen}
					onSubmit={onAdd}
					onClose={toggleIsOpen}
				/>
			</Container>
		</Wrapper>
	);
};
