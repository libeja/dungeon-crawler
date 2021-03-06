// this component will be an overlay showing that the player won

import React from 'react';

export default function(props) {

  return (
    <div>
      <div className="backdrop backdrop-won">
        <div className="game-won-window">

          <p>YOU WIN!</p>
          <button
            className="btn btn-window"
            onClick={props.handlePlayAgainButton}
            >Play Again?</button>
        </div>
      </div>
    </div>
  )

}
