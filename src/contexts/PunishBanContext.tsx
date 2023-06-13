import { createContext, useState } from 'react'

import { api } from '@services/api'

type Punish = {
  author: string
  user: string
  reason: string
  evidence: string
  date: string
}

type PunishContextType = {
  punish: Punish[]
  page: number
  totalPage: number
  useLoading: boolean
  FromToTotal: string

  nextPage: (page: number) => void
  previousPage: (page: number) => void
  GetPunish: () => Promise<any>
}

export const PunishContext = createContext({} as PunishContextType)

export const PunishBanProvider: React.FC = ({ children }: any) => {
  const [useLoading, setLoading] = useState(false)
  const [punish, setPunish] = useState<Punish[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [totalPunish, setTotalPunish] = useState<number>(0)
  const [FromToTotal, setFromToTotal] = useState<string>('')

  function nextPage(page: number) {
    setPage(page)
    GetPunishNext()
  }

  function previousPage(page: number) {
    setPage(page)
    GetPunishPrev()
  }

  async function GetPunish() {
    setLoading(true)

    const response = await api.get(
      `/utils/getBanishments?perPage=${10}&currentPage=${page}`
    )

    if (response.data.pagination) {
      if (page === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 10))
        setTotalPunish(response.data.pagination.total)
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${response.data.pagination.total}`
        )
      } else {
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${totalPunish}`
        )
      }
    }

    setPunish(response.data.data)
    setLoading(false)
  }

  async function GetPunishPrev() {
    setLoading(true)

    const response = await api.get(
      `/utils/getBanishments?perPage=${10}&currentPage=${page - 1}`
    )

    if (response.data.pagination) {
      if (page - 1 === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 10))
        setTotalPunish(response.data.pagination.total)
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${response.data.pagination.total}`
        )
      } else {
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${totalPunish}`
        )
      }
    }

    setPunish(response.data.data)
    setLoading(false)
  }

  async function GetPunishNext() {
    setLoading(true)

    const response = await api.get(
      `/utils/getBanishments?perPage=${10}&currentPage=${page + 1}`
    )

    if (response.data.pagination) {
      if (page + 1 === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 10))
        setTotalPunish(response.data.pagination.total)
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${response.data.pagination.total}`
        )
      } else {
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${totalPunish}`
        )
      }
    }

    setPunish(response.data.data)
    setLoading(false)
  }

  return (
    <PunishContext.Provider
      value={{
        useLoading,
        GetPunish,
        punish,
        FromToTotal,
        page,
        totalPage,
        nextPage,
        previousPage
      }}
    >
      {children}
    </PunishContext.Provider>
  )
}
