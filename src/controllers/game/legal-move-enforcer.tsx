import { isPawn } from "../../types/type-guard";
import { Coordinates, IPawn, IPiece } from "../../types/types";

export function canMove(squareCoordinates: Coordinates, piece: (IPawn | IPiece) ) {
  const [fromX, fromY] = piece.coordinates;
  const [toX, toY] = squareCoordinates;
  const dx = toX - fromX;
  const dy = toY - fromY;
  const slope = Math.abs(dy / dx);
  const isTwoOrLessMovesY = Math.abs(dy) <= 2;
  const isSingleSpaceMove = Math.abs(dx) === 1 || Math.abs(dy) === 1;
  const isForwardMovePink = dy < 0;
  const isForwardMoveCyan = dy > 0;
  const pawn = isPawn(piece);
  

  if (pawn && !piece.promoted) {
    const isLegalFirstMovePinkPawn = piece.firstMove && isForwardMovePink && isTwoOrLessMovesY && (slope === 1 || dx === 0);
    const isLegalMovePinkPawn =  !piece.firstMove && isSingleSpaceMove && isForwardMovePink && (slope === 1 || dx === 0);
    const isLegalFirstMoveCyanPawn = piece.firstMove && isForwardMoveCyan && isTwoOrLessMovesY && (slope === 1 || dx === 0);
    const isLegalMoveCyanPawn =  !piece.firstMove && isSingleSpaceMove && isForwardMoveCyan && (slope === 1 || dx === 0);

    if (piece.livery === 'hotpink') {
      if (isLegalFirstMovePinkPawn) {
        piece.firstMove = false;
        return true;
      } else if (isLegalMovePinkPawn) {
        return true;
      } else {
        alert("Pink Queendom, restrain your pawn!");
      }
    } else {
      if (isLegalFirstMoveCyanPawn) {
        piece.firstMove = false;
        return true;
      } else if (isLegalMoveCyanPawn) {
        return true;
      } else {
        alert("Cyan Queendom, restrain your pawn!");
      }
    }
  } else {
    const isLegalMoveKnight = slope === 2 || slope === 1 / 2;
    const isLegalMoveBishop = slope === 1;
    const isLegalMoveRook = dx === 0 || dy === 0;
    const isLegalMoveKing = isSingleSpaceMove && (slope === 1 || dx === 0 || dy === 0);

    switch (piece.name) {
      case 'knight':
        if (isLegalMoveKnight) {
          return true;
        } else {
          alert("But ur literally a knight tho?");
          return false;
        }
      case 'bishop':
        if (isLegalMoveBishop) {
          return true;
        } else {
          alert("Wow a bishop tryna cheat smdh");
          return false;
        }
      case 'rook':
        if (isLegalMoveRook) {
          return true;
        } else {
          alert("wtf you doin R O O K?");
          return false;
        }
      case 'king':
        if (isLegalMoveKing) {
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