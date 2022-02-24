import dayjs from "dayjs";
import { FC } from "react";
import styled from "styled-components";
import { StyleProps } from "../../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // margin-bottom: 2em;
`;
const Text = styled.h3`
  color: ${(p) => p.theme.fg};
  font-size: 6rem;
`;
const Date = styled.div`
  background: ${(p) => p.theme.bg};
  color: ${(p) => p.theme.fg};
  border-radius: 1em;
  text-align: center;
  display: inline;
  font-size: 1.3rem;
  margin-top: 0.5em;
  padding: 0.5em;
`;

export const DefaultClockWidgetStyle: FC<StyleProps> = ({ date }) => {
	return (
		<Container>
			<Text>{date}</Text>
			<Date>{dayjs().format("DD.MM.YY")}</Date>
		</Container>
	);
};
