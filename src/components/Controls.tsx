interface ControlsProps {
  jogando: boolean
  onDistribuir: () => void
  onPedirCarta: () => void
  onParar: () => void
}

function Controls({ jogando, onDistribuir, onPedirCarta, onParar }: ControlsProps) {
  return (
    <div style={{ marginTop: '20px' }}>
      <button onClick={onDistribuir} disabled={jogando}>Distribuir</button>
      <button onClick={onPedirCarta} disabled={!jogando}>Comprar carta</button>
      <button onClick={onParar} disabled={!jogando}>Parar</button>
    </div>
  )
}

export default Controls
