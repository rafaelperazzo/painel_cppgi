import {useEffect, useState} from "react";
import axios from "axios";
import {DataGrid} from "@mui/x-data-grid";
import {Grid} from "@mui/material";

function Tabela(props) {
    const [loading,setLoading] = useState(true);
    const [dados,setDados] = useState([]);
    const colunas = [
        {field: 'id', headerName:'Id'},
        {field: 'nome',headerName: 'Autores',flex:1},
        {field: 'titulo',headerName: 'Título',flex:0.8}
    ];
    useEffect(()=>{
        setLoading(true);
        axios.get("https://sci01-ter-jne.ufca.edu.br/cppgi/api/submissoes/"
            + props.tipo + "/" + props.edital + "/" + props.tipoTrabalho + "/" + props.area)
            .then(res=>{
                const dados = res.data;
                setDados(dados);
                setLoading(false);
            });
    },[props.edital,props.tipo,props.tipoTrabalho,props.modalidade,props.area]);
    if (loading) {
        return("");
    }
    return(
        <>
            <Grid item={true} xs={12} display="flex" justifyContent="center" alignItems="center">
                <div style={{ height: 500, width: '100%' }}>
                    <DataGrid rows={dados} columns={colunas} getRowHeight={() => 'auto'}/>
                </div>
            </Grid>
        </>
    );
}
export default Tabela;