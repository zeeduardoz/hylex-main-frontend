import { useContext, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { RankingContext } from '@contexts/RankingWinsContext'

export function WinsSw() {
  const {
    useLoading,
    ranking,
    GetRanking,
    page,
    totalPage,
    nextPage,
    previousPage
  } = useContext(RankingContext)

  useEffect(() => {
    GetRanking('skywars')
  }, [])

  return (
    <div className="lg:w-1/2">
      <h1 className="text-2xl font-black my-5 text-center text-color-light">
        Vitórias
      </h1>
      <div className="flex flex-col space-y-2">
        {useLoading ? (
          <>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>

            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
            <div className="animate-pulse bg-gray-300 rounded p-8 w-full"></div>
          </>
        ) : ranking && ranking.length >= 1 ? (
          ranking.map((r, index) => {
            return (
              <div
                key={index}
                className="items-center bg-primary rounded px-8 py-3 space-y-10 w-full lg:flex lg:justify-between lg:space-y-0"
              >
                <div className="text-center w-full lg:text-left lg:w-28">
                  {r.position === 1 ? (
                    <p className="text-lg">🥇</p>
                  ) : r.position === 2 ? (
                    <p className="text-lg">🥈</p>
                  ) : r.position === 3 ? (
                    <p className="text-lg">🥉</p>
                  ) : (
                    <p className="text-sm text-color-light">{r.position}.º</p>
                  )}
                </div>
                <div className="items-center flex justify-center lg:justify-start lg:w-1/2">
                  <img
                    src={
                      r.name.includes('*')
                        ? `https://minotar.net/avatar/steve.png`
                        : `https://minotar.net/avatar/${r.name}.png`
                    }
                    alt="Coupon"
                    className="rounded-full h-12 object-cover w-12"
                  />
                  <span className="ml-5">
                    <p className="font-semibold text-color-light">{r.name}</p>
                  </span>
                </div>
                <div className="items-center flex justify-center w-full lg:justify-end lg:w-1/2">
                  <p className="text-sm text-color-medium">{r.wins} Wins</p>
                </div>
              </div>
            )
          })
        ) : (
          <div className="items-center bg-primary rounded flex justify-center px-8 py-5 w-full">
            <p className="font-light text-color-medium">
              Nenhum jogador encontrado!
            </p>
          </div>
        )}
        {useLoading ? (
          <></>
        ) : ranking && ranking.length >= 1 ? (
          <div className="items-center flex justify-center pt-5 space-x-10 lg:justify-end">
            <div className="text-sm font-light text-color-medium">
              <p>Página atual: {page}</p>
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
                    className="shadown-md bg-primary rounded-l-md focus:outline-none p-3 text-color-medium"
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
              )}
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  )
}
