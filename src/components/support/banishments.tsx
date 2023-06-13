import { useContext, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

import { PunishContext } from '@contexts/PunishBanContext'
import { Modal } from '@components/support/punishModal'

export function Banishments() {
  const {
    useLoading,
    punish,
    GetPunish,
    page,
    totalPage,
    nextPage,
    previousPage,
    FromToTotal
  } = useContext(PunishContext)

  useEffect(() => {
    GetPunish()
  }, [])

  return (
    <div className="lg:w-1/2">
      <h1 className="text-2xl font-black my-5 text-center text-color-light">
        Banimentos
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
        ) : punish && punish.length >= 1 ? (
          punish.map((p, index) => {
            return (
              <div
                key={index}
                className="items-center bg-primary rounded px-8 py-3 space-y-10 w-full lg:flex lg:justify-between lg:space-y-0"
              >
                <div className="items-center flex justify-center lg:justify-start lg:w-2/3">
                  <img
                    src={
                      p.user.includes('*')
                        ? `https://minotar.net/avatar/steve.png`
                        : `https://minotar.net/avatar/${p.user}.png`
                    }
                    alt="Coupon"
                    className="rounded-full h-12 object-cover w-12"
                  />
                  <span className="ml-5">
                    <p className="font-semibold text-color-light">{p.user}</p>
                  </span>
                </div>
                <div className="items-center flex justify-center w-full lg:justify-start lg:w-1/3">
                  <p className="text-sm text-color-medium">{p.date}</p>
                </div>
                <Modal punish={p} />
              </div>
            )
          })
        ) : (
          <div className="items-center bg-primary rounded flex justify-center px-8 py-5 w-full">
            <p className="font-light text-color-medium">
              Nenhum banimento encontrado!
            </p>
          </div>
        )}
        {useLoading ? (
          <></>
        ) : punish && punish.length >= 1 ? (
          <div className="items-center flex justify-center pt-5 space-x-10 lg:justify-end">
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
