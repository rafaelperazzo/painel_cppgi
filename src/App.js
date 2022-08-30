import './App.css';
import {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";
import Editais from "./Select";

function App() {
  const [editais,setEditais] = useState([]);
  document.title = "Painel de Estatísticas CONPESQ"
  useEffect(()=>{
    axios.get("https://sci01-ter-jne.ufca.edu.br/cppgi/api/editais")
        .then(res=>{
          const dados = res.data;
          setEditais(dados);
        });
  });
  return (
    <div className="App">
        <h1>Painel de estatísticas</h1>
        <Grid container columnSpacing={2} rowSpacing={2}>
            <Editais editais={editais}/>
        </Grid>
    </div>
  );
}

export default App;
