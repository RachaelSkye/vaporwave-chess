import React from 'react'
import {PieceConfig} from '../pieces/piece-config'
import {Livery, ISquare, IPawn, IPiece, Coordinates} from '../../types'
import styled from 'styled-components';

interface Props {
  square: ISquare,
  handleDrop: (event: React.DragEvent<HTMLSpanElement>, squareCoordinates: Coordinates) => void,
  handleDragStart: (event: React.DragEvent<HTMLSpanElement>, id?: string) => void
  piece?: (IPawn | IPiece)
}

export function Square({square, handleDrop, handleDragStart, piece}: Props) {
  function handleDragOver(e: React.DragEvent<HTMLSpanElement>) {
    e.preventDefault();
    console.log('dragging')
  };

  return (
    <Boundary
    color={square.color} 
    livery={piece?.livery}
    onDragOver={(e) => handleDragOver(e)} 
    onDrop={(e) => handleDrop(e, square.coordinates)}
    >
      {piece ? 
      <span draggable={true} onDragStart={(e) => handleDragStart(e, piece?.id)}>
        <PieceConfig blackSquare={square.color === 'black'} piece={piece} />
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
    width: '6.25vw', 
    height: '6.25vh', 
    zIndex: 20, 
    color: livery, 
    display: 'flex', 
    justifyContent: 'center', 
    alignItems: 'center'
  }
})