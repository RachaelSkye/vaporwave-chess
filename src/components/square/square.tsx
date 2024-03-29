import React from 'react'
import {Piece} from '../pieces/piece'
import {Livery, ISquare, IPawn, IPiece, Coordinates} from '../../types/types'
import styled from 'styled-components';

interface Props {
  square: ISquare,
  handleDrop: (squareCoordinates: Coordinates, event: React.DragEvent<HTMLSpanElement>) => void,
  handleDragStart: (event: React.DragEvent<HTMLSpanElement>, id?: string) => void
  piece?: (IPawn | IPiece)
}

export function Square({square, handleDrop, handleDragStart, piece,}: Props) {
  
  function handleDragOver(e: React.DragEvent<HTMLSpanElement>) {
    e.preventDefault();
  };
  const canDisplayInSquare = piece && !piece.captured && !piece.moving;

  return (
    <Boundary
    color={square.color} 
    livery={piece?.livery}
    onDragOver={(e) => handleDragOver(e)} 
    onDrop={(e) => handleDrop(square.coordinates, e)}
    >
      {canDisplayInSquare ? 
      <span draggable={true} onDragStart={(e) => handleDragStart(e, piece?.id)}>
        <Piece blackSquare={square.color === 'black'} piece={piece} />
      </span> : null}
    </Boundary>
  )
}

interface BoundaryProps {
  color: string,
  livery?: Livery
}
//TODO: I would like some dragging from, and dragging to border highlights and possibly highlighting squares that are allowed.
const Boundary = styled.div(({color, livery}: BoundaryProps) => {
  return {
    backgroundColor: color, 
    width: '11.25vw', 
    height: '11.25vh', 
    zIndex: 20, 
    color: livery, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})