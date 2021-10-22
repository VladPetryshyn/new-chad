import { useAppSelector } from "@utils/hooks/store";
import styled from "styled-components";
import { AddPalette } from "../AddPalette";
import { ColorCard } from "../Card";

const Container = styled.div`
  background: rgba(198, 198, 198, 0.13);
  border-radius: 30px;
  margin: 10px 30px 0 30px;
  padding: 3em 21px;
  max-height: 78vh;
  overflow-y: auto;
`;

export const ColorsBody = () => {
  const themes = useAppSelector(({ themes }) => themes);

  return (
    <Container>
      {themes.map(({ id, ...theme }) => (
        <ColorCard
          theme={{
            id,
            ...theme,
          }}
          key={id}
        />
      ))}
      <AddPalette />
    </Container>
  );
};
