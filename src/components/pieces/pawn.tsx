import React from "react";
import {Armor} from './styles'
import { IPawn } from "../../types";

interface Props {
  blackSquare: boolean
  piece?: IPawn

}
export function Pawn({blackSquare, piece}: Props) {
  return <Armor blackSquare={blackSquare} >&#x2659;</Armor>;
}
