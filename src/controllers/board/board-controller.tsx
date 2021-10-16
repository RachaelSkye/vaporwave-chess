import {Piece, PieceConfig, Pawn} from '../pieces/piece-controller';
import { Square } from '../square/square-controller';
import { Coordinates, Livery } from '../../types';
// import { Observable } from "rxjs";
// import {tap} from 'rxjs/operators'


export class BoardController {
  //the board will instantiate pieces and generate squares. square generation also generates coordinates. initial piece placement will be passed down to squares and pieces.

  //we really don't need a board instance, do we? well, i guess the board could be instantiated in the tsx file and we could separate board logic from the board face that way.

  //a board has squares and boundary detection. can be a subscription that's initialized once the table has a piece on it.


  //for purposes of configuring pieces i think the board should have a piece property that comes from the piece class
  public pieces: Piece[] = []
  public squares: Square[] = []

  //we can assign the piece that's moving as the piece in play and update these values accordingly. once the piece is placed and the square has the current position information, we reset their state to null.
  public pieceInPlay?: Piece
  private lastPosition: Coordinates | null = null
  private currentPosition: Coordinates | null = null

  //this will be set by the livery property on the piece in play. i think this will be a good separation to have but i'm not sure for what yet.
  private currentPlayer: Livery | null = null

  constructor(){
    this.arrangePieces()
    this.arrangeSquares()
    
  }

  private arrangePieces() {
    const config = (livery: Livery, idx: number | '', name: string, coordinates: Coordinates): PieceConfig => {
      return {
        livery: livery,
        index: idx,
        name: name,
        coordinates: coordinates,
      }
    }
    this.pieces.push(new Piece(config("hotpink", '', "queen", [4, 7])))
    this.pieces.push(new Piece(config("hotpink", '', "king", [3, 7])))
    this.pieces.push(new Piece(config("cyan", '', "queen", [4, 0])))
    this.pieces.push(new Piece(config("cyan", '', "king", [3, 0])))

    for (let i = 0; i < 8; i++) {
      this.pieces.push(new Pawn(config("cyan", i, "pawn", [i, 1])));
      this.pieces.push(new Pawn(config("hotpink", i, "pawn", [i, 6])));
    }

    for (let i = 0; i < 2; i++) {
      this.pieces.push(new Piece(config("cyan", i, "knight", i === 0 ? [6, 0] : [1, 0])));

      this.pieces.push(
        new Piece(config("hotpink", i, "knight", i === 0 ? [6, 7] : [1, 7]))
      );
      this.pieces.push(
        new Piece(config("cyan", i, "bishop", i === 0 ? [5, 0] : [2, 0]))
      );
      this.pieces.push(
        new Piece(config("hotpink", i, "bishop", i === 0 ? [5, 7] : [2, 7]))
      );
      this.pieces.push(
        new Piece(config("cyan", i, "rook", i === 0 ? [7, 0] : [0, 0]))
      );
      this.pieces.push(
        new Piece(config("hotpink", i, "rook", i === 0 ? [7, 7] : [0, 7]))
      );
    }
  }

  private renderSquare(i: number) {
    const x = i % 8;
    const y = Math.floor(i / 8);
    const black = (x + y) % 2 === 1;
    const color: 'black' | 'white' = black ? 'black' : 'white';
    const coordinates: Coordinates = [x,y]
    const piece = this.pieces.find(piece => {
      const isOccupied = piece.coordinates[0] === coordinates[0] && piece.coordinates[1] === coordinates[1]
      if(isOccupied){
        return piece
      }else return undefined
      })
    const config = {
      color: color,
      coordinates: coordinates,
      piece: piece
    }
    return new Square(config)
  }


  private arrangeSquares() {
    //here we'll take the piece in play and pass it to the squares. the square with the matching coordinates will render the piece
    //also run during initialization in the arrangePieces method.
    //this feels like its all the more reason to use coordinates from the viewpprt itself so that squares don't need to know this information. that way we would only be observing the piece that was in play. hm, no that would still be a problem. we would have to calculate the size of each square and do further calculations to determine piece position relative to the squares. square size would have to update if the viewport size changed for some reason. but that might not be a big deal. then the calculations would update from that. maybe a good way to actuall start this would be to write a little code pen experimenting with this idea.

    //ok but this is not a bad idea because it should limit rendering to one square at a time. the first version basically recreates the whole board every time
    for (let i = 63; i >= 0; i--) {
      this.squares.push(this.renderSquare(i));
    }
  }

  public updateSquare() {

  }

  public resetState() {

  }




}