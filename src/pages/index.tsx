import Link from 'next/link'
import { useContext, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { Layout } from '@components/utils/layout'
import { NewsContext } from '@contexts/NewsContext'
import { getMonth } from '@services/dateUtils'

interface NewsInterface {
  title: string
  uuid: string
  description: string
  highlight: string
  author: string
  createdAt: Date
  updatedAt: Date
}

const info = {
  page: 'Bem-vindo(a) à loja do Hylex!',
  description:
    'Apoie o servidor e adquira diversas vantagens exclusivas comprando nossos produtos.'
}

export default function Home() {
  const {
    useLoading,
    news,
    GetNews,
    page,
    totalPage,
    nextPage,
    previousPage,
    FromToTotal
  } = useContext(NewsContext)

  useEffect(() => {
    GetNews()
  }, [])

  function formatDate(data: any) {
    const date = new Date(data)
    return `${date.getDate()} de ${getMonth(
      date.getMonth() + 1
    )} de ${date.getFullYear()} às ${date.getHours()}:${
      date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()
    }`
  }

  function left(text: string) {
    return text.substr(
      0,
      // eslint-disable-next-line prefer-rest-params
      arguments[10] === undefined ? 500 : parseInt(arguments[0])
    )
  }

  return (
    <Layout title="Início" header={info}>
      <div className="container w-full">
        <div className="items-center flex flex-col mt-10 space-y-3">
          {useLoading ? (
            <>
              <div className="items-center animate-pulse bg-blue-300 rounded flex h-96 justify-between p-8 w-full"></div>
              <div className="items-center animate-pulse bg-blue-300 rounded flex h-96 justify-between p-8 w-full"></div>
              <div className="items-center animate-pulse bg-blue-300 rounded flex h-96 justify-between p-8 w-full"></div>
              <div className="items-center animate-pulse bg-blue-300 rounded flex h-96 justify-between p-8 w-full"></div>
              <div className="items-center animate-pulse bg-blue-300 rounded flex h-96 justify-between p-8 w-full"></div>
            </>
          ) : news && news.length >= 1 ? (
            news.map((n: NewsInterface) => {
              return (
                <div
                  key={n.uuid}
                  className={n.highlight === '1' ? 'conic w-full' : 'w-full'}
                >
                  <div className="bg-primary rounded-md flex flex-col justify-between m-3 relative">
                    <div className="items-center flex px-10 py-8 space-x-10">
                      <div className="w-28">
                        <img
                          className="rounded-md"
                          src={
                            n.author.includes('*')
                              ? `https://minotar.net/avatar/steve.png`
                              : `https://minotar.net/avatar/${n.author}.png`
                          }
                          alt="Avatar"
                        />
                      </div>
                      <div>
                        <h1 className="text-2xl font-black text-color-light">
                          {n.title}
                        </h1>
                        <p className="font-light text-color-medium">
                          Criado por <b className="font-semibold">{n.author}</b>{' '}
                          em {formatDate(n.createdAt)}
                        </p>
                      </div>
                    </div>
                    <div className="items-center inline-flex justify-between space-x-10 w-full">
                      <hr className="border-hr-color w-1/2" />
                      <img src="./element_carrosel1.png" className="w-5" />
                      <hr className="border-hr-color w-1/2" />
                    </div>
                    <div className="max-h-96 py-14">
                      <div
                        className="content-html px-10"
                        dangerouslySetInnerHTML={{
                          __html: left(n.description)
                        }}
                      />
                    </div>
                    <div className="shadow-news items-center flex justify-center -mt-14 overflow-hidden py-10 w-full">
                      <Link href={`/news/${n.uuid}`}>
                        <a className="bg-color-warning rounded block text-lg font-black p-3 text-center w-48">
                          Ver Mais
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })
          ) : (
            <div className="items-center bg-primary rounded flex justify-center px-8 py-5 w-full">
              <p className="font-light text-color-medium">
                Nenhuma notícia cadastrada!
              </p>
            </div>
          )}
        </div>
        {useLoading ? (
          <></>
        ) : news && news.length >= 1 ? (
          <div className="items-center flex justify-center mt-8 space-x-10 lg:justify-end">
            <div className="text-sm font-light text-color-medium">
              <p>Página atual: {page}</p>
              <p>{FromToTotal}</p>
            </div>
            <div className="items-center flex justify-end">
              {page === 1 ? (
                page === totalPage ? (
                  <>
                    <button
                      className="shadown-md bg-primary rounded-l-md focus:outline-none p-3 text-color-medium"
                      disabled
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      disabled
                      className="shadown-md bg-primary rounded-r-md focus:outline-none p-3 text-color-medium"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      className="shadown-md bg-primary rounded-l-md focus:outline-none p-3 text-color-medium"
                      disabled
                    >
                      <FaChevronLeft />
                    </button>
                    <button
                      onClick={() => nextPage(page + 1)}
                      className="shadown-md bg-primary rounded-r-md focus:outline-none p-3 text-color-medium"
                    >
                      <FaChevronRight />
                    </button>
                  </>
                )
              ) : page === totalPage ? (
                <>
                  <button
                    onClick={() => previousPage(page - 1)}
                    className="shadown-md bg-primary rounded-l-md focus:outline-none p-3 text-color-medium"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    className="shadown-md bg-primary rounded-r-md focus:outline-none p-3 text-color-medium"
                    disabled
                  >
                    <FaChevronRight />
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => previousPage(page - 1)}
                    className="shadown-md bg-primary rounded-l-md focus:outline-none p-3 text-white"
                  >
                    <FaChevronLeft />
                  </button>
                  <button
                    onClick={() => nextPage(page + 1)}
                    className="shadown-md bg-primary rounded-r-md focus:outline-none p-3 text-white"
                  >
                    <FaChevronRight />
                  </button>
                </>
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  )
}
