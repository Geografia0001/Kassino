import { useState } from 'react'
import Header from './components/Header'
import Table from './components/Table'
import DealerArea from './components/DealerArea'
import PlayerArea from './components/PlayerArea'
import Controls from './components/Controls'

const NAIPES = ['♠', '♣', '♥', '♦']
const VALORES = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K']

interface Carta {
  valor: string
  naipe: string
}

function criarBaralho(): Carta[] {
  const baralho: Carta[] = []
  for (const naipe of NAIPES) {
    for (const valor of VALORES) {
      baralho.push({ valor, naipe })
    }
  }
  for (let i = baralho.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baralho[i], baralho[j]] = [baralho[j], baralho[i]]
  }
  return baralho
}

function calcularPontos(cartas: Carta[]): number {
  let total = 0
  let ases = 0
  for (const carta of cartas) {
    if (['J', 'Q', 'K'].includes(carta.valor)) total += 10
    else if (carta.valor === 'A') { total += 11; ases++ }
    else total += parseInt(carta.valor)
  }
  while (total > 21 && ases > 0) { total -= 10; ases-- }
  return total
}

function App() {
  const [baralho, setBaralho] = useState<Carta[]>([])
  const [cartasJogador, setCartasJogador] = useState<Carta[]>([])
  const [cartasDealer, setCartasDealer] = useState<Carta[]>([])
  const [jogando, setJogando] = useState(false)
  const [revelado, setRevelado] = useState(false)
  const [mensagem, setMensagem] = useState('')

  function distribuir() {
    const novoBaralho = criarBaralho()
    const jogador = [novoBaralho.pop()!, novoBaralho.pop()!]
    const dealer = [novoBaralho.pop()!, novoBaralho.pop()!]

    setBaralho(novoBaralho)
    setCartasJogador(jogador)
    setCartasDealer(dealer)
    setRevelado(false)
    setJogando(true)
    setMensagem('')
  }

  function pedirCarta() {
    const novoBaralho = [...baralho]
    const novasCartas = [...cartasJogador, novoBaralho.pop()!]
    setBaralho(novoBaralho)
    setCartasJogador(novasCartas)

    if (calcularPontos(novasCartas) > 21) {
      setRevelado(true)
      setJogando(false)
      setMensagem('Estourou! Dealer ganhou.')
    }
  }

  function parar() {
    const novoBaralho = [...baralho]
    let novoDealer = [...cartasDealer]

    while (calcularPontos(novoDealer) < 17) {
      novoDealer.push(novoBaralho.pop()!)
    }

    setBaralho(novoBaralho)
    setCartasDealer(novoDealer)
    setRevelado(true)
    setJogando(false)

    const pontosJogador = calcularPontos(cartasJogador)
    const pontosDealer = calcularPontos(novoDealer)

    if (pontosDealer > 21 || pontosJogador > pontosDealer) setMensagem('Voce ganhou!')
    else if (pontosJogador === pontosDealer) setMensagem('Empate.')
    else setMensagem('Dealer ganhou.')
  }

  return (
    <div>
      <Header />

      <Table />

      <DealerArea cartas={cartasDealer} revelado={revelado} />

      <PlayerArea cartas={cartasJogador} />

      {mensagem && <p>{mensagem}</p>}

      <Controls
        jogando={jogando}
        onDistribuir={distribuir}
        onPedirCarta={pedirCarta}
        onParar={parar}
      />
    </div>
  )
}

export default App
