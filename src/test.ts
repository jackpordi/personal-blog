export type Array3<T> = [ T, T, T ];

type Piece = "X" | "O";

type Cell = undefined | Piece;

type Board = Array3<Array3<Cell>> ;

type FullBoard = Array3<Array3<Piece>>; 

type InitialBoard = [
  [ undefined, undefined, undefined ],
  [ undefined, undefined, undefined ],
  [ undefined, undefined, undefined ],
];

type InitialGame = [];

type Position = [ 0 | 1 | 2, 0 | 1 | 2];

type Game = Position[];

type Ended = FullBoard; // TODO: Check win conditions

type Play<P extends Position, G extends Game> = G extends FullBoard ? G : [ P, ...G ];

type IsValid<G extends Game> = G extends FullBoard ? false : true;

type PEqual<P1 extends Position, P2 extends Position> =
  P1 extends [ infer X1, infer Y1 ] 
    ? P2 extends [ infer X2, infer Y2 ]
      ? X1 extends X2
        ? Y1 extends Y2
          ? true
          : false
        : false
      : never
    : never;

type AlreadyPlayed<P extends Position, G extends Game> = G extends [] 
  ? false 
  : G extends [ infer LastMove, ...(infer Previous) ]
    ? LastMove extends Position 
      ? PEqual<P, LastMove> extends true
        ? true
        : Previous extends Game
          ? AlreadyPlayed<P, Previous>
          : never
      : never
    : never;

type NextTurn<P extends Piece> = P extends "X" ? "O" : "X";

type WhoseTurn<G extends Game> = G extends [ infer _, ...(infer Previous) ]
    ? Previous extends Game 
      ? NextTurn<WhoseTurn<Previous>> 
      : never
    : "X";


type FirstTurn = WhoseTurn<InitialGame>;
type FirstMove = Play<[ 1, 1 ], InitialGame>;

type Check = AlreadyPlayed<[ 1, 2 ], FirstMove>;

type SecondTurn = WhoseTurn<FirstMove>;
type SecondMove = Play<[ 1, 2 ], FirstMove>;

type ThirdTurn = WhoseTurn<SecondMove>;
type ThirdMove = Play<[ 1, 2 ], SecondMove>;
