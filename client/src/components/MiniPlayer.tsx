import { Progress } from '@/components/ui/progress';
import { Headphones, FastForward, Pause } from 'lucide-react';

const MiniPlayer = () => {
   return (
      <div className="mini-player bg-gray-900 w-dvw min-w-full fixed bottom-[70px] px-3 grid">
         <div className="song-information text-white flex py-3 items-center">
            <div className="thumbnail min-w-9">
               <img
                  className="w-9 h-9 rounded"
                  src="https://upload.wikimedia.org/wikipedia/vi/5/5a/BTS_Love_Yourself_Answer_album_cover.jpg"
                  alt=""
               />
            </div>

            <div className="grid px-3 gap-y-1 grow ">
               <h3 className="text-sm text-left font-bold truncate">
                  Love Yourself: Answer
               </h3>
               <span className="flex text-[#1db954]">
                  <Headphones className="h-3 w-3 mr-1" />
                  <p className="text-xs leading-none">BTS</p>
               </span>
            </div>

            <div className="player-controls flex items-center justify-center gap-x-3 [&>*]:w-8 [&>*]:h-8 [&>*]:rounded-full [&>*]:bg-white/15 [&>*]:p-2 [&>*]:cursor-pointer">
               <FastForward className="rotate-180" />
               <Pause />
               <FastForward />
            </div>
         </div>

         <Progress
            className="h-1 bg-white/30 [&>*]:bg-[#B2B2B2]"
            value={33}
         ></Progress>
      </div>
   );
};

export default MiniPlayer;
