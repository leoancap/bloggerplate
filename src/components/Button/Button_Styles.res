open Theme
open CssJs

let buttonStyles = (~intent, ~disabled) => {
  let (bg, bgHover) = switch intent {
  | #primary => (Colors.primary, Colors.primaryDark)
  | #success => (Colors.success, Colors.successDark)
  | #danger => (Colors.danger, Colors.dangerDark)
  | #none => (Colors.none, Colors.noneDark)
  }

  %cx([
    minWidth(12.->#rem),
    minHeight(3.->#rem),
    color(Colors.white),
    borderRadius(BorderRadius.xs),
    outline(0->#px, #none, #transparent),
    border(0->#px, #none, #transparent),
    backgroundColor(bg),
    hover([backgroundColor(bgHover)]),
    cursor(disabled ? #notAllowed : #pointer),
  ])
}

let iconStyles = %cx([
  outline(0->#px, #none, #transparent),
  border(0->#px, #none, #transparent),
  padding(#zero),
  backgroundColor(#transparent),
  color(Colors.grayLight),
  child("svg", [width(3.->#rem), height(3.->#rem), cursor(#pointer), hover([color(Colors.white)])]),
])
