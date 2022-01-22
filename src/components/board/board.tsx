import React, {useEffect, useState} from 'react';
import {BoardController} from '../../controllers/board/board-controller';
import { v4 as uuidv4 } from 'uuid';
import {Square} from '../square/square';
import { Coordinates, IPawn, IPiece } from '../../types';

export function Board() {
  const board = new BoardController();
  const squaresArray = board.squares;
  const piecesArray = board.pieces;
  const [updatedArray, setUpdatedArray] = useState(piecesArray)
  const [updatedSquares, setUpdatedSquares] = useState<JSX.Element[] | undefined>(undefined)
  const [movingPiece, updateMovingPiece] = useState<IPawn | IPiece | undefined>(undefined)

  function handleDragStart(e: React.DragEvent<HTMLSpanElement>, id?: string) {
    if(!id) return
    e.dataTransfer.setData('id', id)
    const piece = updatedArray.find(piece => piece.id === id)
    updateMovingPiece(piece)
  }

    useEffect(() => {

      function handleDrop(squareCoordinates: Coordinates) {
        if(movingPiece){
          movingPiece.coordinates[0] = squareCoordinates[0]
          movingPiece.coordinates[1] = squareCoordinates[1]
          const pieceToReplace = updatedArray.find(piece => piece.id === movingPiece.id)
          const indexToReplace = updatedArray.indexOf(pieceToReplace!)
          updatedArray[indexToReplace] = movingPiece
          setUpdatedArray(updatedArray)
          updateMovingPiece(undefined)
        } 
      }
      const squares = squaresArray.map(square => {
        const piece = updatedArray.find(piece => {
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
      setUpdatedSquares(squares)

      //Adding the dependencies eslint was asking for caused constant re-rendering.
      //TODO: state management is not great >_< 
      // eslint-disable-next-line
    }, [updatedArray, movingPiece])

  return <div style={{display: 'flex', flexWrap: 'wrap', width: '50vw', height: '50vh', backgroundColor: 'blue', position: 'absolute', bottom: '25%', left: '25%', border: '1px solid gray'}}>{updatedSquares}</div>
}
