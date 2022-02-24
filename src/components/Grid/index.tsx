import styled from "styled-components";
import { WidgetItems } from "@utils/constants/widgets/";
import { renderObjectItem } from "@utils/index";
import { useAppSelector } from "@utils/hooks/store";
import { Fragment } from "react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2em 0 2em 0;
  min-height: 100vh;
`;

export const Grid = () => {
	const widgets = useAppSelector(({ widgets }) => widgets);

	return (
		<Container>
			{widgets
				.filter(({ isActive }) => isActive)
				.map(({ widget, ...props }) => (
					<Fragment key={widget}>
						{renderObjectItem(WidgetItems[widget], props)}
					</Fragment>
				))}
		</Container>
	);
};
