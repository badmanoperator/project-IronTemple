import SideBar from "./SideBar";
import DropDownSplit from "./DropDownSplit";
import { BiPlus } from "react-icons/bi";
import DropDownExcercise from "./DropDownExcercise";
import DropDownUnits from "./DropDownUnits";
import { useState } from "react";

function App() { 

  const [weight,setWeight] = useState(null);
  const [reps,setReps] = useState(null);
  const [series,setSeries] = useState(null);

  const [excercise,setExercise] = useState("Exercise");

  const [split,setSplit] = useState("Push");

  const [units,setUnits] = useState("lb");
  

  return (
    <div className="absolute h-full w-full bg-[#121212] overflow-hidden">

      <h1 className="text-white relative left-32 top-4 text-4xl font-medium">
        <span className=" text-log_purple">Log</span> your workout
      </h1>

      <div className="entries-menu relative left-32 w-4/5 top-32 h-[296px]
      flex">
        <div className="entries-left bg-grey_light flex-col rounded-[36px]">
          <h2 className="px-24 py-6">What's your split?</h2>
          <div className="relative flex justify-center">
            <DropDownSplit text="Push" items={["Push","Pull","Legs"]}
              value={split} onClick = {(e) => setSplit(e.target.innerHTML)}
            />
          </div>

          <div className="relative flex justify-center mt-12">
            <input type="text" placeholder="...Add Category" class="input input-bordered input-accent max-w-xs w-[225px] mr-2 rounded-[36px] bg-grey_light border-2"/>
            <BiPlus size={36} className= "h-full absolute right-4 text-write_teal rounded-md border-2 border-write_teal hover:bg-accent-focus hover:text-white transition-all duration-300 hover:cursor-pointer "/>
          </div>

          
        </div>

        <div className="entries-right bg-grey_light flex-col mx-auto rounded-[36px]">
          <h2 className=" px-96 py-6">The main event!  Record your progress:</h2>

          <div className="relative flex items-center">
            <h3 className="px-12">Excercise:</h3>
            <DropDownExcercise text = "Incline Bench Press" items = {["Placeholder items","are the best kind","of items you could have"]}
              value={excercise} onClick = {(e) => setExercise(e.target.innerHTML)}
            />
          </div>
          
          <div className="relative flex items-center mt-12">
            <h3 className="px-12">Volume:</h3>
            <input type="text" placeholder="_" class="input input-bordered input-accent max-w-xs w-[100px] mr-2 rounded-[36px] border-2 bg-grey_light"
              onInput={(e) => setWeight(e.target.value)}
            />
            <DropDownUnits text = "lb" items ={["lb","kg"]}
              value={units} onClick = {(e) => setUnits(e.target.innerHTML)}
            />
            <h3 className="px-5">for</h3>
            <input type="text" placeholder="_" class="input input-bordered input-accent max-w-xs w-[100px] mr-2 rounded-[36px] border-2 bg-grey_light"
              onInput={(e) => setReps(e.target.value)}
            />
            <h3 className="px-4">reps and</h3>
            <input type="text" placeholder="_" class="input input-bordered input-accent max-w-xs w-[100px] mr-2 rounded-[36px] border-2 bg-grey_light"
              onInput={(e) => setSeries(e.target.value)}
            />
            <h3 className="px-4">sets.</h3>

            <button class="btn absolute right-8 w-36 bg-confirm_green bg-opacity-75 hover:bg-green-700"
            onClick={() => {
              alert(split + ": El volumen es " + weight + " " + units +" x " + reps + " x " + series + " de " + excercise);
            }}>
              ADD
            </button>
          </div>
        </div>
      </div>
      
      <div className='flex'>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
