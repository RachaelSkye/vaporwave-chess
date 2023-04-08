import {Coordinates, IPawn, IPiece, Livery } from '../../types/types'

interface Config {
  livery: Livery,  
  name: string, 
  coordinates: Coordinates, 
  idx?: number, 
  firstMove?: boolean, 
  promoted?: boolean
}

function createPiece({name, livery, coordinates, idx, firstMove, promoted}: Config): (IPiece | IPawn) {
  const basePiece = {
    livery,
    id: livery + name + idx,
    name,
    coordinates,
    captured: false,
    moving: false
  }
 if(name === "pawn"){
  return {
    ...basePiece,
      firstMove,
      promoted,
    }
 } else {
  return basePiece
 }
}


//TODO: i think the thing here would be to use a uuid and pass the livery with the id as needed. 
// then i think i could use mapping?

export function arrangePieces(): (IPawn | IPiece)[] {
  const pieces = []

  const pKing = createPiece({livery: "hotpink", name: "king", coordinates: [3, 7]})
  const pQueen = createPiece({livery: "hotpink", name: "queen", coordinates: [4, 7]})
  const cKing = createPiece({livery: "cyan", name: "king", coordinates: [3, 0]})
  const cQueen = createPiece({livery: "cyan", name: "queen", coordinates: [4, 0]})

  pieces.push(pKing, pQueen, cKing, cQueen)

  for (let i = 0; i < 8; i++) {
    const cPawn = createPiece({livery: "cyan", idx: i, name: "pawn", coordinates: [i, 1], firstMove: true, promoted: false})
    const pPawn = createPiece({livery: "hotpink", idx: i, name: "pawn", coordinates: [i, 6], firstMove: true, promoted: false})

    pieces.push(cPawn, pPawn);
  }

  for (let i = 0; i < 2; i++) {
    const cKnight = createPiece({livery: "cyan", idx: i, name: "knight", coordinates: i === 0 ? [6, 0] : [1, 0]})
    const pKnight = createPiece({livery: "hotpink", idx: i, name: "knight", coordinates: i === 0 ? [6, 7] : [1, 7]})

    const cBishop = createPiece({livery: "cyan", idx: i, name: "bishop", coordinates: i === 0 ? [5, 0] : [2, 0]})
    const pBishop = createPiece({livery: "hotpink", idx: i, name: "bishop", coordinates: i === 0 ? [5, 7] : [2, 7]})

    const cRook = createPiece({livery: "cyan", idx: i, name: "rook", coordinates: i === 0 ? [7, 0] : [0, 0]})
    const pRook = createPiece({livery: "hotpink", idx: i, name: "rook", coordinates: i === 0 ? [7, 7] : [0, 7]})

    pieces.push(cKnight, pKnight, cBishop, pBishop, cRook, pRook)
  }
  return pieces
}