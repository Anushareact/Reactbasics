import React from 'react'

import { useState } from "react";
//creating a form and printing the values that user enterd
import FormControl from "@mui/material/FormControl";
import { Box, Button, Stack, TextField } from "@mui/material";
const UsestateHook = () => {
      const [FirstName, setFirstName] = useState("");
      const [LastName, setLastName] = useState("");
      const [data, setData] = useState([]);
      const HandleSubmit = (e) => {
        e.preventDefault();
        console.log("11");
        setData([...data, FirstName, LastName]);
        console.log(data, "data");
      };
      const FirstnameHandler = (e) => {
        console.log("name1");
        setFirstName(e.target.value);
      };
      const LastnameHandler = (e) => {
        console.log("name2");
        setLastName(e.target.value);
      };

      const HandleCancel = () => {
        console.log("ncancel");
        setFirstName("");
        setLastName("");
      };

      const FormStyles = {
        form: {
          border: "2px solid green",
          margin: "5% 30%",
          borderRadius: "15px",
          backgroundColor: "#80ffd4",
          maxHeight: "800px",
          maxWidth: "400px",
        },
        textfeild: {
          margin: "15px 20px",
        },
        BoxStyles: {
          display: "flex",
          gap: 5,
          flexWrap: "wrap",
          margin: "5px 10px 20px 12px",
        },
        SubmitButtonStyles: {
          marginLeft: "10%",
          backgroundColor: "white",
          border: "2px solid pink",
          borderRadius: "15px",
          padding: "10px 40px",
        },
        CancelButtonStyles: {
          backgroundColor: "white",
          border: "2px solid pink",
          borderRadius: "15px",
          padding: "10px 40px",
        },
      };
  return (
    <div>
      <p>UsestatehookExample1</p>

      <Stack style={FormStyles.form}>
        <div>Add Details</div>
        <FormControl>
          <TextField
            id="outlined-basic"
            label="FirstName"
            variant="outlined"
            sx={FormStyles.textfeild}
            name="FirstName"
            value={FirstName}
            onChange={(e) => FirstnameHandler(e)}
          />
          <TextField
            id="outlined-basic"
            label="LastName"
            variant="outlined"
            sx={FormStyles.textfeild}
            name="LastName"
            value={LastName}
            onChange={(e) => LastnameHandler(e)}
          />

          <Box sx={FormStyles.BoxStyles}>
            <Button
              sx={FormStyles.SubmitButtonStyles}
              type="submit"
              variant="solid"
              onClick={(e) => HandleSubmit(e)}
            >
              Submit
            </Button>
            <Button
              sx={FormStyles.CancelButtonStyles}
              variant="solid"
              onClick={HandleCancel}
            >
              Cancel
            </Button>
          </Box>
        </FormControl>
      </Stack>
      <div className="dispaly">
        {data.map((i) => (
          <>
            <p>{i}</p>
          </>
        ))}
      </div>
    </div>
  );
}

export default UsestateHook
