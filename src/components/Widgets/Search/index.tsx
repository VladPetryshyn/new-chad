import { ReactComponent as Search } from "@assets/icons/search.svg";
import { FC, useState } from "react";
import styled from "styled-components";
import { SearchEngineSelect } from "./EngineSelect";
import { Input } from "@components/Input";
import { iconsList } from "@utils/iconList";
import { defaultSearchEngine } from "@utils/constants/widgets/defaults";
import { SearchItemI } from "@utils/types";
import { DefaultWidgetProps } from "../types";

const SearchInput = styled(Input)`
  width: 100%;
  height: 2.5em;
  background: ${(p) => `linear-gradient(
    113.8deg,
    ${p.theme.bg}8F 31.72%,
    ${p.theme.bg}24 127.82%
  )`};
  padding: 0.4em;
  padding-left: 2.5em;
`;
const Container = styled.form`
  position: relative;
  width: 50vw;
  font-size: 2rem;
  margin-bottom: 1em;
`;
const SearchIcon = styled(Search)`
  font-size: inherit;
  right: 0.6em;
  width: 1.2em;
  height: 1.2em;
  top: 25%;
  position: absolute;
  color: ${(p) => p.theme.primary};
`;

const localSearchEngine = localStorage.getItem("searchEngine");

export const SearchWidget: FC<DefaultWidgetProps> = ({ isPreview }) => {
	const [searchEngine, setSearchEngine] = useState<SearchItemI>(
		localSearchEngine && !isPreview
			? JSON.parse(localSearchEngine)
			: defaultSearchEngine,
	);

	return (
		<Container method="get" autoComplete="off" action={searchEngine.link}>
			<SearchEngineSelect setOption={setSearchEngine}>
				{iconsList[searchEngine.icon]}
			</SearchEngineSelect>
			<SearchInput name="q" required={true} tabIndex={-1} />
			<button>
				<SearchIcon />
			</button>
		</Container>
	);
};
