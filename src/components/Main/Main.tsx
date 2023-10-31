import {
  Wrapper,
  ButtonTop,
  ButtonRight,
  ButtonBottom,
  ButtonLeft,
  IconTop,
  IconLeft,
  IconRight,
  IconBottom,
} from "./Main.styled";
import { Tree } from "../Tree/Tree";

interface MainProps {
  transitCount(value: number): any;
  zoomValue: number;
  view: string;
}

export const Main = ({ transitCount, zoomValue, view }: MainProps) => {
  function onClickTop() {
    const tree = document.querySelector(".tree") as HTMLDivElement | null;

    if (tree != null) {
      const position = tree.offsetTop;
      tree.style.top = `${position - 10}px`;
    }
  }

  function onClickRight() {
    const tree = document.querySelector(".tree") as HTMLDivElement | null;

    if (tree != null) {
      const position = tree.offsetLeft;
      tree.style.left = `${position + 10}px`;
    }
  }

  function onClickBottom() {
    const tree = document.querySelector(".tree") as HTMLDivElement | null;

    if (tree != null) {
      const position = tree.offsetTop;
      tree.style.top = `${position + 10}px`;
    }
  }

  function onClickLeft() {
    const tree = document.querySelector(".tree") as HTMLDivElement | null;

    if (tree != null) {
      const position = tree.offsetLeft;
      tree.style.left = `${position - 10}px`;
    }
  }

  function dragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    e.dataTransfer.dropEffect = "move";
  }

  return (
    <Wrapper onDragOver={dragOver}>
      <ButtonTop onClick={onClickTop}>
        <IconTop />
      </ButtonTop>
      <ButtonRight onClick={onClickRight}>
        <IconRight />
      </ButtonRight>
      <ButtonBottom onClick={onClickBottom}>
        <IconBottom />
      </ButtonBottom>
      <ButtonLeft onClick={onClickLeft}>
        <IconLeft />
      </ButtonLeft>
      <Tree transitCount={transitCount} zoomValue={zoomValue} view={view} />
    </Wrapper>
  );
};
