open Theme
open AncestorCustom

let container = Emotion.css({
  "height": "100vh",
  "width": "100vw",
  "display": "grid",
  "backgroundColor": Colors.grayDark,
  "gridTemplateColumns": `${Spacing.make(6)} auto`,
})

@react.component
let make = (~children) => {
  <Base tag=#main className=container> children </Base>
}
