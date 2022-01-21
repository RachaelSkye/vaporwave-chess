import { IPawn, IPiece } from "./types"



export function isPawn(piece?: IPawn | IPiece): piece is IPawn {
  if(!piece) return false
  if("firstMove" in piece){
    return true
  }
  return false


}