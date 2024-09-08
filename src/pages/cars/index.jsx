// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// import  GlobalModal from '../../components/modal'
 
// function Index() {
//   const [open, setOpen] = useState(false)
//   const [update, setUpdet] = useState({})
//   const [cars, setCars] = useState([
//     { id: 1, name: "ferari", price: 100, year: 2024, color: "bulur" },
//     { id: 1, name: "ferari", price: 100, year: 2024, color: "bulur" },
//     { id: 1, name: "ferari", price: 100, year: 2024, color: "bulur" }
//   ]);
  
//   const editModal =(item)=>{
//     setUpdet(item)
//     setOpen(true)

//   }
//   const toggle =()=>{
//     setOpen(false)
//     setUpdet({})

//   }
//   return (
//     <div className="container">
//       <GlobalModal open={open} toggle={toggle} cars={cars} setCars={setCars} update={update} />
//       <div className="row">
//         <div className="col-md-3 my-4">
//           <button className="btn btn-primary" onClick={()=> setOpen(true)}>Open modal</button>
//         </div>
//       </div>
//       <div className="row">
//         <div className="col-md-8">
//           <table className="table table-bordered">
//             <thead>
//               <tr>
//                 <th>T/r</th>
//                 <th>Name</th>
//                 <th>Price</th>
//                 <th>Year</th>
//                 <th>Color</th>
//                 <th>Action</th>
//               </tr>
//             </thead>
//             <tbody>
//               {cars.map((item, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{index + 1}</td>
//                     <td>{item.name}</td>
//                     <td>{item.price}</td>
//                     <td>{item.year}</td>
//                     <td>{item.color}</td>
//                     <td>
//                       <NavLink to={`/cars${item.id} `} className="btn btn-info">
//                       view
//                       </NavLink>
//                       <button className="btn btn-waring" onClick={(item)=>editModal}>edit</button>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Index;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import GlobalModal from '../../components/modal';

function Index() {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({});
  const [cars, setCars] = useState([
    { id: 1, name: "Ferrari", price: 100, year: 2024, color: "Blue" },
    { id: 2, name: "Tesla", price: 200, year: 2024, color: "Red" },
    { id: 3, name: "BMW", price: 300, year: 2024, color: "Black" }
  ]);

  const editModal = (item) => {
    setForm(item);
    setOpen(true);
  };

  const toggle = () => {
    setOpen(false);
    setForm({});
  };

  return (
    <div className="container">
      <GlobalModal open={open} toggle={toggle} form={form} setForm={setForm} cars={cars} setCars={setCars} update={form} />
      <div className="row">
        <div className="col-md-3 my-4">
          <button className="btn btn-primary" onClick={() => setOpen(true)}>Open Modal</button>
        </div>
      </div>
      <div className="row">
        <div className="col-md-8">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>T/r</th>
                <th>Name</th>
                <th>Price</th>
                <th>Year</th>
                <th>Color</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>{item.price}</td>
                  <td>{item.year}</td>
                  <td>{item.color}</td>
                  <td>
                    <NavLink to={`/cars/${item.id}`} className="btn btn-info">
                      View
                    </NavLink>
                    <button className="btn btn-warning" onClick={() => editModal(item)}>Edit</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Index;
