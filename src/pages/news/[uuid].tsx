import Image from 'next/image'
import Router, { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import { Layout } from '@components/utils/layout'
import { api } from '@services/api'
import { getMonth } from '@services/dateUtils'

import Element from '../../../public/element_carrosel1.png'

interface NewsInterface {
  title: string
  uuid: string
  description: string
  highlight: string
  author: string
  createdAt: Date
  updatedAt: Date
}

export default function News({ uuid }: any) {
  const [useLoading, setLoading] = useState(true)
  const [news, setNews] = useState<NewsInterface | null>(null)

  useEffect(() => {
    if (!uuid) Router.push('/news')
    api.get(`/news/getNewsByUUID?noticeUUID=${uuid}`).then(response => {
      setNews(response.data.data)
      setLoading(false)
    })
  }, [])

  function formatDate(data: any) {
    const date = new Date(data)
    return `${date.getDate()} de ${getMonth(
      date.getMonth() + 1
    )} de ${date.getFullYear()} às ${date.getHours()}:${
      date.getMinutes() < 9 ? '0' + date.getMinutes() : date.getMinutes()
    }`
  }

  const info = {
    page: 'Notícia',
    description: news
      ? `Criado por ${news.author} em ${formatDate(news.createdAt)}`
      : `Vendo notícia: ${uuid}`
  }

  return (
    <Layout title="Notícia" header={info}>
      <div className="container w-full">
        {useLoading ? (
          <div className="items-center animate-pulse bg-blue-300 rounded flex h-96 justify-between p-8 w-full"></div>
        ) : news ? (
          <div className={news.highlight === '1' ? 'conic w-full' : 'w-full'}>
            <div className="bg-primary rounded-md flex flex-col justify-between m-3 relative">
              <div className="items-center flex px-10 py-8 space-x-10">
                <div className="w-28">
                  <img
                    className="rounded-md"
                    src={
                      news.author.includes('*')
                        ? `https://minotar.net/avatar/steve.png`
                        : `https://minotar.net/avatar/${news.author}.png`
                    }
                    alt="Avatar"
                  />
                </div>
                <div>
                  <h1 className="text-2xl font-black text-color-light">
                    {news.title}
                  </h1>
                  <p className="font-light text-color-medium">
                    Criado por <b className="font-semibold">{news.author}</b> em{' '}
                    {formatDate(news.createdAt)}
                  </p>
                </div>
              </div>
              <div className="items-center inline-flex justify-between space-x-10 w-full">
                <hr className="border-hr-color w-1/2" />
                <div className="items-center flex justify-center w-5">
                  <Image src={Element} />
                </div>
                <hr className="border-hr-color w-1/2" />
              </div>
              <div className="h-full py-14">
                <div
                  className="content-html px-10"
                  dangerouslySetInnerHTML={{ __html: news.description }}
                />
              </div>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  )
}

News.getInitialProps = async ({ query }: any) => {
  const { uuid } = query

  return { uuid }
}
