import styled from "styled-components";

export const Wrapper = styled.div`
pointer-events: auto;

  position: absolute;
top: center;
left: center;

  height: fit-content;
width: fit-content;
  padding: 40px;

  display: flex;
flex-direction: column;
  align-items: center;
  justify-content: center;
gap: 20px;

    background-color: white;
border-radius: 10px;
  
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const Title = styled.p`
  font-size: 22px;
  line-height: 0.8;

  width: fit-content;
  margin: 0;
  padding: 0;

white-space: nowrap;
`;

export const BoxButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
gap: 20px;

`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;

  height: 40px;
  width: 100px;
  border: none;

  background-color: lightgray;
  color: black;
box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  font-size: 12px;

  transition: all 200ms ease;

  &:hover {
    background-color: white;
color: lightgray;
    transition: all 200ms ease;
  }


`;
