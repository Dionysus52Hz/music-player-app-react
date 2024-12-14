import Square from './Square';
import { ReactElement, useState } from 'react';
import { X, Circle } from 'lucide-react';

export default function Board() {
   const [xIsNext, setXIsNext] = useState(true);
   const [squares, setSquares] = useState(Array(9).fill(null));

   const handleValue = (value: unknown) => {
      if (value === 'x') {
         return <X />;
      } else if (value === 'o') {
         return <Circle />;
      } else return null;
   };

   const handleClick = (i: number) => {
      if (squares[i] || caculateWinner(squares)) {
         return;
      }
      const copySquares = squares.slice();
      if (xIsNext) {
         copySquares[i] = 'x';
      } else {
         copySquares[i] = 'o';
      }
      setSquares(copySquares);
      setXIsNext(!xIsNext);
   };

   const winner = caculateWinner(squares);
   let status;
   if (winner) {
      status = 'Winner is: ' + winner;
   } else {
      status = 'Next player is: ' + (xIsNext ? 'X' : 'O');
   }

   return (
      <>
         <h1>{status}</h1>
         <ul className="board grid grid-rows-3 grid-cols-3 w-fit">
            {Array.from({ length: 9 }, (_, i) => (
               <li key={i}>
                  <Square
                     value={handleValue(squares[i])}
                     onSquareClick={() => handleClick(i)}
                  ></Square>
               </li>
            ))}
         </ul>
      </>
   );
}

const caculateWinner = (squares: Array<ReactElement>) => {
   const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
   ];
   for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
         squares[a] &&
         squares[a] === squares[b] &&
         squares[a] === squares[c]
      ) {
         console.log(123);
         return squares[a];
      }
   }
   return null;
};
