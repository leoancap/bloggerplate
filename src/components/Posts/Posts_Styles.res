open Emotion
open Theme

let container = css({
  "display": "grid",
  "gridTemplateColumns": "1fr 1fr",
  "gridGap": Padding.md,
})

let header = css({
  "padding": Padding.md,
  "display": "flex",
  "justifyContent": "space-between",
  "alignItems": "center",
})
