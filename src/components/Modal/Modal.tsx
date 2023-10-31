 import {
  Wrapper,
Title,
BoxButtons,
Button } from "./Modal.styled";

interface ModalProps {
  type(value: React.MouseEvent<HTMLButtonElement, MouseEvent>): any;
}

export const Modal = ({ type }: ModalProps) => {

  return (
    <Wrapper>
      <Title>What do you want to create?</Title>
      <BoxButtons>
        <Button type="button" onClick={(e) => type(e)}>
          Category
        </Button>
        <Button type="button" onClick={(e) => type(e)}>
          Service
        </Button>
      </BoxButtons>
    </Wrapper>
  );
};
