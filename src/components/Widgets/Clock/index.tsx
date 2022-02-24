import styled from "styled-components";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { DefaultClockWidgetStyle } from "./Styles/Default";
import { TextClockWidgetStyle } from "./Styles/Text";

const Container = styled.div`
  margin-bottom: 1.6em;
`;

export const ClockWidget = () => {
	const [date, setDate] = useState(dayjs().format("HH:mm"));

	useEffect(() => {
		const interval = setInterval(() => {
			setDate(dayjs().format("HH:mm"));
		}, 6000);

		return () => clearInterval(interval);
	}, []);

	return (
		<Container>
			<TextClockWidgetStyle date={date} />
		</Container>
	);
};
