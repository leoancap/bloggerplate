open Theme

module Container = %styled.main(`
  height: 100vh;
  width: 100vw;
  display: grid;
  background-color: $(Colors.grayDark);
  grid-template-columns: 6rem auto;
`)

include Container
