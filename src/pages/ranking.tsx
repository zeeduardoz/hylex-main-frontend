import { useState } from 'react'

import { Layout } from '@components/utils/layout'
import { WinsBw } from '@components/ranking/bedwars/wins'
import { WinsSw } from '@components/ranking/skywars/wins'
import { WinsHg } from '@components/ranking/hg/wins'
import { KillsBw } from '@components/ranking/bedwars/kills'
import { KillsSw } from '@components/ranking/skywars/kills'
import { KillsHg } from '@components/ranking/hg/kills'

const info = {
  page: 'Classificação',
  description: 'Confira o TOP e classificação dos nossos Rankings!'
}

export default function Ranking() {
  const [ranking, setRanking] = useState<string>()

  return (
    <Layout title="Classificação" header={info}>
      <div className="container w-full">
        <div className="grid gap-4 lg:grid-cols-3">
          <a
            onClick={() => setRanking('bw')}
            className={
              ranking === 'bw'
                ? 'scale-90 transform delay-100 transition filter grayscale'
                : 'hover:scale-105 transform cursor-pointer delay-100 transition'
            }
          >
            <img src="./bw.png" className="rounded-t h-56 transform" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              BedWars
            </p>
          </a>
          <a
            onClick={() => setRanking('sw')}
            className={
              ranking === 'sw'
                ? 'scale-90 transform delay-100 transition filter grayscale'
                : 'hover:scale-105 transform delay-100 cursor-pointer transition'
            }
          >
            <img src="./sw.png" className="rounded-t h-56 transform w-full" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              SkyWars
            </p>
          </a>
          <a
            onClick={() => setRanking('hg')}
            className={
              ranking === 'hg'
                ? 'scale-90 transform delay-100 transition filter grayscale'
                : 'hover:scale-105 transform delay-100 cursor-pointer transition'
            }
          >
            <img src="./hg.png" className="rounded-t h-56 transform w-full" />
            <p className="bg-primary rounded-b text-xl font-bold py-3 text-center w-full">
              Hunger Games
            </p>
          </a>
        </div>
        {ranking === 'bw' ? (
          <>
            <div className="items-center inline-flex justify-between py-10 space-x-10 w-full">
              <hr className="border-hr-color w-1/2" />
              <img src="./element_carrosel1.png" className="w-5" />
              <hr className="border-hr-color w-1/2" />
            </div>
            <div className="items-start space-y-2 lg:flex lg:space-x-20 lg:space-y-0">
              <WinsBw />
              <KillsBw />
            </div>
          </>
        ) : ranking === 'sw' ? (
          <>
            <div className="items-center inline-flex justify-between py-10 space-x-10 w-full">
              <hr className="border-hr-color w-1/2" />
              <img src="./element_carrosel1.png" className="w-5" />
              <hr className="border-hr-color w-1/2" />
            </div>
            <div className="items-start space-y-2 lg:flex lg:space-x-20 lg:space-y-0">
              <WinsSw />
              <KillsSw />
            </div>
          </>
        ) : ranking === 'hg' ? (
          <>
            <div className="items-center inline-flex justify-between py-10 space-x-10 w-full">
              <hr className="border-hr-color w-1/2" />
              <img src="./element_carrosel1.png" className="w-5" />
              <hr className="border-hr-color w-1/2" />
            </div>
            <div className="items-start space-y-2 lg:flex lg:space-x-20 lg:space-y-0">
              <WinsHg />
              <KillsHg />
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Layout>
  )
}
