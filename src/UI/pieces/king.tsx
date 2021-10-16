import React from "react";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
}
export function King({blackSquare}: Props) {
  return <Armor blackSquare={blackSquare}>&#x2654;</Armor>
}
