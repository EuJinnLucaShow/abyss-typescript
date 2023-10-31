import React, { useEffect, useState } from "react";
import {
  Wrapper,
  Title,
  Count,
  BoxLeft,
  BoxRight,
  ButtonView,
  ZoomDecrement,
  ZoomIncrement,
  ZoomValue,
  Center,
  CenterIcon,
  ZoomBox,
} from "./Header.styled";

interface HeaderProps {
  serviceCount: number;
  transitZoomValue(value: number): any;
  transitView(value: string): any;
}

export const Header = ({
  serviceCount,
  transitZoomValue,
  transitView,
}: HeaderProps) => {
  const valuesIn = [25, 30, 40, 50, 60, 70, 80, 90, 100, 125, 150];
  const valuesOut = [
    20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150,
  ];

  const [zoomValue, setZoomValue] = useState<number>(100);
  const [values, setValues] = useState<number[]>(valuesIn);

  const [view, setView] = useState<string>("list view");

  useEffect(() => {
    transitZoomValue(zoomValue);
  }, [transitZoomValue, zoomValue]);

  function onCenter() {
    const tree = document.querySelector(".tree") as HTMLDivElement | null;

    if (tree != null) {
      tree.style.top = "50%";
      tree.style.left = "50%";
      tree.style.transform = `translateX(-50%) translateY(-50%) scale(${
        zoomValue / 100
      })`;
    }
  }

  function zoomDecrement() {
    setValues(valuesOut);

    setZoomValue((prev) =>
      zoomValue <= 20 ? 20 : zoomValue % 10 !== 0 ? prev - 5 : prev - 10
    );
    setZoom(zoomValue <= 20 ? 20 : zoomValue - 10);
  }

  function zoomIncrement() {
    setValues(valuesOut);

    setZoomValue((prev) =>
      zoomValue >= 150 ? 150 : zoomValue % 10 !== 0 ? prev + 5 : prev + 10
    );
    setZoom(zoomValue >= 150 ? 150 : zoomValue + 10);
  }

  function setZoom(value: number) {
    const tree = document.querySelector(".tree") as HTMLDivElement | null;

    if (tree != null) {
      tree.style.transform = `translateX(-50%) translateY(-50%) scale(${
        value / 100
      })`;
    }
  }

  function onClickView(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    transitView(
      (e.target as HTMLButtonElement).innerText.toLowerCase() === "list view"
        ? "tree view"
        : "list view"
    );
    setView(view === "list view" ? "tree view" : "list view");
  }

  return (
    <Wrapper>
      <BoxLeft>
        <Title>Services</Title>
        <Count>{serviceCount}</Count>
      </BoxLeft>
      <BoxRight>
        <ButtonView onClick={onClickView}>{view.toUpperCase()}</ButtonView>
        <Center onClick={onCenter}>
          <CenterIcon />
        </Center>
        <ZoomBox>
          <ZoomDecrement onClick={zoomDecrement}>-</ZoomDecrement>
          <ZoomValue
            onClick={() => setValues(valuesIn)}
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) => {
              setZoomValue(Number(e.target.value.split("%")[0]));
              setZoom(Number(e.target.value.split("%")[0]));
            }}
            value={`${zoomValue}%`}
          >
            {values.map((item) => (
              <option key={item}>{item}%</option>
            ))}
          </ZoomValue>
          <ZoomIncrement onClick={zoomIncrement}>+</ZoomIncrement>
        </ZoomBox>
      </BoxRight>
    </Wrapper>
  );
};
