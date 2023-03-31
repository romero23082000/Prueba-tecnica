import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/system";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faReact,
  faAngular,
  faVuejs,
} from "@fortawesome/free-brands-svg-icons";

const NewSelect = (props) => {
  const { notice, setNotice, setPage } = props;
  const handleChange = (event) => {
    setNotice(event.target.value);
    localStorage.setItem("filter", event.target.value);
    setPage(1);
  };
  console.log(notice);
  return (
    <Box
      sx={{
        minWidth: 250,
        width: "920px",
        justifyContent: { md: "center", xs: "center", lg: "left" },
        display: "flex",
      }}
    >
      <FormControl sx={{ width: "230px" }} size="small">
        <InputLabel>Select your news</InputLabel>
        <Select value={notice} onChange={handleChange} label="Select your news">
          <MenuItem value={"react"}>
            <FontAwesomeIcon icon={faReact} style={{ color: "#11d6e4" }} />
            &nbsp; React
          </MenuItem>
          <MenuItem value={"angular"}>
            <FontAwesomeIcon icon={faAngular} style={{ color: "#ed0707" }} />
            &nbsp; Angular
          </MenuItem>
          <MenuItem value={"vue"}>
            <FontAwesomeIcon icon={faVuejs} style={{ color: "#2ead76" }} />
            &nbsp; Vue
          </MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
};

export default NewSelect;
