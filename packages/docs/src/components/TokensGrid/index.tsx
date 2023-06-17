import './styles.css'

interface TokensGridProps {
  tokens: Record<string, string>
  hasRem: boolean
}

export function TokensGrid({ tokens, hasRem = false }: TokensGridProps) {
  return (
    <table className="tokens-grid">
      <thead>
        <tr>
          <td>Name</td>
          <td>Value</td>
          {hasRem && <td>Pixel</td>}
        </tr>
      </thead>
      <tbody>
        {Object.entries(tokens).map(([key, value]) => {
          return (
            <tr key={key}>
              <td>{key}</td>
              <td>{value}</td>
              {hasRem && <td>{Number(value.replace('rem', '')) * 16}px</td>}
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
