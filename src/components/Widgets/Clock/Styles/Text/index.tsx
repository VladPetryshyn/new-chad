import dayjs from "dayjs";
import { FC } from "react";
import styled from "styled-components";
import { StyleProps } from "../../types";

const Container = styled.div``;
const Text = styled.h3`
  color: ${(p) => p.theme.fg}B3;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-size: 5.5rem;
`;

export const TextClockWidgetStyle: FC<StyleProps> = ({ date }) => (
	<Container>
		<Text>It&apos;s {dayjs().format("dddd hh:mma").toLowerCase()}</Text>
	</Container>
);
