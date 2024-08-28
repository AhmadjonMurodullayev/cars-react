import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import  GlobalModal from '../../components/modal'
 
function Index() {
  const [open, setOpen] = useState()
  const [cars, setCars] = useState([
    { id: 1, name: "ferari", price: 100, year: 2024, color: "bulur" },
    { id: 1, name: "ferari", price: 100, year: 2024, color: "bulur" },
    { id: 1, name: "ferari", price: 100, year: 2024, color: "bulur" }
  ]);

  return (
    <div className="container">
      <GlobalModal open={open} toggle={()=> setOpen(false)} />
      <div className="row">
        <div className="col-md-3 my-4">
          <button className="btn btn-primary" onClick={()=> setOpen(true)}>Open modal</button>
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
              {cars.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.year}</td>
                    <td>{item.color}</td>
                    <td>
                      <NavLink to={`/cars${item.id} `} className="btn btn-info">

                      view
                      </NavLink>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Index;
