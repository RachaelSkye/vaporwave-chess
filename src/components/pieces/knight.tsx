import React from "react";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
}
export function Knight({blackSquare}: Props) {
  return <Armor blackSquare={blackSquare}>&#x2658;</Armor>;
}
