import React from "react";

import * as S from "./Button.styled";

function Button(props) {
  return (
    <>
      {props.type === "trashbin" && (
        <S.Button
          type="button"
          className="trashbin"
          onClick={props.handleClick}
        >
          <S.IconTrashbin />
        </S.Button>
      )}
      {props.type === "pencil" && (
        <S.Button type="button" className="pencil" onClick={props.handleClick}>
          <S.IconPencil />
        </S.Button>
      )}
      {props.type === "tumbsup" && (
        <S.Button type="button" className="tumbsup" onClick={props.handleClick}>
          <S.IconTumbsUp />
        </S.Button>
      )}
      {props.type === "left" && (
        <S.Button type="button" className="left" onClick={props.handleClick}>
          <S.IconLeft />
        </S.Button>
      )}
      {props.type === "right" && (
        <S.Button type="button" className="right" onClick={props.handleClick}>
          <S.IconRight />
        </S.Button>
      )}
      {props.type === "plus" && (
        <S.Button type="button" className="plus" onClick={props.handleClick}>
          <S.IconPlus />
        </S.Button>
      )}
      {props.type === "goToday" && (
        <S.Button type="button" className="today" onClick={props.handleClick}>
          <strong>Today</strong>
        </S.Button>
      )}
    </>
  );
}

export default Button;
