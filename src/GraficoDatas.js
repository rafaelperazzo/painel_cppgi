import {useEffect, useState} from "react";
import axios from "axios";
import {Bar, CartesianGrid, Legend, Tooltip, XAxis, YAxis, BarChart, ResponsiveContainer} from "recharts";

function GraficoDatas(props) {

    const [datas,setDatas] = useState([]);
    /*
    function getValores() {
        var result = datas.map(function (data) {
            return (data.total);
        });
        setvTotal(result);
    }*/

    useEffect(()=>{
        axios.get("https://sci01-ter-jne.ufca.edu.br/cppgi/api/submissoes/"
            + props.tipo + "/" + props.edital + "/" + props.tipoTrabalho + "/" + props.area)
            .then(res=>{
                const dados = res.data;
                setDatas(dados);
            });
    },[props.edital,props.tipo,props.tipoTrabalho,props.modalidade,props.area]);

    return(
        <>
            <h3>Total de submissões por data</h3>
            <ResponsiveContainer width="50%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={datas}
                    margin={{
                        top: 20,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis height={60} dy={20} name="Data" angle={45} dataKey="data"/>
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign={"top"} />
                    <Bar name="total de submissões" dataKey="total" stackId="a" fill="#8884d8" />
                </BarChart>
            </ResponsiveContainer>
        </>
    );
}

export default GraficoDatas;