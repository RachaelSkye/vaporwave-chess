import { isPawn } from "../../types/type-guard";
import { Coordinates, IPawn, IPiece } from "../../types/types";

export function canMove(squareCoordinates: Coordinates, piece: (IPawn | IPiece) ) {
  const [fromX, fromY] = piece.coordinates;
  const [toX, toY] = squareCoordinates
  const dx = toX - fromX;
  const dy = toY - fromY;
  const slope = Math.abs(dy / dx);
  const isFirstMove = Math.abs(dy) <= 2;
  const isSingleSpaceMove = Math.abs(dx) === 1 || Math.abs(dy) === 1;
  const isForwardMovePink = dy < 0;
  const isForwardMoveCyan = dy > 0;
  const pawn = isPawn(piece) 

  if (pawn && !piece.promoted) {
    if (piece.livery === 'hotpink') {
      if (
        piece.firstMove &&
        isForwardMovePink &&
        isFirstMove &&
        (slope === 1 || dx === 0)
      ) {
        piece.firstMove = false;
        return true;
      } else if (
        !piece.firstMove &&
        isSingleSpaceMove &&
        isForwardMovePink &&
        (slope === 1 || dx === 0)
      ) {
        return true;
      } else {
        alert("Pink Queendom, restrain your pawn!");
      }
    } else {
      if (
        piece.firstMove &&
        isForwardMoveCyan &&
        isFirstMove &&
        (slope === 1 || dx === 0)
      ) {
        piece.firstMove = false;
        return true;
      } else if (
        !piece.firstMove &&
        isSingleSpaceMove &&
        isForwardMoveCyan &&
        (slope === 1 || dx === 0)
      ) {
        return true;
      } else {
        alert("Cyan Queendom, restrain your pawn!");
      }
    }
  } else {
    switch (piece.name) {
      case 'knight':
        if (slope === 2 || slope === 1 / 2) {
          return true;
        } else {
          alert("But ur literally a knight tho?");
          return false;
        }
      case 'bishop':
        if (slope === 1) {
          return true;
        } else {
          alert("Wow a bishop tryna cheat smdh");
          return false;
        }
      case 'rook':
        if (dx === 0 || dy === 0) {
          return true;
        } else {
          alert("wtf you doin R O O K?");
          return false;
        }
      case 'king':
        if (isSingleSpaceMove && (slope === 1 || dx === 0 || dy === 0)) {
          return true;
        } else {
          alert("Queen, your king is drunk. Retrieve them!");
          return false;
        }
      default:
        return true
    }
  }
}