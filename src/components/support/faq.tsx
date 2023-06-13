export function Faq() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div>
        <div className="relative">
          <input type="checkbox" id="toggle1" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle1"
          >
            1. Como me conectar ao servidor?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Conecte-se ao servidor pelos seguintes IPs: <br />
              Minecraft Original: original.hylex.net; <br />
              Minecraft Pirata: hylex.net.
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle2" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle2"
          >
            2. Quais são os modos de jogo do servidor?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Atualmente, o Hylex conta com diversos modos de jogo, sendo eles:
              SkyWars, BedWars, RankUP, e HG.
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle3" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle3"
          >
            3. Como vincular minha conta?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Para vincular sua conta ao nosso discord, solicite um token no
              lobby do servidor utilizando o comando “/vinculardiscord”. Feito
              isso, copie-o e cole no privado do nosso bot @Hylex#6300.
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle4" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle4"
          >
            4. Como me tornar membro da equipe?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              O servidor possui diversas equipes, confira abaixo a aplicação de
              cada uma delas: <br />
              Moderação:{' '}
              <a
                className="hover:opacity-75 underline"
                href="https://hylex.net/formulario"
              >
                https://hylex.net/formulario
              </a>
              ; <br />
              Atendimento:{' '}
              <a
                className="hover:opacity-75 underline"
                href="https://mchy.me/suportedc"
              >
                https://mchy.me/suportedc
              </a>
              ; <br />
              Hylex Studios:{' '}
              <a
                className="hover:opacity-75 underline"
                href="https://mchy.me/linkaqui"
              >
                https://mchy.me/linkaqui
              </a>
              ;
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle5" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle5"
          >
            5. Como me tornar parceiro do servidor?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Acesse os requisitos e informações sobre o programa de parceiros
              em:{' '}
              <a
                className="hover:opacity-75 underline"
                href="https://mchy.me/criadores"
              >
                https://mchy.me/criadores
              </a>
              .
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle6" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle6"
          >
            6. Como solicitar uma revisão?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Realize uma apelação em:{' '}
              <a
                className="hover:opacity-75 underline"
                href="https://mchy.me/revisao"
              >
                https://mchy.me/revisao
              </a>
              .
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="relative">
          <input type="checkbox" id="toggle7" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle7"
          >
            7. Como realizar uma denúncia?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Realize uma denúncia através de um report in-game, crie um ticket
              em nosso discord, ou entre em contato com um membro da equipe.
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle8" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle8"
          >
            8. Estou tendo problemas na compra de um produto, o que fazer?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Entre em contato com a nossa equipe através de um ticket
              financeiro no Discord do servidor.
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle9" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle9"
          >
            9. O servidor suporta quais versões do Minecraft?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              O servidor suporta, desde as versões 1.8, até 1.16.
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle10" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle10"
          >
            10. Quais mods são permitidos no servidor?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Confira as modificações permitidas em:{' '}
              <a
                className="hover:opacity-75 underline"
                href="https://hylex.net/rules"
              >
                https://hylex.net/rules
              </a>
              .
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle11" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle11"
          >
            11. Onde solicitar suporte?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              Você pode solicitar suporte através dos tickets do nosso Discord.
            </p>
          </div>
        </div>
        <div className="relative">
          <input type="checkbox" id="toggle12" className="toggle hidden" />
          <label
            className="title bg-primary cursor-pointer block font-bold p-5 text-color-light"
            htmlFor="toggle12"
          >
            12. Quais são as recompensas do boost no Discord?
          </label>
          <div className="content bg-primary overflow-hidden">
            <p className="font-semibold mt-5 px-8 text-color-light">Resposta</p>
            <p className="mt-2 pb-5 px-8 text-color-medium">
              A recompensa pelo impulsionamento ao nosso servidor é a tag
              Booster, possuindo os benefícios do VIP Gold.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
