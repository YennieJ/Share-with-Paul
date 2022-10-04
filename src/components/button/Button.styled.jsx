import styled from "styled-components";
import { TrashFill } from "@styled-icons/bootstrap";
import { Pencil } from "@styled-icons/bootstrap";
import { HandThumbsUpFill } from "@styled-icons/bootstrap";
import { ChevronLeft } from "@styled-icons/boxicons-solid";
import { ChevronRight } from "@styled-icons/boxicons-solid";
import { PlusCircle } from "@styled-icons/octicons";

export const IconTrashbin = styled(TrashFill)``;
export const IconPencil = styled(Pencil)``;
export const IconTumbsUp = styled(HandThumbsUpFill)``;
export const IconLeft = styled(ChevronLeft)``;
export const IconRight = styled(ChevronRight)``;
export const IconPlus = styled(PlusCircle)``;

export const Button = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  padding: 7px;

  display: flex;
  align-items: center;
  justify-content: center;

  color: white;
  background: #757575;

  &:hover {
    color: #424242;
    background: white;
    border: 1px solid #757575;
  }

  &.today,
  &.left,
  &.right {
    width: 30px;
    height: 30px;
  }

  &.today {
    margin: 0 6px;

    width: 60px;
    border-radius: 20px;

    font-size: 14px;
  }

  &.left,
  &.right {
    padding: 5px;
  }

  &.pencil,
  &.trashbin {
    width: 24px;
    height: 24px;
  }

  &.pencil {
    margin-right: 6px;
  }
`;
