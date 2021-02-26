import { ShowMonth } from "../Components/ShowMonth";
import { TableItems } from "../Components/TableItems";

import styles from '../styles/components/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <ShowMonth />
      <TableItems />
    </div>
  )
}
