import React, {useEffect, useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Square} from '../square/square';
import { Coordinates, IPawn, IPiece } from '../../types/types';
import styled from 'styled-components';
import { canMove } from '../../controllers/game/legal-move-enforcer';
import { arrangePieces } from '../../controllers/pieces/arrange-pieces';
import { arrangeSquares } from '../../controllers/squares/arrange-squares';

//TODO: pieces need to be able to live outside the board
//how should that layout work? i feel like I would like to see off board pieces in a numeric display
//and then to drag pieces back to the board i want a slide out drawer with the captured pieces in it
export function Board() {
  const squaresArray = arrangeSquares()
  const pieces = arrangePieces()

  const [updatedPieces, setUpdatedPieces] = useState(pieces)
  const [updatedSquares, setUpdatedSquares] = useState<JSX.Element[] | undefined>(undefined)
  const [movingPiece, updateMovingPiece] = useState<IPawn | IPiece | undefined>(undefined)

  function handleDragStart(event: React.DragEvent<HTMLSpanElement>, id?: string) {
    if(!id) return
    event.dataTransfer.setData('id', id)
    const piece = updatedPieces.find(piece => piece.id === id);
    if(piece){
      piece.moving = true
    }
    updateMovingPiece(piece);
    //no idea why but this works to make the bg disappear on drag
    //https://stackoverflow.com/questions/36379184/html5-draggable-hide-original-element
    event.currentTarget.style.transition = "0.01s";
    event.currentTarget.style.transform = "translateX(-9999px)";

  }

    useEffect(() => {

      function handleDrop(squareCoordinates: Coordinates, event: React.DragEvent<HTMLSpanElement>) {
        if(movingPiece){
          const passesMoveCheck = canMove(squareCoordinates, movingPiece);
          if(passesMoveCheck){
            movingPiece.coordinates = squareCoordinates;
            movingPiece.moving = false
            const pieceToReplace = updatedPieces.find(piece => piece.id === movingPiece.id)
            const indexToReplace = updatedPieces.indexOf(pieceToReplace!)
            updatedPieces[indexToReplace] = movingPiece
            console.log(movingPiece)
            setUpdatedPieces(updatedPieces)
            event.currentTarget.style.transition = "";
            event.currentTarget.style.transform = "";
        
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
            <Square 
            key={key} 
            piece={piece} 
            square={square} 
            handleDrop={handleDrop} 
            handleDragStart={handleDragStart}/>
          )
        });
      setUpdatedSquares(squares)

      //TODO: state management is not great >_< 
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
