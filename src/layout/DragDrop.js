import Drag from './Drag'
import Nav from './Nav';
import './design/Project.css';
import SideNav from './SideNav';
import NavBar from './NavBar';
const DragDrop = () => {
  return ( 
    <div className="ProjectPage">
            <Nav /> <SideNav />
            <div className="nav2">
                <NavBar />
                <Drag />
            </div>
        </div>
   );
}
 
export default DragDrop;