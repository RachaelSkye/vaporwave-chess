import React from "react";
import { IPiece } from "../../types";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
  piece?: IPiece
}
export function Bishop({blackSquare, piece}: Props) {
  return <Armor blackSquare={blackSquare} >&#x2657;</Armor>;
}
