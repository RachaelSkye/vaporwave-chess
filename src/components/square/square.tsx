import React, {useEffect, useState} from 'react'
import { IPawn, IPiece } from '../../controllers/pieces/piece-controller'
import { ISquare } from '../../controllers/square/square-controller';
import {PieceConfig} from '../pieces/piece-config'
import {Coordinates, Livery} from '../../types'
import styled from 'styled-components';

interface Props {
  square: ISquare,
  pieces?: (IPawn | IPiece)[]
}

export function Square({square, pieces}: Props) {
  const [pieceToRender, setPieceToRender] = useState<IPawn | IPiece | undefined>(undefined)

  useEffect(() => {
    if(!pieces) return
     const piece = pieces.find((piece) => {
        const xMatch = square.coordinates[0] === piece.coordinates[0]
        const yMatch = square.coordinates[1] === piece.coordinates[1]
        return xMatch && yMatch ? piece : undefined
      })
    setPieceToRender(piece)
  }, [pieces, square.coordinates, pieceToRender])

  function handleDragOver(e: React.DragEvent<HTMLDivElement>) {
    e.preventDefault();
    console.log('dragging')
  };
  
  function handleDrop(e: React.DragEvent<HTMLDivElement>, square: ISquare) {
    if(!pieces) return

    const id = e.dataTransfer.getData("id");
    const piece = pieces.find(piece => piece.id === id)
    if(piece){
      const index = pieces.indexOf(piece)
      pieces[index].coordinates = square.coordinates
      const _piece = pieces.find(piece => piece.id === id)

      setPieceToRender(_piece)
    } 
  }
 
  return (
    <Boundary
    color={square.color} 
    livery={pieceToRender?.livery}
    onDragOver={(e) => handleDragOver(e)} 
    onDrop={(e) => handleDrop(e, square)}
    >
      {pieceToRender ? <PieceConfig blackSquare={square.color === 'black'} piece={pieceToRender}/> : null}
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