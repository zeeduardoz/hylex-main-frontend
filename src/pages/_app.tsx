/* eslint-disable import/extensions */
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'next-themes'
import { ToastContainer } from 'react-toastify'

import { RankingWinsProvider } from '@contexts/RankingWinsContext'
import { RankingKillsProvider } from '@contexts/RankingKillsContext'
import { NewsProvider } from '@contexts/NewsContext'
import { PunishBanProvider } from '@contexts/PunishBanContext'
import { PunishMuteProvider } from '@contexts/PunishMuteContext'

import '../styles/globals.scss'
import 'react-toastify/dist/ReactToastify.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider enableSystem={false}>
      <ToastContainer
        autoClose={3000}
        position="top-right"
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
      />
      <NewsProvider>
        <PunishBanProvider>
          <PunishMuteProvider>
            <RankingWinsProvider>
              <RankingKillsProvider>
                <Component {...pageProps} />
              </RankingKillsProvider>
            </RankingWinsProvider>
          </PunishMuteProvider>
        </PunishBanProvider>
      </NewsProvider>
    </ThemeProvider>
  )
}
export default MyApp
