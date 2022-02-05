open Theme

module Backdrop = %styled.div(`
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  cursor: pointer;
`)

module Container = %styled.div(
  (~size) =>
    `
    background-color: $(Colors.grayDark);
    width: $(size);
    height: $(size);
    border-radius: $(BorderRadius.xs);
    box-shadow: 0px 0px 5px 15px rgba(0, 0, 0, 0.35);
    display: flex;
    flex-direction: column;
    padding: $(Padding.md);
    cursor: default;
    z-index: 1;
`
)
