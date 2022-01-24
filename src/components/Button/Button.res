open Theme
open AncestorCustom

module Styles = {
  open Emotion
  let button = (~intent, ~disabled) =>
    css({
      "minWidth": Spacing.make(12),
      "minHeight": Spacing.make(3),
      "color": Colors.white,
      "borderRadius": Radius.make(1),
      "backgroundColor": switch intent {
      | #primary => Colors.primary
      | #success => Colors.success
      | #danger => Colors.danger
      },
      "fontFamily": "Roboto",
      "cursor": disabled ? "not-allowed" : "pointer",
      "&:hover": {
        "backgroundColor": switch intent {
        | #primary => Colors.primaryDark
        | #success => Colors.successDark
        | #danger => Colors.dangerDark
        },
      },
      "outline": "none",
      "border": "none",
    })

  let icon = () =>
    css({
      "outline": "",
      "border": "none",
      "backgroundColor": "transparent",
      "color": Colors.grayLight,
      "svg": {
        "width": Spacing.make(3),
        "height": Spacing.make(3),
        "cursor": "pointer",
        "&:hover": {
          "color": Colors.white,
        },
      },
    })
}

@react.component
let make = (~children=React.null, ~onClick, ~disabled=false, ~intent=#primary) => {
  <Base tag=#button onClick className={Styles.button(~intent, ~disabled)} disabled>
    <Box> <Text.Button> children </Text.Button> </Box>
  </Base>
}

module Icon = {
  @react.component
  let make = (~children, ~onClick=?) => {
    <Base tag=#button ?onClick className={Styles.icon()}> children </Base>
  }
}