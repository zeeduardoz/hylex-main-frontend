import { useState } from 'react'

import { Layout } from '@components/utils/layout'
import { Faq } from '@components/support/faq'
import { Banishments } from '@components/support/banishments'
import { Mutes } from '@components/support/mutes'

const info = {
  page: 'Suporte',
  description: 'Precisando de ajuda? Acesse nosso suporte!'
}

export default function Support() {
  const [support, setSupport] = useState<string>()

  return (
    <Layout title="Suporte" header={info}>
      <div className="container w-full">
        <div className="grid gap-4 lg:grid-cols-3">
          <a
            onClick={() => setSupport('faq')}
            className={
              support === 'faq'
                ? 'scale-90 transform delay-100 transition filter grayscale'
                : 'hover:scale-105 transform cursor-pointer delay-100 transition'
            }
          >
            <img src="./bg.png" className="rounded-t h-56 transform" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              Perguntas frequentes
            </p>
          </a>
          <a
            onClick={() => setSupport('punish')}
            className={
              support === 'punish'
                ? 'scale-90 transform delay-100 transition filter grayscale'
                : 'hover:scale-105 transform delay-100 cursor-pointer transition'
            }
          >
            <img src="./bg.png" className="rounded-t h-56 transform w-full" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              Punições
            </p>
          </a>
          <a
            href="https://mchy.me/revisao"
            target="_blank"
            className="cursor-pointer hover:scale-105 transform delay-100 transition"
          >
            <img src="./bg.png" className="rounded-t h-56 transform w-full" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              Revisão
            </p>
          </a>
        </div>
        {support === 'faq' ? (
          <>
            <div className="items-center inline-flex justify-between py-10 space-x-10 w-full">
              <hr className="border-hr-color w-1/2" />
              <img src="./element_carrosel1.png" className="w-5" />
              <hr className="border-hr-color w-1/2" />
            </div>
            <Faq />
          </>
        ) : support === 'punish' ? (
          <>
            <div className="items-center inline-flex justify-between py-10 space-x-10 w-full">
              <hr className="border-hr-color w-1/2" />
              <img src="./element_carrosel1.png" className="w-5" />
              <hr className="border-hr-color w-1/2" />
            </div>
            <div className="items-start space-y-2 lg:flex lg:space-x-20 lg:space-y-0">
              <Banishments />
              <Mutes />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  )
}
