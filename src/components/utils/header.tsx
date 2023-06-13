import Image from 'next/image'
import { useEffect, useState } from 'react'
import {
  FaGlobe,
  FaUser,
  FaBars,
  FaTimes,
  FaInstagram,
  FaTwitter,
  FaDiscord
} from 'react-icons/fa'
import axios from 'axios'
import copy from 'copy-to-clipboard'

import { Theme } from '@components/utils/theme'

import Logo from '../../../public/logo.png'
import ElementHeader from '../../../public/element_carrosel2.png'

export function Header(props: any) {
  const [useNav, setNav] = useState(false)
  const [useOnline, setOnline] = useState(0)

  useEffect(() => {
    axios
      .get(`https://api.mcsrvstat.us/2/hylex.net`)
      .then(response => {
        if (response.data.players) {
          setOnline(response.data.players.online)
        } else {
          setOnline(0)
        }
      })
      .catch(err => {
        console.log(err)
        setOnline(0)
      })
  }, [])

  const copyToClipboard = () => {
    copy('hylex.net')
  }

  return (
    <header className="bg-header bg-cover h-1/2">
      <div className={useNav ? '' : 'backdrop-blur-sm backdrop-filter'}>
        <div className="container hidden lg:block">
          <div className="items-start inline-flex justify-between mt-2 space-x-10 w-full">
            <div className="flex py-5 w-1/2">
              <div className="group items-center flex flex-col relative">
                <a
                  onClick={() => copyToClipboard()}
                  className="items-center cursor-pointer hidden text-xl font-thin hover:opacity-90 text-color-success delay-100 transition lg:flex"
                >
                  <FaGlobe className="mr-2" /> {useOnline} Jogadores online.
                </a>
                <div className="items-center group-hover:flex hidden flex-col -bottom-7 absolute">
                  <span className="whitespace-no-wrap bg-black shadow-lg text-xs italic leading-none p-2 relative text-white z-10">
                    Clique para copiar!
                  </span>
                </div>
              </div>
            </div>
            <div>
              <a href="/">
                <Image src={Logo} alt="Logo" width={80} height={150} />
              </a>
            </div>
            <div className="flex justify-end py-5 w-1/2">
              <Theme />
              <div className="items-center flex ml-14 space-x-5">
                <a href="https://www.instagram.com/hylexmc/" target="_blank">
                  <FaInstagram className="text-2xl hover:opacity-75 text-white delay-100 transition" />
                </a>
                <a
                  href="https://twitter.com/HylexMC?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                  target="_blank"
                >
                  <FaTwitter className="text-2xl hover:opacity-75 text-white delay-100 transition" />
                </a>
                <a href="https://discord.gg/hylex" target="_blank">
                  <FaDiscord className="text-2xl hover:opacity-75 text-white delay-100 transition" />
                </a>
              </div>
              <div className="ml-14">
                <a href="https://loja.hylex.net/auth/login" target="_blank">
                  <FaUser className="text-2xl hover:opacity-75 text-white delay-100 transition" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container block lg:hidden">
          <div className="items-center inline-flex justify-between mt-2 px-10 space-x-10 w-full">
            <div>
              <Image src={Logo} alt="Logo" width={80} height={150} />
            </div>
            <div className="items-center flex justify-end py-5 space-x-10 w-1/2">
              <Theme />
              <a
                onClick={() => setNav(!useNav)}
                className="block text-4xl font-black tracking-wider hover:opacity-90 text-white uppercase delay-100 transition lg:hidden"
              >
                {useNav ? <FaTimes /> : <FaBars />}
              </a>
            </div>
          </div>
        </div>
        <div
          className={
            useNav
              ? 'bg-black h-auto absolute w-screen py-12 space-y-14 z-50'
              : 'hidden'
          }
        >
          <a
            href="/"
            className="block text-xl font-light hover:opacity-75 text-center text-white delay-100 transition w-full"
          >
            Início
          </a>
          <a
            href="https://loja.hylex.net"
            target="_blank"
            className="block text-xl font-light hover:opacity-75 text-center text-white delay-100 transition w-full"
          >
            Loja
          </a>
          <a
            href="/ranking"
            className="block text-xl font-light hover:opacity-75 text-center text-white delay-100 transition w-full"
          >
            Classificação
          </a>
          <a
            href="/team"
            className="block text-xl font-light hover:opacity-75 text-center text-white delay-100 transition w-full"
          >
            Equipe
          </a>
          <a
            href="/support"
            className="block text-xl font-light hover:opacity-75 text-center text-white delay-100 transition w-full"
          >
            Suporte
          </a>
          <a
            href="/guidelines"
            className="block text-xl font-light hover:opacity-75 text-center text-white delay-100 transition w-full"
          >
            Regras
          </a>
        </div>
        <div className="hidden -mt-3 lg:block">
          <nav className="items-start inline-flex justify-center 2xl:px-10 space-x-10 w-full">
            <div className="items-center flex justify-center w-1/2">
              <li className="text-lg font-light list-none hover:opacity-75 2xl:px-10 px-5 text-white delay-100 transition">
                <a href="/">Início</a>
              </li>
              <li className="text-lg font-light list-none hover:opacity-75 2xl:px-10 px-5 text-white delay-100 transition">
                <a href="https://loja.hylex.net" target="_blank">
                  Loja
                </a>
              </li>
              <li className="text-lg font-light list-none hover:opacity-75 2xl:px-10 px-5 text-white delay-100 transition">
                <a href="/ranking">Classificação</a>
              </li>
            </div>
            <div className="flex"></div>
            <div className="flex justify-center w-1/2">
              <li className="text-lg font-light list-none hover:opacity-75 2xl:px-10 px-5 text-white delay-100 transition">
                <a href="/team">Equipe</a>
              </li>
              <li className="text-lg font-light list-none hover:opacity-75 2xl:px-10 px-5 text-white delay-100 transition">
                <a href="/support">Suporte</a>
              </li>
              <li className="text-lg font-light list-none hover:opacity-75 2xl:px-10 px-5 text-white delay-100 transition">
                <a href="/guidelines">Diretrizes</a>
              </li>
            </div>
          </nav>
        </div>
        <div className="items-center inline-flex justify-between space-x-10 w-full">
          <hr className="element-border w-1/2" />
          <div className="items-center flex justify-center w-5">
            <Image src={ElementHeader} />
          </div>
          <hr className="element-border w-1/2" />
        </div>
      </div>

      <div className="items-center backdrop-blur-sm backdrop-filter flex justify-center w-full">
        <div className="px-5 py-32">
          <h1 className="text-4xl font-black text-center text-white">
            {props.info.page}
          </h1>
          <p className="brightness-125 filter text-xl font-light text-center text-color-medium">
            {props.info.description}
          </p>
        </div>
      </div>
    </header>
  )
}
