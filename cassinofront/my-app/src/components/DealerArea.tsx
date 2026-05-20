import Card from './Card'

function DealerArea() {
  return (
    <section>
      <h2>Dealer</h2>
      <div style={{ display: 'flex', gap: '10px' }}>
        <Card />
        <Card />
      </div>
    </section>
  )
}

export default DealerArea