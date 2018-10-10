// // navbar here
// import { Link } from 'react-router-dom';
// import GreetingContainer from './../greeting/greeting_container';
// import React from 'react';
// import { withRouter } from 'react-router-dom';
//
//
// const NavBar = () => {
//   const goToHomepage = () => {
//     debugger
//     if (location != "/"){
//       console.log("no")
//       console.log(props.location.pathname);
//       // props.history.push(`/`)
//     }
//   }
// // const currentLocation = () => {
// //   const that = this;
// //   return () => {
// //
// //   }
// // }
//
//   return (
//     <nav className="nav-bar">
//       <div className='mini-top-nav'>
//       </div>
//
//       <div className="nav-bar-main">
//       <ul className='left-nav-links'>
//         <li onClick={goToHomepage}>
//           <img className='oval_table_logo' src={window.staticImages.OvalTableLogo} location={props.location.pathname}/>
//         </li>
//       </ul>
//
//
//         <GreetingContainer />
//
//       </div>
//     </nav>
//   );
// };
//
// export default withRouter(NavBar);


// ***********
// ***********
// navbar here
import { Link } from 'react-router-dom';
import GreetingContainer from './../greeting/greeting_container';
import React from 'react';
import { withRouter } from 'react-router-dom';


const NavBar = (props) => {

  return (
    <nav className="nav-bar">
      <div className='mini-top-nav'>
      </div>

      <div className="nav-bar-main">
      <ul className='left-nav-links'>
        <li onClick={()=>{props.history.push(`/`)}}>
          <img className='oval_table_logo' src={window.staticImages.OvalTableLogo} />
        </li>
      </ul>


        <GreetingContainer />

      </div>
    </nav>
  );
};

export default withRouter(NavBar);
