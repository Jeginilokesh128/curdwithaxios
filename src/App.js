import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Table from "./components/Table";
import Formdata from "./components/Form";

const App = () => {
  const [jsondata, setjsonData] = useState([]);
  const [updatebutton, setupdatebutton] = useState(false);
  const [openform, setopenform] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    age: "",
    role: "",
    experience: "",
  });

  const url = "http://localhost:4000/userdata"; // Base URL

  // Fetch data on component mount
  useEffect(() => {
    jsonfunctiondatacall();
  }, []);

  // Fetch all data
  const jsonfunctiondatacall = async () => {
    try {
      const response = await axios.get(url);
      setjsonData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // Delete a record
  const deletedata = async (id) => {
    try {
      await axios.delete(`${url}/${id}`);
      jsonfunctiondatacall(); // Refresh the data
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };

  // Close form and reset states
  const closeform = () => {
    setopenform(false);
    setFormData({
      fullname: "",
      age: "",
      role: "",
      experience: "",
    });
    setupdatebutton(false);
  };

  // Open the form
  const popupfunction = () => {
    setopenform(true);
  };

  // Edit functionality
  const editapidata = (rowdata) => {
    setFormData(rowdata);
    popupfunction();
    setupdatebutton(true);
  };

  // Update functionality
  const updatedata = async (data) => {
    const productdata = {
      fullname: data.fullname,
      age: data.age,
      role: data.role,
      experience: data.experience,
    };
    try {
      await axios.put(`${url}/${data.id}`, productdata);
      jsonfunctiondatacall(); // Refresh the data
      closeform()
    } catch (err) {
      console.error("Error updating data:", err);
    }
  };

  return (
    <div className="App-section m-5">
      <div className="product-add d-flex justify-content-evenly">
        <h3>Add Products</h3>
        <button
          onClick={popupfunction}
          type="button"
          className="btn btn-primary"
        >
          Add Details
        </button>
      </div>

      <Table
        data={jsondata}
        deletedata={deletedata}
        editapidata={editapidata}
      />

      {openform && (
        <Formdata
          formData={formData}
          setFormData={setFormData}
          popupdatafunction={popupfunction}
          closefunction={closeform}
          postgetdata={jsonfunctiondatacall}
          updatebutton={updatebutton}
          updatedata={updatedata}
        />
      )}
    </div>
  );
};

export default App;
