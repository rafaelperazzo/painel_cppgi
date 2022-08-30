import {useEffect, useState} from "react";
import axios from "axios";
import {Card, CardContent, Grid, Typography} from "@mui/material";

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
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Total de submissões
                            </Typography>
                            <Typography variant="h4" component="div">
                                {total}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">

                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Apresentações Orais
                            </Typography>
                            <Typography variant="h4" component="div">
                                {orais}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item={true} xs={4} display="flex" justifyContent="center" alignItems="center">
                    <Card sx={{ minWidth: 275 }}>
                        <CardContent>
                            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                                Apresentações em Poster
                            </Typography>
                            <Typography variant="h4" component="div">
                                {posters}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </>
        );
}
export default Total;