import styles from './HistoryCard.module.css'

export default function HistoryCard(props) {
    return (
        <>

            <div className={`col-12 col-md-4 p-2 ${styles.outer}`}>
                <div className='card p-3' >
                    <h6 className='card-title'>{props.instancia.titulo}</h6>
                    <span>R$ {props.instancia.valor}</span>
                </div>
            </div>
        </>
    )



    
}

