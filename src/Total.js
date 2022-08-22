import {useEffect, useState} from "react";
import axios from "axios";

function Total(props) {
    const [total,setTotal] = useState(0);
    const [loading,setLoading] = useState(true);
    useEffect(()=>{
       setLoading(true);
       axios.get("https://sci01-ter-jne.ufca.edu.br/cppgi/api/submissoes/2/" + props.edital)
           .then(res=>{
              const dados = res.data;
              setTotal(dados.total);
              setLoading(false);
           });
    },[props.edital]);
    if (loading) {
        return("");
    }
    return(

            <h1>{total}</h1>

    );
}
export default Total;