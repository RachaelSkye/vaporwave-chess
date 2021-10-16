import React from 'react';
import {BoardController} from '../../controllers/board/board-controller';
import { v4 as uuidv4 } from 'uuid';
import {Square} from '../square/square'

export function Board() {
  const board = new BoardController();
  const squaresArray = board.squares
  const piecesArray = board.pieces
  
  const squares = squaresArray.map(square => {
    const key = uuidv4()
      const piece = piecesArray.find(piece => {
        const isOccupied = piece.coordinates[0] === square.coordinates[0] && piece.coordinates[1] === square.coordinates[1]
        if(isOccupied){
          return piece
        }else return undefined
        })

      return (
        <Square key={key} piece={piece} squareColor={square.color}/>
      )
    })
  

  return <div style={{display: 'flex', flexWrap: 'wrap', width: '50vw', height: '50vh', backgroundColor: 'blue', position: 'absolute'}}>{squares}</div>
}