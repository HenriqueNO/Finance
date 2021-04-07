import { InfoMonth } from '../Components/InfoMonth'
import { ManageItems} from '../Components/ManageItems'
import { TableItems } from '../Components/TableItems'
import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <div>
        <InfoMonth />
        <TableItems />
        <ManageItems />
      </div>
    </div>
  )
}
