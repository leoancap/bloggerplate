open Emotion
open Theme
open AncestorCustom

let card = css({
  "background": Colors.grayLight,
  "borderRadius": Radius.make(1),
  "padding": Padding.xs,
})

@react.component
let make = (~children) => {
  <Box px={[xs(Size.xs)]} className={card}> children </Box>
}
