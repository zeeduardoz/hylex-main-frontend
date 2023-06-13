import { createContext, useState } from 'react'

import { api } from '@services/api'

type Ranking = {
  name: string
  wins: string
  position: number
}

type RankingContextType = {
  ranking: Ranking[]
  page: number
  totalPage: number
  useLoading: boolean

  nextPage: (page: number) => void
  previousPage: (page: number) => void
  GetRanking: (data: string) => Promise<any>
}

export const RankingContext = createContext({} as RankingContextType)

export const RankingWinsProvider: React.FC = ({ children }: any) => {
  const [useLoading, setLoading] = useState(false)
  const [ranking, setRanking] = useState<Ranking[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [gameType, setGameType] = useState('')

  function nextPage(page: number) {
    setPage(page)
    GetRankingNext()
  }

  function previousPage(page: number) {
    setPage(page)
    GetRankingPrev()
  }

  async function GetRanking(data: string) {
    setLoading(true)
    setGameType(data)

    const response = await api.get(
      `/utils/ranking/wins?perPage=${10}&currentPage=${page}&gameType=${data}`
    )

    if (response.data.pagination) {
      if (page === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 10))
      }
    }

    setRanking(response.data.data)
    setLoading(false)
  }

  async function GetRankingPrev() {
    setLoading(true)

    const response = await api.get(
      `/utils/ranking/wins?perPage=${10}&currentPage=${
        page - 1
      }&gameType=${gameType}`
    )

    if (response.data.pagination) {
      if (page - 1 === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 10))
      }
    }

    setRanking(response.data.data)
    setLoading(false)
  }

  async function GetRankingNext() {
    setLoading(true)

    const response = await api.get(
      `/utils/ranking/wins?perPage=${10}&currentPage=${
        page + 1
      }&gameType=${gameType}`
    )

    if (response.data.pagination) {
      if (page + 1 === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 10))
      }
    }

    setRanking(response.data.data)
    setLoading(false)
  }

  return (
    <RankingContext.Provider
      value={{
        useLoading,
        GetRanking,
        ranking,
        page,
        totalPage,
        nextPage,
        previousPage
      }}
    >
      {children}
    </RankingContext.Provider>
  )
}
