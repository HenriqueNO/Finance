import { createContext, ReactNode, useState } from "react";

interface TableContextData {
  items: {income: Array<{
    date: string,
    price: number,
    description: string,
    category: string
  }>;
  expense: Array<{
    date: string,
    price: number,
    description: string,
    category: string
  }>;}
}

interface TableProviderProps {
  children: ReactNode;
  props: { data: {
    income: Array<{
      date: string,
      price: number,
      description: string,
      category: string
    }>;
    expense: Array<{
      date: string,
      price: number,
      description: string,
      category: string
    }>;}
  };
}

export const TableContext = createContext({} as TableContextData)

export function TableProvider({children, props}: TableProviderProps) {
  const [items, setIncome] = useState({
    income: props.data.income,
    expense: props.data.expense
  })

  return (
    <TableContext.Provider value={{
      items
    }}>
      {children}
    </TableContext.Provider>
  )
}