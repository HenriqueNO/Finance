import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { useRef, useState } from "react";

import styles from "./styles.module.scss";

interface formType {
  date: string;
  price: number;
  description: string;
  category: string;
}

export function AppendItems() {
  const currentDate = format(new Date(), 'yyyy-MM-dd', { locale: ptBR });
  const priceRef = useRef(null);
  const [formItems, setFormItems] = useState<formType>({
    date: currentDate,
    price: 0,
    description: '',
    category: '',
  });

  function appendItems(event, param: string) {
    setFormItems({...formItems, [param]: (event.target.value)});
  }

  function handleEnter(event) {
    if (event.keyCode === 13) {
      const form = event.target.form;
      const index = Array.prototype.indexOf.call(form, event.target);
      form.elements[index + 1].focus();
      event.preventDefault();
    }
  }

  return (
    <section className={styles.container}>
        <h1>Adicione um novo item</h1>
        <form className={styles.formContainer}>
          <input
            type="date"
            title="Data"
            placeholder="Data"
            defaultValue={currentDate}
            onChange={(e) => appendItems(e, 'date')}
            onKeyDown={handleEnter}
            
          />

          <input
            type="number"
            title="Preço"
            placeholder="Preço"
            onChange={(e) => appendItems(e, 'price')}
            onKeyDown={handleEnter}
          />

          <input
            type="text"
            maxLength={30}
            title="Descrição"
            placeholder="Descrição"
            onChange={(e) => appendItems(e, 'description')}
            onKeyDown={handleEnter}
          />

          <input
            type="text"
            title="Categoria"
            placeholder="Categoria"
            onChange={(e) => appendItems(e, 'category')}
          />

          <div>
          <button type="button" title="Adicione a tabela de renda">Renda</button>
          <button type="button" title="Adicione a tabela de despesa">Despesa</button>
          </div>
        </form>
      </section>
  )
}