import styles from './styles.module.scss'

export function AllWallet(props) {
  console.log(props)
  return (
    <>
      <h1>Carteira</h1>
      <div className={styles.walletContainer}>
        <div onClick={() => setWalletIsOpen(true)}>
          <p>Name: {'Henrique'}</p>
          <p>Saldo: R$ {'1000'}</p>
        </div>
        <div>
          <p>Name: {'Henrique'}</p>
          <p>Saldo: R$ {'1000'}</p>
        </div>
      </div>
      <button className={styles.appendWallet}>+</button>
    </>
  )
}