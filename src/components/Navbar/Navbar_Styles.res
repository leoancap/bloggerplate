open Theme
open CssJs

module Container = %styled.div(`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: $(Theme.Colors.gray);
`)

module IconStyled = %styled.div(
  (~status=#unactive, ~mt=#unset) => {
    let display = switch status {
    | #active => #unset
    | #unactive => #none
    }

    [
      color(Colors.grayLight),
      cursor(#pointer),
      position(#relative),
      padding(Padding.xs),
      marginTop(mt),
    ]
  }
)
/* svg, img { */
/* height: $(Size.lg); */
/* width: $(Size.lg); */
/* } */
/* &:hover { */
/* color: $(Colors.white) */
/* } */
/* &::before { */
/* content: ' '; */
/* height: 6rem; */
/* width: 2px; */
/* top: 0; */
/* left: 0; */
/* position: absolute; */
/* background-color: $(Colors.white); */
/* display: $(display) */
/* } */
