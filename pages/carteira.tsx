import { useState } from 'react'
import styles from '../styles/pages/carteira.module.scss'
import { OpenWallet } from '../components/Wallet/OpenWallet'
import { AllWallet } from '../components/Wallet/AllWallet'

export default function carteira() {
  const [walletIsOpen, setWalletIsOpen] = useState(false)
  const valorDesejo = 10000

  return(
    <div className={styles.container}>
      { walletIsOpen 
      ? <OpenWallet props={[walletIsOpen, setWalletIsOpen]}/> 
      : <AllWallet />
      }
      
    </div>
  )
}