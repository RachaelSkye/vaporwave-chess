import React from 'react'
import {Piece} from '../pieces/piece'

interface Props {
  piece?: any,
  squareColor: 'black' | 'white',
}

//we won't re-render a square, we'll pass down coordinate information down to the pieces so they are returned or not based on coordinates so we only render and rerender pieces instead of squares.

export function Square({piece, squareColor}: Props) {
  return (
    <div style={{backgroundColor: squareColor, width: '6.25vw', height: '6.25vh', zIndex: 20, color: piece?.livery, display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
      <Piece name={piece?.name} blackSquare={squareColor === 'black'}/>
    </div>
  )
}