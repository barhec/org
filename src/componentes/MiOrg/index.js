import { useState } from "react";
import "./MiOrg.css"

const MiOrg = (props) => {
    // Estado - hooks
    // useState()
    // const [nombreVariable,funciónActualiza] = useState(valorInicial)

    // const [mostrar,actualizarMostrar] = useState(true)

    // const manejarClick = () => {
    //     console.log("Mostrar/Ocultar Elemento", !mostrar)
    //     actualizarMostrar(!mostrar)
    // }

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg