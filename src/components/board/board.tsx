import React from 'react';
import {BoardController} from '../../controllers/board/board-controller';
import { v4 as uuidv4 } from 'uuid';
import {Square} from '../square/square';
import { Coordinates } from '../../types';
import { BehaviorSubject } from 'rxjs';



export function Board() {
  const board = new BoardController();
  const squaresArray = board.squares;
  let piecesArray = board.pieces;
  const piecesSubject = new BehaviorSubject(piecesArray)

  function handleDragStart(e: React.DragEvent<HTMLSpanElement>, id?: string) {
    if(!id) return
    e.dataTransfer.setData('id', id)
  }

  function handleDrop(e: React.DragEvent<HTMLSpanElement>, squareCoordinates: Coordinates) {
    //we want to update piece coords to match coords on the dropped square
    const id = e.dataTransfer.getData("id");
    const piece = piecesArray.find(piece => piece.id === id)
    if(piece){
      const indexToUpdate = piecesArray.indexOf(piece)
      piece.coordinates[0] = squareCoordinates[0]
      piece.coordinates[1] = squareCoordinates[1]
      piecesArray[indexToUpdate] = piece
      piecesSubject.next(piecesArray)
      console.log('after mutation: ', piecesArray)
    } 
  }



  const squares = squaresArray.map(square => {
    const piece = piecesSubject.getValue().find(piece => {
      const xMatch = piece.coordinates[0] === square.coordinates[0]
      const yMatch = piece.coordinates[1] === square.coordinates[1]

      if(xMatch && yMatch){
        return piece
      } else return undefined
    })
    const key = uuidv4()
      return (
        <Square key={key} piece={piece} square={square} handleDrop={handleDrop} handleDragStart={handleDragStart}/>
      )
    });  

  return <div style={{display: 'flex', flexWrap: 'wrap', width: '50vw', height: '50vh', backgroundColor: 'blue', position: 'absolute', bottom: '25%', left: '25%', border: '1px solid gray'}}>{squares}</div>
}