import React from "react";

import { useAppDispatch } from "../../store/hooks";
import { addLike, removeCard } from "../../store/slices/cards/slice";
import { cards } from "../../store/slices/cards/types";

import dislike from "../../assets/card/dislike.svg";
import blueDislike from "../../assets/card/blue-dislike.svg";
import trashcan from "../../assets/card/trashcan.svg";

import style from "./index.module.scss";

const Card: React.FC<cards> = (props) => {
  const { id, fact, image, likes } = props;
  const diispatch = useAppDispatch();

  return (
    <div className={style.root}>
      <div>
        <img src={image} alt="" />
      </div>
      <div>{fact}</div>
      <div className={style.likes}>
        <div>
          <img
            src={likes > 0 ? blueDislike : dislike}
            alt="like"
            onClick={() => diispatch(addLike(id))}
            onDragStart={(e) => e.preventDefault()}
          />
          <span>{likes}</span>
        </div>
        <div>
          <img
            src={trashcan}
            alt="trashcan"
            onClick={() => diispatch(removeCard(id))}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
