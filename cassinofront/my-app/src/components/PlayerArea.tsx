import Card from './Card'

function PlayerArea() {
  return (
    <section>
      <h2>Jogador</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default PlayerArea