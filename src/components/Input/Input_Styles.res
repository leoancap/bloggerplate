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

let commonInputStyles = (~intent) => {
  let borderStyles = switch intent {
  | #danger => border(1->#px, #solid, Colors.danger)
  | _ => border(#zero, #none, #transparent)
  }
  [
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
  ]
}

module InputStyled = %styled.input(
  (~intent) => {
    let styles = commonInputStyles(~intent)

    styles
  }
)

module TextArea = %styled.textarea(
  (~intent) => {
    let styles = Js.Array2.concat(
      [minHeight(10.->#rem), maxHeight(25.->#rem), resize(#vertical)],
      commonInputStyles(~intent),
    )
    styles
  }
)

module Error = %styled.div(`
  position: absolute;
  bottom: -2rem;
`)

let sharedStyles = [%css("height: 28px")]

module Comp1 = %styled.div(
  (~a) => {
    let styles = sharedStyles
    styles
  }
)

module Comp2 = %styled.div(
  (~a) => {
    sharedStyles
  }
)
