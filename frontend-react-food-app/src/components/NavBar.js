// import React, { useState, useEffect } from "react";
// import M from "materialize-css";
// import { Link, useHistory } from "react-router-dom";


// const NavBar = () => {
//   const [search, setSearch] = useState("");
//   let history = useHistory();

//   const SearchPage = () => {
//     history.push(`/search/q=${search}`);
//   };

//   useEffect(() => {
//     M.AutoInit();
//   }, []);

//   return (
//     <div>
//       <nav >
//         <div className="nav-wrapper brown darken">
//           <div className="container">
//             <Link to="/" className="brand-logo">
//               <span>Chef Training App</span>
//             </Link>
//             <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            
//             <ul className="right hide-on-med-and-down">
//               <li>
//                 <form onSubmit={SearchPage}>
//                   <input
//                     className="mobile-input input-field"
//                     value={search}
//                     onChange={(e) => setSearch(e.target.value)}
//                     type="text"
//                     placeholder="Search for a Meal..."
//                     style={{ paddingLeft: 30 }}
//                   />
//                   <button className="btn btn-success"type="submit" >Go!</button>
//                 </form>
//               </li>
//               <li>
//                 <Link to="/">Home</Link>
//               </li>
//               <li><Link to="/random">
//               Popular Meal
//             </Link></li>
//             <li>
//                 <Link to="/categories">Categories</Link>
//               </li>
            
//               <li>
//                 <Link to="/ingredients/0">Ingredients</Link>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </div>
//   ); 
// };

// export default NavBar;