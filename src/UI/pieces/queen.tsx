import React from "react";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
}
export function Queen({blackSquare}: Props) {
  return <Armor blackSquare={blackSquare}>&#x2655;</Armor>;
}
