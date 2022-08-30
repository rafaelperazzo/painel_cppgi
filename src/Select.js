import {Alert, Autocomplete, Grid, TextField} from "@mui/material";
import {useState} from "react";
import Total from "./Total";
import Tabela from "./Tabela";
import GraficoDatas from "./GraficoDatas";

function Editais(props) {
    function handleChange(e,v) {
        try {
            setEdital(v.id);
        }
        catch (err) {
            setEdital(0);
        }
    }
    function handleChangeTipoTrabalho(e,v) {
        try {
            setTipoTrabalho(v.id);
        }
        catch (err) {
            setTipoTrabalho(4);
        }

    }

    function handleChangeArea(e,v) {
        try {
            setArea(v.label);
        }
        catch (err) {
            setArea("TODAS");
        }
    }
    const [edital,setEdital] = useState(0);
    const [tipo_trabalho,setTipoTrabalho] = useState(4);
    const [area,setArea] = useState("TODAS");

    const trabalhos = [
        {label: "TODOS",id:4},
        {label: "RESUMO SIMPLES",id: 0},
        {label: "RESUMO EXPANDIDO",id:1},
        {label: "TRABALHO COMPLETO",id:2}
    ];
    const areas = [
        {label: "TODAS"},
        {label: "Ciências da Vida"},
        {label: "Humanidades"},
        {label: "Ciências Exatas, Tecnológicas e Multidisciplinar"}
    ];
    return(
        <>
          <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">
              <Autocomplete
                  onChange={handleChange}
                  isOptionEqualToValue={(option, value) => option.id === value.id}
                  disablePortal
                  id="combo"
                  options={props.editais}
                  sx={{ width: 400 }}
                  renderInput={(params) => <TextField {...params} label="Evento" />}
              />
          </Grid>
            <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    onChange={handleChangeTipoTrabalho}
                    disablePortal
                    id="categoria"
                    options={trabalhos}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} label="Tipo de trabalho" />}
                />
            </Grid>
            <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">
                <Autocomplete
                    isOptionEqualToValue={(option, value) => option.id === value.id}
                    onChange={handleChangeArea}
                    disablePortal
                    id="modalidade"
                    options={areas}
                    sx={{ width: 400 }}
                    renderInput={(params) => <TextField {...params} label="Grande Área" />}
                />
            </Grid>
            <Total edital={edital} tipo={4} tipoTrabalho={tipo_trabalho} area={area}/>
            <div style={{ width: '100%', padding:'10px'}}>
                <Alert variant={"filled"} icon={false} severity="info">Lista de Submissões</Alert>
            </div>
            <Tabela edital={edital} tipo={1} tipoTrabalho={tipo_trabalho} area={area}/>
            <div style={{ width: '100%',height:'400px', padding:'10px'}}>
                <GraficoDatas edital={edital} tipo={5} tipoTrabalho={tipo_trabalho} area={area}/>
            </div>
      </>
    );
}

export default Editais;