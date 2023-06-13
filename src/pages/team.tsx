import { useEffect, useState } from 'react'

import { Layout } from '@components/utils/layout'
import { api } from '@services/api'

const info = {
  page: 'Equipe',
  description: 'Conheça a equipe do Hylex!'
}

interface Team {
  Master: []
  Gerente: []
  Desenvolvedor: []
  Coordenador: []
  Administrador: []
  Moderador: []
  Ajudante: []
  Builder: []
}

export default function Team() {
  const [team, setTeam] = useState<Team>()
  const [useLoading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true)
    api
      .get('/utils/getStaff')
      .then(response => {
        setTeam(response.data.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
      })
  }, [])

  return (
    <Layout title="Equipe" header={info}>
      <div className="container w-full">
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Master ({team?.Master.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Master.length >= 1 ? (
              team.Master.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Gerente ({team?.Gerente.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Gerente.length >= 1 ? (
              team.Gerente.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Desenvolvedor ({team?.Desenvolvedor.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Desenvolvedor.length >= 1 ? (
              team.Desenvolvedor.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Coordenador ({team?.Coordenador.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Coordenador.length >= 1 ? (
              team.Coordenador.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Administrador ({team?.Administrador.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Administrador.length >= 1 ? (
              team.Administrador.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Moderador ({team?.Moderador.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Moderador.length >= 1 ? (
              team.Moderador.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Ajudante ({team?.Ajudante.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Ajudante.length >= 1 ? (
              team.Ajudante.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="bg-primary rounded-md my-10 p-8 w-full">
          <h1 className="text-2xl font-black w-full">
            Builder ({team?.Builder.length})
          </h1>
          <div className="grid gap-4 my-10 lg:grid-cols-6">
            {useLoading ? (
              <>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
                <div className="items-center flex flex-col py-5">
                  <div className="animate-pulse bg-blue-200 rounded-md h-32 w-32"></div>
                  <div className="animate-pulse bg-gray-300 rounded h-5 mt-3 w-32"></div>
                </div>
              </>
            ) : team && team.Builder.length >= 1 ? (
              team.Builder.map((staff: any) => {
                return (
                  <div className="items-center flex flex-col hover:opacity-100 opacity-75 py-5 delay-100 transition">
                    <img
                      src={staff.avatar}
                      alt="Avatar"
                      className="rounded-md h-32 w-32"
                    />
                    <p className="font-light mt-3 text-color-medium">
                      {staff.name}
                    </p>
                  </div>
                )
              })
            ) : (
              <div className="items-center bg-primary rounded flex justify-center px-8 py-10 w-full">
                <p className="font-light text-color-medium">
                  Nenhum staff encontrado nesse cargo!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  )
}
