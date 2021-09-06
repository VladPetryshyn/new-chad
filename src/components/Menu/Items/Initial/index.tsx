import { FC } from "react";
import { Cog } from "@icons/Feather/cog";
import { SettingsBody } from "./Body";
import { MenuItemHeader } from "../helpers";
import { MenuItemsStates } from "..";
import styled from "styled-components";

interface SettingsI {
  setState(state: MenuItemsStates): void;
  state: string;
}

const Container = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  ${(p: { state: string }) => {
    switch (p.state) {
      case "entering":
        return `
          transform: translateX(-100%);
          transition: all 300ms ease;
             `;
      case "entered":
        return `
          transform: translateX(0%);
          transition: all 300ms ease;
          `;
      case "exited":
        return `
          transition: all 300ms ease;
          transform: translateX(0);
          `;
      case "exiting":
        return `
          transform: translateX(-100%);
          transition: all 300ms ease;
        `;
      default:
        return "";
    }
  }}
`;

export const Settings: FC<SettingsI> = ({ setState, state }) => {
  return (
    <Container state={state}>
      <MenuItemHeader Icon={Cog} title="Settings" />
      <SettingsBody setState={setState} />
    </Container>
  );
};
