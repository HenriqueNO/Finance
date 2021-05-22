import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { createContext, MutableRefObject, ReactNode, useRef, useState } from "react";

interface DateProps {
  year: number;
  month: number;
}


interface MonthContextData {
  monthSelected: MutableRefObject<HTMLInputElement>;
  formatedMonth: string;
  date: DateProps;
  handleNextMonth: () => void;
  handlePreviousMonth: () => void;
  dateSocket: () => void;
}

interface MonthProviderProps {
  children: ReactNode;
}

export const MonthContext = createContext({} as MonthContextData)

export function MonthProvider({children}: MonthProviderProps) {
  const monthSelected = useRef(null)
  const formatedMonth = format(new Date, 'yyyy-MM', {locale: ptBR});
  const [date, setDate] = useState({
    year: Number(formatedMonth.substr(0, formatedMonth.indexOf('-'))),
    month: Number(formatedMonth.substr(formatedMonth.indexOf('-')+1, formatedMonth.indexOf('-') + 2))
  })

  function handleNextMonth() {
    if (date.month < 12) {
      setDate({month: date.month + 1, year: date.year})
    } else if (date.month === 12) {
      setDate({month: 1, year: date.year + 1})
    }
  }
  
  function handlePreviousMonth() {
    if (date.month > 1) {
      setDate({month: date.month - 1, year: date.year})
    } else if (date.month === 1) {
      setDate({month: 12, year: date.year - 1})
    }
  }

  function dateSocket() {
    let dateRef = monthSelected.current
    setDate({
      year: Number(dateRef.value.substr(0, dateRef.value.indexOf('-'))), 
      month: Number(dateRef.value.substr(
        dateRef.value.indexOf('-') +1,
        dateRef.value.indexOf('-') +2
      ))
    })
  }

  return (
    <MonthContext.Provider value={{
      monthSelected,
      formatedMonth,
      date,
      handleNextMonth,
      handlePreviousMonth,
      dateSocket
    }}>
      {children}
    </MonthContext.Provider>
  )
}