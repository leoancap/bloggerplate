open AncestorCustom
open Theme

let container = Emotion.css({
  "backgroundColor": Theme.Colors.gray,
  "width": "100%",
  "height": "100%",
  "display": "flex",
  "flexDirection": "column",
})

let icon = (~active=false, ~pushToBottom=false, ()) =>
  Emotion.css({
    "padding": Padding.xs,
    "position": "relative",
    "svg, img": {
      "width": Spacing.make(4),
      "height": Spacing.make(4),
    },
    "marginTop": pushToBottom ? "auto" : "unset",
    "color": Colors.grayLight,
    "cursor": "pointer",
    "&:hover": {
      "color": Colors.white,
    },
    "&:before": {
      "content": "' '",
      "height": Spacing.make(6),
      "width": "2px",
      "position": "absolute",
      "top": "0",
      "left": "0",
      "backgroundColor": Colors.white,
      "display": active ? "unset" : "none",
    },
  })
