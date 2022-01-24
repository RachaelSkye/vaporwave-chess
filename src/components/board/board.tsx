import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Square} from '../square/square';
import { Coordinates, IPawn, IPiece } from '../../types/types';
import styled from 'styled-components';
import { canMove } from '../../controllers/game/game-controller';
import { arrangePieces } from '../../controllers/pieces/arrange-pieces';
import { arrangeSquares } from '../../controllers/squares/arrange-squares';


export function Board() {
  const squaresArray = arrangeSquares()
  const pieces = arrangePieces()

  const [updatedPieces, setUpdatedPieces] = useState(pieces)
  const [updatedSquares, setUpdatedSquares] = useState<JSX.Element[] | undefined>(undefined)
  const [movingPiece, updateMovingPiece] = useState<IPawn | IPiece | undefined>(undefined)

  function handleDragStart(e: React.DragEvent<HTMLSpanElement>, id?: string) {
    if(!id) return
    e.dataTransfer.setData('id', id)
    const piece = updatedPieces.find(piece => piece.id === id)
    updateMovingPiece(piece)
  }

    useEffect(() => {

      function handleDrop(squareCoordinates: Coordinates) {
        if(movingPiece){
          const moveCheck = canMove(squareCoordinates, movingPiece)
          if(moveCheck){
            movingPiece.coordinates[0] = squareCoordinates[0]
            movingPiece.coordinates[1] = squareCoordinates[1]
            const pieceToReplace = updatedPieces.find(piece => piece.id === movingPiece.id)
            const indexToReplace = updatedPieces.indexOf(pieceToReplace!)
            updatedPieces[indexToReplace] = movingPiece
            setUpdatedPieces(updatedPieces)
          }
          updateMovingPiece(undefined)
        } 
      }
      const squares = squaresArray.map(square => {
        const piece = updatedPieces.find(piece => {
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
    }, [updatedPieces, movingPiece])

  return <Boundary>{updatedSquares}</Boundary>
}

const Boundary = styled.div`
display: flex; 
flex-wrap: wrap; 
width: 50vw; 
height: 50vh; 
background-color: blue; 
position: absolute; 
bottom: 25%; 
left: 25%; 
border: 1px solid gray
`
