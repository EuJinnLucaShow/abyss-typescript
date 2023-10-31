import styled from "styled-components";
import { ReactComponent as Top } from "../../img/arrow_top.svg";
import { ReactComponent as Left } from "../../img/arrow_left.svg";
import { ReactComponent as Right } from "../../img/arrow_right.svg";
import { ReactComponent as Bottom } from "../../img/arrow_bottom.svg";

export const Wrapper = styled.div`
  position: relative;
  z-index: 2;

  height: calc(100vh - 200px);
  padding: 40px;

  overflow: hidden;
`;

export const IconTop = styled(Top)`
  width: 16px;
  height: 16px;

  fill: white;
`;

export const IconRight = styled(Right)`
  width: 16px;
  height: 16px;

  fill: white;
`;

export const IconBottom = styled(Bottom)`
  width: 16px;
  height: 16px;

  fill: white;
`;

export const IconLeft = styled(Left)`
  width: 16px;
  height: 16px;

  fill: white;
`;

export const ButtonTop = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1;

  cursor: pointer;

  width: 120px;
  height: 40px;

  border: none;

  background-color: lightgray;

  transition: all 200ms ease;

  &:hover {
    background-color: white;
    transition: all 200ms ease;

    & ${IconTop} {
      fill: lightgray;

      transition: all 200ms ease;
    }
  }
`;

export const ButtonBottom = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);

  cursor: pointer;

  width: 120px;
  height: 40px;

  border: none;

  background-color: lightgray;

  transition: all 200ms ease;

  &:hover {
    background-color: white;
    transition: all 200ms ease;

    & ${IconBottom} {
      fill: lightgray;

      transition: all 200ms ease;
    }
  }
`;

export const ButtonLeft = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);

  cursor: pointer;

  width: 40px;
  height: 120px;

  border: none;

  background-color: lightgray;

  transition: all 200ms ease;

  &:hover {
    background-color: white;
    transition: all 200ms ease;

    & ${IconLeft} {
      fill: lightgray;

      transition: all 200ms ease;
    }
  }
`;

export const ButtonRight = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);

  cursor: pointer;

  width: 40px;
  height: 120px;

  border: none;

  background-color: lightgray;

  transition: all 200ms ease;

  &:hover {
    background-color: white;
    transition: all 200ms ease;

    & ${IconRight} {
      fill: lightgray;

      transition: all 200ms ease;
    }
  }
`;
