open AncestorCustom
open Theme

module Styles = {
  open Emotion

  let container = raw(
    `
    display: grid;
    grid-gap: ${Padding.xs};
    position: relative;
  `,
  )

  let label = raw(
    `
    color: ${Colors.grayLight};
    font-size: ${FontSize._sm};
  `,
  )

  let input = (~hasError) =>
    css({
      "color": Colors.white,
      "fontSize": FontSize.sm,
      "border": hasError ? `1px solid ${Theme.Colors.danger}` : "none",
      "padding": "1.6rem 1.6rem",
      "borderRadius": "6px",
      "outline": "none",
      "width": "100%",
      "backgroundColor": Colors.gray,
      "transition": "300ms",
      "&:placeholder": {
        "color": Colors.grayLight,
      },
      "&:focus": {
        "transition": "300ms",
        "boxShadow": `0px 0px 0px 2px ${Colors.primary}`,
      },
    })

  let textarea = raw(
    `
      min-height: ${Spacing.make(10)};
      max-height: ${Spacing.make(25)};
      resize: vertical
    `,
  )

  let error = raw(
    `
      position: absolute;
      bottom: -${Padding.sm}
    `,
  )
}

type tag = [#input | #textarea]

@react.component
let make = (~onChange=?, ~label, ~placeholder=?, ~value=?, ~tag=#input, ~error=None) => {
  let baseClass = Styles.input(~hasError=Belt.Option.isSome(error))
  let t = NextIntl.useTranslations()

  <Box className=Styles.container>
    <label className=Styles.label htmlFor=label> {label->Render.s} </label>
    {switch tag {
    | #input => <input className=baseClass ?onChange label ?placeholder ?value />
    | #textarea =>
      <textarea className={`${baseClass} ${Styles.textarea}`} ?onChange label ?placeholder ?value />
    }}
    {switch error {
    | Some(msg) => <Box className=Styles.error> <Text.Small> {t(msg)} </Text.Small> </Box>
    | None => React.null
    }}
  </Box>
}
