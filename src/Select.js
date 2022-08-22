import {Autocomplete, Grid, TextField} from "@mui/material";
import {useState} from "react";
import Total from "./Total";


function Editais(props) {
    function handleChange(e,v) {
        setEdital(v.id);
    }
    const [edital,setEdital] = useState(0);
    return(
        <>
          <Grid item={true} xs={4}>
              <Autocomplete
                  onChange={handleChange}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  disablePortal
                  id="combo"
                  options={props.editais}
                  sx={{ width: 400 }}
                  renderInput={(params) => <TextField {...params} label="Editais" />}
              />
          </Grid>
          <Grid item={true} xs={4}>
            <Total edital={edital}/>
          </Grid>
      </>
    );
}

export default Editais;