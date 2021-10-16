import React from 'react';
import {BoardController} from '../../controllers/board/board-controller';
import { v4 as uuidv4 } from 'uuid';
import {Piece} from '../pieces/piece'

export function Board() {
  const board = new BoardController();
  const squaresArray = board.squares
  
  const squares = squaresArray.map(square => {
    const key = uuidv4()
    const name = square.piece?.name

      return (
        <div style={{backgroundColor: square.color, width: '6.25vw', height: '6.25vh', zIndex: 20, color: square.piece?.livery, display: 'flex', justifyContent: 'center', alignItems: 'center'}} key={key}>
          {/* {square.coordinates} */}
          <Piece name={name} blackSquare={square.color === 'black'}/>
        </div>
      )
    })
  

  return <div style={{display: 'flex', flexWrap: 'wrap', width: '50vw', height: '50vh', backgroundColor: 'blue', position: 'absolute'}}>{squares}</div>
}