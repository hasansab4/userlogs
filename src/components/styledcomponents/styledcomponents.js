
import styled, { keyframes } from 'styled-components';
export const Block = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
`


export const makeBig = keyframes`
 0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
`

export const ModalDiv = styled.div`
  background-color: #ffffff;
  position: absolute;
  top: 20%;
  left: 35%;
  width: 500px;
  padding: 2rem;
  z-index: 2;
  animation: ${makeBig} 0.2s linear;
  box-shadow: 0 5px 10px rgb(0 0 0 / 50%);
`;

export const CancelBtn = styled.button`
  border: 0;
  outline: 0;
  background-color: transparent;
  border-radius: 50%;
  box-shadow: 0 2px 5px rgb(0 0 0 / 50%);
  width: 40px;
  height: 40px;
  font-size: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  float: right;
  cursor: pointer;
  transform: rotate(45deg);

  &:hover{
    background-color: rgb(240, 240, 240);
  }
`
export const UserBlock = styled.div`
  margin: 3rem;
  text-align: center;
  display: inline-flex;
  flex-direction: column;
  gap: 0.5rem;
`
export const rotate = keyframes`
0%{
        transform: rotate(0);
    }
    100%{
        transform: rotate(360deg);
    }
`
export const Spinner = styled.div`
    width: 40px;
    height: 40px;
    display: inline-block;
    border: 4px solid #000;
    border-radius: 50%;
    border-bottom-color: transparent;
    border-right-color: transparent;
    animation: ${rotate} 1s linear infinite;
`

export const fastMove= keyframes`
    0%{
        transform: skewX(-20deg);
    }
    100%{
        transform: skewX(-20deg) translateX(600%);
    }
`

export const User = styled.div`
  background-color: rgba(24, 227, 88, 1);
  display: inline-flex;
  padding: 0.5rem;
  align-items: center;
  gap: 1rem;
  color: #ffffff;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(24, 227, 88, 0.1);
  transition: 0.5s ease background-color;

  &:hover {
    box-shadow: 0 5px 10px rgba(24, 227, 88, 0.5);
    background-color: rgb(18 191 79);
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    opacity: 0.5;
    width: 40px;
    transform: skewX(-20deg) translate(-150%);
    background-color: #fff;
    height: 100%;
    transition: 0.1s linear transform;
  }

  &:hover::before {
    animation: ${fastMove} 0.1s linear;
  }

  & p:first-child {
    border: 1px solid #fff;
    width: 40px;
    height: 40px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    box-shadow: 0 2px 5px rgb(0 0 0 / 20%);
    color: #fff;
    transition: 0.1s ease box-shadow;
  }

  &:hover p:first-child {
    box-shadow: 0 2px 5px rgb(0 0 0 / 50%);
  }
`;