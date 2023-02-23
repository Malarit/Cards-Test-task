import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

import { selectByLikes, selectCards } from "../../store/slices/cards/selectors";
import { fetchCard } from "../../store/slices/cards/slice";
import Card from "../card";

import style from "./index.module.scss";

const App: React.FC = () => {
  const diispatch = useAppDispatch();
  const refFlag = React.useRef<boolean>(true);
  const [toggle, setToggle] = React.useState(false);
  const cards = useAppSelector(selectCards);
  const likesCards = useAppSelector(selectByLikes);

  React.useEffect(() => {
    if (refFlag.current) diispatch(fetchCard());
    refFlag.current = false;
  }, []);

  const getCards = () => {
    if (toggle) return likesCards;
    return cards;
  };

  return (
    <div className={style.root}>
      <header>
        <div className={style.container}>
          <button onClick={() => setToggle(!toggle)}>Фильтр</button>
        </div>
      </header>
      <div className={style.container}>
        <div className={style.cards}>
          {getCards().map((obj) => (
            <Card {...obj} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;
