import styled from "styled-components";
import { ReactComponent as Icon } from "../../img/arrow_center.svg";

export const Wrapper = styled.div`
  position: relative;

  height: fit-content;
  padding: 40px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  &::after {
    content: "";

    position: absolute;
    bottom: 0;
    left: 0;

    width: 100%;
    height: 1px;

    background-color: lightgray;
  }
`;

export const Title = styled.p`
  font-size: 28px;
  line-height: 0.8;

  width: fit-content;
  margin: 0;
  padding: 0;
`;

export const Count = styled.p`
  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 12px;
  line-height: 0.8;

  background-color: orange;
  color: white;

  margin: 0;
  width: 20px;
  height: 20px;
  border-radius: 8px;
`;

export const BoxLeft = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: center;
  gap: 10px;
`;

export const BoxRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const ButtonView = styled.button`
  cursor: pointer;

  height: 40px;
  width: 80px;
  border: none;

  background-color: blue;
  color: white;

  font-size: 12px;

  transition: all 200ms ease;

  &:hover {
    background-color: white;
    color: blue;
    transition: all 200ms ease;
  }
`;

export const ZoomDecrement = styled.button`
  cursor: pointer;

  background-color: white;
  color: lightgray;

  height: 40px;
  width: 40px;
  border: none;

  transition: all 200ms ease;

  &:hover {
    background-color: lightgray;
    color: white;

    transition: all 200ms ease;
  }
`;

export const ZoomIncrement = styled.button`
  cursor: pointer;

  background-color: white;
  color: lightgray;

  height: 40px;
  width: 40px;
  border: none;

  transition: all 200ms ease;

  &:hover {
    background-color: lightgray;
    color: white;

    transition: all 200ms ease;
  }
`;

export const ZoomValue = styled.select`
  cursor: pointer;

  background-color: white;
  color: lightgray;

  height: 40px;
  width: 80px;
  border: none;
  outline: none;
  margin: 0;

  text-align: center;

  transition: all 200ms ease;

  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  text-indent: 1px;
  text-overflow: "";

  ::-ms-expand {
    display: none;
  }

  &:hover {
    background-color: lightgray;
    color: white;

    transition: all 200ms ease;

    & option {
      background-color: white;
      color: lightgray;
    }
  }
`;

export const CenterIcon = styled(Icon)`
  width: 16px;
  height: 16px;

  fill: lightgray;

  transition: all 200ms ease;
`;

export const Center = styled.button`
  cursor: pointer;

  height: 40px;
  width: 40px;
  border: none;

  background-color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 200ms ease;

  &:hover {
    background-color: lightgray;
    transition: all 200ms ease;

    & ${CenterIcon} {
      fill: white;

      transition: all 200ms ease;
    }
  }
`;

export const ZoomBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3px;
`;
