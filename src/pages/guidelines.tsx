import { useState } from 'react'

import { Layout } from '@components/utils/layout'
import { api } from '@services/api'

const info = {
  page: 'Diretrizes',
  description:
    'Conheça todas as nossas diretrizes, para que não tenha problemas!'
}

export default function Guidelines() {
  const [guide, setGuide] = useState<string>()
  const [content, setContent] = useState('')

  async function handleGuide(data: string) {
    if (data === 'rules') {
      api
        .get('/shopping/utils/getInfo')
        .then(response => {
          setContent(response.data.data.rules)
          setGuide(data)
        })
        .catch(error => {
          console.log(error)
        })
    } else {
      api
        .get('/shopping/utils/getInfo')
        .then(response => {
          setContent(response.data.data.terms)
          setGuide(data)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }

  return (
    <Layout title="Diretrizes" header={info}>
      <div className="container w-full">
        <div className="grid gap-4 lg:grid-cols-2">
          <a
            onClick={() => handleGuide('rules')}
            className={
              guide === 'rules'
                ? 'scale-90 transform delay-100 transition filter grayscale'
                : 'hover:scale-105 transform cursor-pointer delay-100 transition'
            }
          >
            <img src="./bg.png" className="rounded-t transform" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              Regras
            </p>
          </a>
          <a
            onClick={() => handleGuide('terms')}
            className={
              guide === 'terms'
                ? 'scale-90 transform delay-100 transition filter grayscale'
                : 'hover:scale-105 transform delay-100 cursor-pointer transition'
            }
          >
            <img src="./bg.png" className="rounded-t transform w-full" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              Termos e condições
            </p>
          </a>
        </div>

        {guide ? (
          <>
            <div className="items-center inline-flex justify-between py-10 space-x-10 w-full">
              <hr className="border-hr-color w-1/2" />
              <img src="./element_carrosel1.png" className="w-5" />
              <hr className="border-hr-color w-1/2" />
            </div>
            <div className="bg-primary rounded-md p-10 w-full">
              <div
                className="content-html px-10"
                dangerouslySetInnerHTML={{ __html: content }}
              />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  )
}
