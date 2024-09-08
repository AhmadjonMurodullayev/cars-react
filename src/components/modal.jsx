import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader, ModalFooter } from "reactstrap";
import { nanoid } from "nanoid";

const GlobalModal = ({ form, setForm, open, toggle, cars, setCars, update }) => {
  useEffect(() => {
    if (update) {
      setForm(update);
    }
  }, [update, setForm]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (update.id) {
      setCars(cars.map((car) =>
        car.id === update.id ? { ...form, id: car.id } : car
      ));
    } else {
      setCars([...cars, { ...form, id: nanoid() }]);
    }
    toggle(); // Modalni yopish
  };

  return (
    <Modal isOpen={open} toggle={toggle} className="modal-dialog-centered">
      <ModalHeader toggle={toggle}>
        <h2>{update.id ? "Edit Car" : "Add Car"}</h2>
      </ModalHeader>
      <ModalBody>
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleSubmit} id="form">
              <input
                value={form.name || ""}
                type="text"
                name="name"
                placeholder="Name"
                onChange={handleChange}
                className="form-control my-2"
              />
              <input
                value={form.price || ""}
                type="number"
                name="price"
                placeholder="Price"
                onChange={handleChange}
                className="form-control my-2"
              />
              <input
                value={form.year || ""}
                type="number"
                name="year"
                placeholder="Year"
                onChange={handleChange}
                className="form-control my-2"
              />
              <input
                value={form.color || ""}
                type="text"
                name="color"
                placeholder="Color"
                onChange={handleChange}
                className="form-control my-2"
              />
            </form>
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <button className="btn btn-success" form="form" type="submit">
          Save
        </button>
      </ModalFooter>
    </Modal>
  );
};

export default GlobalModal;
