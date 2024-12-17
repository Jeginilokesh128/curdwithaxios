import axios from "axios";
import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

const Formdata = ({
  closefunction,
  postgetdata,
  popupdatafunction,
  formData,
  setFormData,
  updatebutton,
  updatedata,
}) => {
  console.log(updatebutton);
  debugger;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const { fullname, age, role, experience } = formData;
  const handleSubmit = async (e) => {
    debugger;
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:4000/userdata",
        formData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      debugger;

      if (response) {
        toast.success("Form submitted successfully!");
        setFormData({
          fullname: "",
          age: "",
          role: "",
          experience: "",
        });
        closefunction();
        postgetdata();
      } else {
        toast.error("Failed to submit form. Please try again.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "auto" }}>
      <div className="form-overlay">
        <form>
          <h2> Basic details </h2>
          <div className="form-group">
            <label>Fullname:</label>
            <input
              onChange={(e) => {
                handleChange(e);
              }}
              className="form-control mt-2"
              type="text"
              name="fullname"
              placeholder="Enter FullName"
              value={fullname}
            />
          </div>
          <div className="form-group">
            <label>Age:</label>
            <input
              className="form-control mt-2"
              type="number"
              name="age"
              placeholder="Enter age"
              onChange={(e) => {
                handleChange(e);
              }}
              value={age}
            />
          </div>
          <div className="form-group">
            <label>Role:</label>
            <input
              className="form-control mt-2"
              type="text"
              name="role"
              placeholder="Enter role"
              onChange={(e) => {
                handleChange(e);
              }}
              value={role}
            />
          </div>
          <div className="form-group">
            <select
              className="form-control mt-2"
              name="experience"
              onChange={(e) => {
                handleChange(e);
              }}
              value={experience}
            >
              <option value="" disabled selected>
                Select your Experience
              </option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
            </select>
          </div>
          <div className="mt-3 float-end  button-section">
            {updatebutton ? (
              <button
                type="button"
                class="btn btn-success foat-end"
                onClick={() => {
                  updatedata(formData);
                  debugger;
                }}
              >
                update
              </button>
            ) : (
              <button
                type="button"
                class="btn btn-success foat-end"
                onClick={(e) => {
                  handleSubmit(e);
                }}
              >
                Post
              </button>
            )}
            <button
              type="button"
              class="btn btn-danger float-end"
              onClick={() => {
                closefunction();
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Formdata;

//how to make onchage for update how to bind the value for editing in the select
