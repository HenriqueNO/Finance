import styles from '../styles/components/TableItems.module.css'

export function TableItems() {
    return (
        <div className={styles.tableItemsContainer}>
            <h2>Translações</h2>
            <table className={styles.tableItemsTable}>

                <tr><th>Receita</th></tr>
                <table>
                    <tr>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                    </tr>
                </table>

                <tr><th>Despesas</th></tr>
                <table>
                    <tr>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Descrição</th>
                        <th>Categoria</th>
                    </tr>
                </table>
            </table>
        </div>
    )
}