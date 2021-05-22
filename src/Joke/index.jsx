import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

export const Joke = (props) => {
  const [thumbUp, setThumbUp] = useState(props.likes);
  const handleClickThumbUp = () => {
    setThumbUp(thumbUp + 1);
  };

  const [thumbDown, setThumbDown] = useState(props.dislikes);
  const handleClickThumbDown = () => {
    setThumbDown(thumbDown + 1);
  };
  return (
    <div class="joke">
      <div class="joke__body">
        <div class="joke__user">
          <img class="user-avatar" src={props.userAvatar} />
          <p class="user-name">{props.userName}</p>
        </div>

        <p class="joke__text">{props.text}</p>
      </div>
      <div class="joke__likes">
        <button
          id="btn-up"
          class="btn-like btn-like--up"
          onClick={handleClickThumbUp}
        ></button>
        <span id="likes-up" class="likes-count likes-count--up">
          {thumbUp}
        </span>
        <button
          id="btn-down"
          class="btn-like btn-like--down"
          onClick={handleClickThumbDown}
        ></button>
        <span id="likes-down" class="likes-count likes-count--down">
          {thumbDown}
        </span>
      </div>
    </div>
  );
};
