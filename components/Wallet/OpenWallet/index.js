import styles from './styles.module.scss'

export function OpenWallet(props) {
  return (
    <div className={styles.container}>
      <div className={styles.walletSeletedContainer}>
        <button onClick={() => setWalletIsOpen(false)}>Voltar</button>
        <h2>Saldo atual: {'1000'}</h2>
        <div>
          <strong>Nome da carteira</strong>
          <p>Saldo inicial: {'100'}</p>
          <p>Total de receita:</p>
          <p>Total de despesa:</p>
        </div>
      </div>

      <div className={styles.goalContainer}>
        <h2>Meta de um ano</h2>
        <p>Simplifique sua meta e tenha uma visão plena do que você deve fazer para alcança-la.</p>
        <button>Bora criar!</button>
      </div>
    </div>
  )
}