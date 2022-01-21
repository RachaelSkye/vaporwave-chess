import React from "react";
import {Armor} from './styles'
import { IPawn, IPiece } from "../../types";

interface Props {
  blackSquare: boolean
  piece?: IPiece | IPawn

}
export function King({blackSquare, piece}: Props) {

  return <Armor blackSquare={blackSquare} >&#x2654;</Armor>
}
