open Theme
open CssJs

module Container = %styled.div(`
    display: grid;
    grid-gap: 1rem;
    position: relative;
`)

module Label = %styled.label(`
    color: $(Colors.grayLight);
    font-size: $(FontSize.sm);
`)

let commonStyles = (~intent) => {
  let borderStyles = switch intent {
  | #danger => border(1->#px, #solid, Colors.danger)
  | _ => border(#zero, #none, #transparent)
  }
  %cx([
    borderStyles,
    color(Colors.white),
    fontSize(FontSize.sm),
    background(Colors.gray),
    padding2(~v=Padding.xs, ~h=Padding.xs),
    borderRadius(BorderRadius.sm),
    outline(#zero, #none, #transparent),
    width(100.->#percent),
    transitionDuration(300),
    placeholder([color(Colors.grayLight)]),
    focus([transitionDuration(300), boxShadow(Shadow.box(~spread=2->#px, Colors.primary))]),
  ])
}

module InputStyled = %styled.input((~intent) => [])

module TextArea = %styled.textarea(
  (~intent) => [minHeight(10.->#rem), maxHeight(25.->#rem), resize(#vertical)]
)

module Error = %styled.div(`
  position: absolute;
  bottom: -2rem;
`)
