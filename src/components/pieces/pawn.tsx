import React from "react";
import {Armor} from './styles'

interface Props {
  blackSquare: boolean
}
export function Pawn({blackSquare}: Props) {
  return <Armor blackSquare={blackSquare} >&#x2659;</Armor>;
}
