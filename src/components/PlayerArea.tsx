import Card from './Card'

interface Carta {
  valor: string
  naipe: string
}

interface PlayerAreaProps {
  cartas: Carta[]
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

function PlayerArea({ cartas }: PlayerAreaProps) {
  const pontos = calcularPontos(cartas)

  return (
    <section>
      <h2>Jogador {cartas.length > 0 && `— ${pontos} pontos`}</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        {cartas.map((carta, i) => (
          <Card key={i} valor={carta.valor} naipe={carta.naipe} />
        ))}
      </div>
    </section>
  )
}

export default PlayerArea
