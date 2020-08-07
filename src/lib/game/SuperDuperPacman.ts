import { GameBoardItemType,GameDirectionMap,GameDirection, pillMax, GameDirectionReverseMap } from '../Map';
import Item from './Item';

class SuperDuperPacman extends Item implements GameBoardItem {

  type:GameBoardItemType = GameBoardItemType.PACMAN;

  pursuit: string | boolean = false;

  score:number = 0;



  /**
   * Returns the next move from the keyboard input
   * 
   * @method getNextMove
   * @return {GameBoardItemMove | boolean} Next move
   */
  getNextMove(): GameBoardItemMove | boolean {
   

    const { moves } = this.piece;
    // moves is an object of possible moves (can't go into walls)

    // let dangerSeen:boolean = false;

    const reversePiece:GameBoardPiece = this.piece;
    const reverseDirection:string = GameDirectionMap[this.direction];

    const newMoves:GameBoardItemMoves = {};

    for (const idx in moves) {
      if (idx) {
        const move = moves[idx];
        // only if the next position isn't a pill (cherry)
        if (this.items[move.y][move.x].type !== GameBoardItemType.PILL) {

          const ghost = this.findItem(idx, GameBoardItemType.GHOST);
          // const biscuit = this.findItem(idx, GameBoardItemType.BISCUIT);
          // let dangerAhead = false;
          // if (ghost) {
          //   this.pursuit = idx;
          //   return {piece: move, direction: GameDirectionMap[idx] };
          // }
          // Check if pacman is ahead and dangerous (less than 5 sec left on timer)
          // if (ghost && typeof ghost.pillTimer === 'number' && ghost.pillTimer < 5) {
          //   dangerAhead = true;  
          //   dangerSeen = true;
          // }

          // If ghost is on timer
          // if (biscuit) {
          //   this.pursuit = idx;
          //   return {piece: move, direction: GameDirectionMap[idx] };
          // }

          // If there is no danger ahead, and we aren't going backwards, go towards biscuit
          // if (!dangerAhead && GameDirectionMap[GameDirectionReverseMap[idx]] !== this.direction) {
          //   newMoves[idx] = move;
          // } else if (GameDirectionMap[GameDirectionReverseMap[idx]] === this.direction) {
          //   reversePiece = move;
          //   reverseDirection = idx;
          // }

        }
      }
    }

    // if (dangerSeen) {
    //   newMoves[reverseDirection] = reversePiece;
    // }

    const newMovesIdx = Object.keys(newMoves);

    if (newMovesIdx.length < 1) return false;

    // Increase chance of moving to ghost
    // if (this.pursuit && newMovesIdx.length > 1) {
    //   if (newMovesIdx.indexOf(this.pursuit.toString()) !== -1) {
    //     newMovesIdx.push(this.pursuit.toString());
    //   }
    //   this.pursuit = false;
    // }

    const move = Math.floor(Math.random() * newMovesIdx.length);
    return {piece: newMoves[newMovesIdx[move]], direction: GameDirectionMap[newMovesIdx[move]]};

  }


  //   /**
  //    * Move Pacman and "eat" the item
  //    * 
  //    * @method move
  //    * @param {GameBoardPiece} piece 
  //    * @param {GameDirection} direction 
  //    */
  move(piece: GameBoardPiece, direction: GameDirection):void {

    const item = this.items[piece.y][piece.x];
    if (typeof item !== 'undefined') {
      this.score += item.type;
      switch(item.type) {
        case GameBoardItemType.PILL:
          this.pillTimer.timer = pillMax;
          break;
        case GameBoardItemType.GHOST:
          if (typeof item.gotoTimeout !== 'undefined')
            item.gotoTimeout();
          break;
        default: break;
      }
    }
    this.setBackgroundItem({ type: GameBoardItemType.EMPTY });
    this.fillBackgroundItem();

    this.setPiece(piece, direction);
    this.items[piece.y][piece.x] = this;
  }
}

export default SuperDuperPacman;