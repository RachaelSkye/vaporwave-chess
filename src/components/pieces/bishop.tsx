import React from "react";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
}
export function Bishop({blackSquare}: Props) {
  return <Armor blackSquare={blackSquare} draggable={true}>&#x2657;</Armor>;
}
