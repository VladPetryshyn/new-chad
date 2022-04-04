import styled from "styled-components";
import { FC, useEffect, useState } from "react";
import dayjs from "dayjs";
import { DefaultWidgetProps } from "../types";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1em;
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

const getTime = () => dayjs().format("HH:mm");

const defaultTime = getTime();
export const ClockWidget: FC<DefaultWidgetProps> = ({ isPreview }) => {
	const [date, setDate] = useState(defaultTime);

	useEffect(() => {
		if (isPreview) return;

		const interval = setInterval(() => {
			setDate(getTime());
		}, 3000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<Text>{date}</Text>
			<Date>{dayjs().format("DD.MM.YY")}</Date>
		</Container>
	);
};
