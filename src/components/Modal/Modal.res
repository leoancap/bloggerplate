open Theme
open AncestorCustom

module Styles = {
  open Emotion

  let background = css({
    "width": "100vw",
    "height": "100vh",
    "backgroundColor": "rgba(0, 0, 0, 0.5)",
    "position": "fixed",
    "display": "flex",
    "justifyContent": "center",
    "alignItems": "center",
    "top": 0,
    "left": 0,
    "cursor": "pointer",
  })

  let container = (~size) =>
    css({
      "backgroundColor": Colors.grayDark,
      "width": Spacing.make(size),
      "height": Spacing.make(size),
      "borderRadius": Radius.make(1),
      "boxShadow": "rgba(0,0,0,0.35) 0px 5px 15px",
      "display": "flex",
      "flexDirection": "column",
      "padding": Padding.md,
      "cursor": "default",
      "zIndex": 1,
    })
}

@react.component
let make = (~isOpen=false, ~onClose, ~size=#lg, ~content) => {
  let size = switch size {
  | #xs => 20
  | #sm => 40
  | #md => 60
  | #lg => 80
  }

  switch isOpen {
  | false => React.null
  | true =>
    <Box className=Styles.background onClick={_ => onClose()}>
      <Box
        className={Styles.container(~size)} onClick={evt => ReactEvent.Mouse.stopPropagation(evt)}>
        content
      </Box>
    </Box>
  }
}
