import { Button } from '@/components/ui/button';
import { MouseEventHandler, ReactElement } from 'react';

export default function Square({
   value,
   onSquareClick,
}: {
   value: ReactElement | null;
   onSquareClick: MouseEventHandler | undefined;
}) {
   return (
      <Button
         className="square ring-0 focus:ring-0 w-12 h-12"
         variant="outline"
         onClick={onSquareClick}
      >
         {value}
      </Button>
   );
}
