import {BiUser, BiCalendar,BiAddToQueue,BiDumbbell,BiChat} from "react-icons/bi"

const SideBar = () => {
   return (
    <div className= "fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-grey_dark text-white">
        <BiDumbbell size= "55" className="dumbbell text-logo_blue mb-20  mt-3 mx-auto"/>
        <SideBarIcon icon ={<BiUser size= "45"/>} text= "My Profile"/>
        <SideBarIcon icon ={<BiAddToQueue size= "45"/>} text= "Add Workout"/>
        <SideBarIcon icon ={<BiCalendar size= "45"/>} text= "Calendar"/>
        <SideBarIcon icon ={<BiChat size= "45"/>} text= "Messages" />
    </div>
   );
};

const SideBarIcon = ({icon, text = 'tooltip'}) => (
    <div className="sidebar-icon group">
        {icon}
        
        <span className="sidebar-tooltip group-hover:scale-150">
            {text}
        </span>
    </div>
);
export default SideBar;