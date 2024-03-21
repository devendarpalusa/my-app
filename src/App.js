 import React from "react";
 
// import AddCircle from "./components/functional/addcircle/addcircle";
// import UseStateExample from "./components/functional/hooks/usestateexample1";
// import UseStateExample3 from "./components/functional/hooks/usestateexample3";
// import Counter from "./components/functional/state/counter";
// import MountingPhase from "./components/functional/lifecycle/mountingphase";
// import ParentCopmponet from "./components/functional/purecomponent/purecomponent";
// import Corousel from "./components/functional/react-bootstrap/coursel";
// import AccordionComponent from "./components/functional/react-bootstrap/bootstrap";
// import Counter from "./components/functional/state/counter";
// import ContentPage from "./components/functional/styles/bootstrap/content";
  //  import ButtonComponent from "./components/functional/button/button-componemt";
// import ImageComponent from "./components/functional/image/image-component";
//  import Devendar,{ComponentB,ComponentC} from "./components/functional/export-import/export-import";
//  import ConditionalRender from "./components/functional/Render/index";

  //  import profile from "./components/functional/props/profile";
// import Profile from "./components/functional/props/profile";
// import UsersData from "./components/functional/axios/user";
// import Profile from "./components/functional/props/profile";
// import DNASpinner from "./components/functional/spinner/dna";
// import Counter from "./components/functional/state/counter";
// import DNASpinner from "./components/functional/spinner/dna";
// import "./App.css"
// import ContentPage from "./components/functional/styles/bootstrap/content";
// import Card from "./components/functional/styles/bootstrap/card";
// import ContentPage from "./components/functional/styles/bootstrap";
// import Card from "./components/functional/styles/bootstrap/card";
// import ContentPage from "./components/functional/styles/bootstrap/content";

// import Jsxfunctional from "./components/functional/jsx.js/Jsxfunctional";
// import UnControlledComponent from "./components/functional/useref/uncontrolled";
// import ControlledComponent from "./components/functional/useref/controlled";
// import UseeffectExample from "./components/functional/useeffect/useeffectExample1";
// import UseEffectExample2 from "./components/functional/useeffect/useeffect2";
// import UseEffectExample from "./components/functional/useeffect/table";
// import UseEffectExample4 from "./components/functional/useeffect/useffectCard";
// import Routingnavbar from "./components/functional/routeing/navbar";
// import NavigationStack from "./components/functional/navigation/navigation";
// import AddCircle from "./components/functional/addcircle/addcircle";
import { useDispatch, useSelector } from "react-redux";
import { BuyChacolateaction } from "./components/functional/redux/action";
import NavigationStack from "./components/functional/navigation/navigation";
import { Axios } from "axios";
import { ButtonGroup } from "react-bootstrap";
import ButtonComponent from "./components/functional/button/button-componemt";
import Dnaspinner from "./components/functional/spinner/dna";
import UseReducer from "./components/functional/usereducer/usereducer";
import UseEffectExample4 from "./components/functional/useeffect/useffectCard";
import ImageComponent from "./components/functional/image/image-component";
import Orderlist from "./components/functional/list/orderdlist";
import UnorderList from "./components/functional/list/unorderlist";
function App() {
  // const{availableChacolate,totalChacolates,Counter}=useSelector(state=>state)
  // const dispatch=useDispatch()
  // const BuyChacolate=()=>{
  //   dispatch(BuyChacolateaction(3))
  // }

 return(
    <div> 
{/* <UnControlledComponent/> */}
{/* <ControlledComponent/> */}
{/* <UseeffectExample/> */}
{/* <UseEffectExample2/> */}
 {/* <UseEffectExample/>  */}
 {/* <NavigationStack/> */}
{/* <UseEffectExample4/> */}
{/* <ControlledComponent/> */}
{/* <AddCircle/> */}
 {/* <NavigationStack/> */}
{/* /> */}
{/* <UseEffectExample4/> */}
{/* <h1>{availableChacolate}</h1>
<button onClick={BuyChacolate}>button</button> */} 
{/* <NavigationStack/>  */}
{/* <Dnaspinner/> */}
<ButtonComponent/>
<ImageComponent/>
<Orderlist />
<UnorderList/>

  </div>
  );
  
}

export default App;



// function Wrapper(props){
//   const{bgColor,children}=props
//   return(
//     <div style={{flex:1,backgroundColor:bgColor}} >
//       {
//         children
//       }


//     </div>

//   )
// }