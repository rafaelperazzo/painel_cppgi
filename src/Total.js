import {useEffect, useState} from "react";
import axios from "axios";
import {Grid} from "@mui/material";

function Total(props) {
    const [total,setTotal] = useState(0);
    const [orais,setOrais] = useState(0);
    const [posters,setPosters] = useState(0);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        setLoading(true);
           axios.get("https://sci01-ter-jne.ufca.edu.br/cppgi/api/submissoes/"
               + props.tipo + "/" + props.edital + "/" + props.tipoTrabalho + "/" + props.area)
               .then(res=>{
                  const dados = res.data;
                  setTotal(dados.orais+dados.poster);
                  setPosters(dados.poster);
                  setOrais(dados.orais);
                  setLoading(false);
               });
           },[props.edital,props.tipo,props.tipoTrabalho,props.modalidade,props.area]);
        if (loading) {
            return("");
        }
        return(
            <>
                <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">
                    <h1>{total} submissões</h1>
                </Grid>
                <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">
                    <h1>{orais} apresentações orais</h1>
                </Grid>
                <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">
                    <h1>{posters} apresentações em poster</h1>
                </Grid>
            </>
        );
}
export default Total;