import React, { useState } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [thumbUp, setThumbUp] = useState(0);
  const handleClickThumbUp = () => {
    setThumbUp(thumbUp + 1);
  };

  const [thumbDown, setThumbDown] = useState(0);
  const handleClickThumbDown = () => {
    setThumbDown(thumbDown + 1);
  };

  return (
    <div class="container">
      <div class="joke">
        <div class="joke__body">
          <div class="joke__user">
            <img
              class="user-avatar"
              src="https://raw.githubusercontent.com/Czechitas-podklady-WEB/dadjokes/main/users/user01.png"
            />
            <p class="user-name">Neroxx</p>
          </div>

          <p class="joke__text">
            The secret service isn't allowed to yell "Get down!" anymore when
            the president is about to be attacked. Now they have to yell
            "Donald, duck!"
          </p>
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
    </div>
  );
};

render(<App />, document.querySelector('#app'));
