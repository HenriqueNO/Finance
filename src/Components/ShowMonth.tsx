import styles from '../styles/components/ShowMonth.module.css'

export function ShowMonth() {
    return (
        <div className={styles.showMonthContainer}>
                <h2>Dados do mês: Janeiro</h2>
                <div className={styles.showMonthDates}>
                <div className={styles.showMonthIncome}>
                    <h3>Resultado:</h3>
                    <strong>Renda - R$ 1000,00</strong>
                    <strong>Despesas - R$ 500,00</strong>
                </div>
                
                <div className={styles.showMonthExpense}>
                    <h3>Planejado:</h3>
                    <strong>Renda - R$ 1000,00</strong>
                    <strong>Despesas - R$ 500,00</strong>
                </div>
            </div>
        </div>
    )
}