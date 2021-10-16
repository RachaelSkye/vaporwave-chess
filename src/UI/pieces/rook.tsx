import React from "react";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
}
export function Rook({blackSquare}: Props) {
  return <Armor blackSquare={blackSquare}>&#x2656;</Armor>;
}
