import React,{useState} from "react";
// import "./Table.css"; // Import the CSS file for styling

export default function Table({ data, deletedata, editapidata }) {


  return (
    <div className="table-section">
      <table className="styled-table">
        <thead>
          <tr>
            <th>S.no</th>
            <th>Fullname</th>
            <th>Age</th>
            <th>Role</th>
            <th>Experience</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{item.fullname}</td>
              <td>{item.age}</td>
              <td>{item.role}</td>
              <td>{item.experience}</td>
              <td>
                <button
                  onClick={() => {
                    editapidata(item);
                  }}
                  type="button"
                  className="btn btn-warning"
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    deletedata(item.id);
                  }}
                  type="button"
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


// delete click event index vomponere with the itteration count

//  how to create a conncetion between the function call and defrintion