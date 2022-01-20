import React from 'react';
import {BoardController} from '../../controllers/board/board-controller';
import { v4 as uuidv4 } from 'uuid';
import {Square} from '../square/square';



export function Board() {
  const board = new BoardController();
  const squaresArray = board.squares;
  const piecesArray = board.pieces;


  const squares = squaresArray.map(square => {
    const key = uuidv4()
      return (
        <Square key={key} pieces={piecesArray} square={square}/>
      )
    });  

  return <div style={{display: 'flex', flexWrap: 'wrap', width: '50vw', height: '50vh', backgroundColor: 'blue', position: 'absolute', bottom: '25%', left: '25%', border: '1px solid gray'}}>{squares}</div>
}