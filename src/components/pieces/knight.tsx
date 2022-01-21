import React from "react";
import { IPawn, IPiece } from "../../types";
import {Armor} from './styles'
interface Props {
  blackSquare: boolean
  piece?: IPiece | IPawn
}
export function Knight({blackSquare, piece}: Props) {
  return <Armor blackSquare={blackSquare} >&#x2658;</Armor>;
}
