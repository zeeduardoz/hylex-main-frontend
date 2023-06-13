import { createContext, useState } from 'react'

import { api } from '@services/api'

type New = {
  title: string
  uuid: string
  description: string
  highlight: string
  author: string
  createdAt: Date
  updatedAt: Date
}

type NewsContextType = {
  news: New[]
  page: number
  totalPage: number
  useLoading: boolean
  FromToTotal: string

  nextPage: (page: number) => void
  previousPage: (page: number) => void
  GetNews: () => Promise<any>
}

export const NewsContext = createContext({} as NewsContextType)

export const NewsProvider: React.FC = ({ children }: any) => {
  const [useLoading, setLoading] = useState(false)
  const [news, setNews] = useState<New[]>([])
  const [page, setPage] = useState<number>(1)
  const [totalPage, setTotalPage] = useState<number>(1)
  const [totalNews, setTotalNews] = useState<number>(0)
  const [FromToTotal, setFromToTotal] = useState<string>('')

  function nextPage(page: number) {
    setPage(page)
    GetNewsNext()
  }

  function previousPage(page: number) {
    setPage(page)
    GetNewsPrev()
  }

  async function GetNews() {
    setLoading(true)

    const response = await api.get(
      `/news/getNews?perPage=${5}&currentPage=${page}`
    )

    if (response.data.pagination) {
      if (page === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 5))
        setTotalNews(response.data.pagination.total)
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${response.data.pagination.total}`
        )
      } else {
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${totalNews}`
        )
      }
    }

    setNews(response.data.data)
    setLoading(false)
  }

  async function GetNewsPrev() {
    setLoading(true)

    const response = await api.get(
      `/news/getNews?perPage=${5}&currentPage=${page - 1}`
    )

    if (response.data.pagination) {
      if (page - 1 === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 5))
        setTotalNews(response.data.pagination.total)
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${response.data.pagination.total}`
        )
      } else {
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${totalNews}`
        )
      }
    }

    setNews(response.data.data)
    setLoading(false)
  }

  async function GetNewsNext() {
    setLoading(true)

    const response = await api.get(
      `/news/getNews?perPage=${5}&currentPage=${page + 1}`
    )

    if (response.data.pagination) {
      if (page + 1 === 1) {
        setTotalPage(Math.ceil(response.data.pagination.total / 5))
        setTotalNews(response.data.pagination.total)
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${response.data.pagination.total}`
        )
      } else {
        setFromToTotal(
          `Items ${response.data.pagination.from} á ${response.data.pagination.to} de ${totalNews}`
        )
      }
    }

    setNews(response.data.data)
    setLoading(false)
  }

  return (
    <NewsContext.Provider
      value={{
        useLoading,
        GetNews,
        news,
        FromToTotal,
        page,
        totalPage,
        nextPage,
        previousPage
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
