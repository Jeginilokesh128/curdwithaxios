// import axios from "axios";

//create,post,delete,put



import axios from "axios";
//for the get method single paramter is enough onlu the api end point
let url = "http://localhost:4000/userdata";
// this is not reusable function because here ue pass the varible dart with out using the paramter we are calling the global varibel the function is depen on the global varible
export let getDatafunction = async () => {
  try {
    let getdata = await axios.get(url);
   
    return getdata.data;
   
  } catch (error) {
    return error
    console.error("Error fetching data:", error);
  }
};



export let deletedapidata = async (id) => {
  try {
    console.log("Deleting data with ID:", id);

    // Send DELETE request
    let response = await axios.delete(`${url}/${id}`);

    console.log("Data deleted successfully:", response.data);

    // Return the response to allow further processing in the UI
    return response.data;
  } catch (error) {
    // Log error details
    console.error(
      "Error occurred while deleting data:",
      error.response ? error.response.data : error.message
    );

    // Re-throw error to handle it in the calling component
    throw error;
  }
};

//update 


