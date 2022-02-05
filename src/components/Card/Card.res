open Theme
open CssJs

module Card = %styled.div([
  background(Colors.grayLight),
  borderRadius(BorderRadius.xs),
  padding(Padding.xs),
])

include Card
