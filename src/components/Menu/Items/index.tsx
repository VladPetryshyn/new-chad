import { CustomTransition } from "@components/CustomTransition";
import { ReactComponent as ArrowLeft } from "@assets/icons/arrowLeft.svg";
import { FC, useState } from "react";
import styled from "styled-components";
import { Colors } from "./Colors";
import { Settings } from "./Settings";
import { Wallpapers } from "./Wallpapers";
import { Widgets } from "./Widgets";

const Container = styled.div`
  position: relative;
`;

const ButtonBack = styled.button`
  position: absolute;
  top: 1em;
  left: 1.2em;
  cursor: pointer;
  background: transparent;
  z-index: 2;
`;

export enum MenuItemsStates {
  initial = "initial",
  colors = "colors",
  widgets = "widets",
  wallpapers = "wallpapers",
}

interface Props {
  onClose(): void;
}

export const MenuItems: FC<Props> = ({ onClose }) => {
  const [state, setState] = useState(MenuItemsStates.initial);
  return (
    <Container>
      <ButtonBack
        onClick={
          state !== MenuItemsStates.initial
            ? () => setState(MenuItemsStates.initial)
            : onClose
        }
      >
        <ArrowLeft width="2.3em" height="2.3em" />
      </ButtonBack>
      <CustomTransition isOpen={state === MenuItemsStates.initial}>
        {(state: string) => <Settings setState={setState} state={state} />}
      </CustomTransition>
      <CustomTransition isOpen={state === MenuItemsStates.colors}>
        {(state: string) => <Colors state={state} />}
      </CustomTransition>
      <CustomTransition isOpen={state === MenuItemsStates.widgets}>
        {(state: string) => <Widgets state={state} />}
      </CustomTransition>
      <CustomTransition isOpen={state === MenuItemsStates.wallpapers}>
        {(state: string) => <Wallpapers state={state} />}
      </CustomTransition>
    </Container>
  );
};
