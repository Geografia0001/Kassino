interface CardProps {
  valor: string
  naipe: string
  hidden?: boolean
}

function Card({ valor, naipe, hidden = false }: CardProps) {
  const baseStyle = {
    border: '1px solid #000',
    width: '50px',
    height: '70px',
    boxSizing: 'border-box' as const,
    textAlign: 'center' as const,
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: '14px',
    flexShrink: 0,
  }

  if (hidden) {
    return <div style={{ ...baseStyle, background: '#003080' }}></div>
  }

  const isVermelho = naipe === '♥' || naipe === '♦'

  return (
    <div style={{ ...baseStyle, background: 'white', color: isVermelho ? 'red' : 'black' }}>
      {valor}{naipe}
    </div>
  )
}

export default Card
