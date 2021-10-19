import styled from "styled-components";
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
  return (
    <Container>
      <ColorCard
        theme={{
          name: "Blue",
          id: "",
          colors: { bg: "000000", fg: "ffffff", primary: "700B97" },
        }}
      />
      <ColorCard
        theme={{
          name: "Test",
          id: "",
          colors: { bg: "", fg: "", primary: "" },
        }}
      />
      <ColorCard
        theme={{
          name: "Test",
          id: "",
          colors: { bg: "", fg: "", primary: "" },
        }}
      />
      <ColorCard
        theme={{
          name: "Test",
          id: "",
          colors: { bg: "", fg: "", primary: "" },
        }}
      />
    </Container>
  );
};
