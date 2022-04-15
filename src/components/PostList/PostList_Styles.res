open Theme

module Container = %styled.div(`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 1rem;
  padding: 0 $(Padding.md);
`)

module Header = %styled.div(`
  padding: $(Padding.md);
  display: flex;
  justify-content: space-between;
  align-items: center;
`)
