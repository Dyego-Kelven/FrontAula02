import React from 'react'
import styles from './Campanha.module.css'

const Campanha = (props) => {

    function definirMensagem(mes) {
        if (mes === "Setembro") {
            return "Prevencao ao suícidio"
        } else if (mes === "Outubro"){
            return "Conscientização sobre o câncer e mama"
        } else if (mes === "Novembro") {
            return "Prenvenção e combate ao câncer de prostata"

        }

    }   
    
    function definirCor(mes) {
        if (mes === "Setembro") {
            return styles.setembro
        } else if (mes === "Outubro") {
            return styles.outubro
        } else if (mes === "Novembro") {
            return styles.novembro
            
        }

    }
    
    return (
    <div className={definirCor(props.mes)}>
        {definirMensagem(props.mes)}
    </div>

  )
}

export default Campanha