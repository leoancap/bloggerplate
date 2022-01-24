open AncestorCustom
open Theme

module Styles = {
  open Emotion

  let container = css({
    "display": "flex",
    "flexDirection": "column",
  })

  let header = css({
    "display": "flex",
    "justifyContent": "space-between",
  })
}

@react.component
let make = (~isOpen, ~onClose) => {
  let t = NextIntl.useTranslations()
  <Modal
    size=#md
    isOpen
    onClose
    content={<Box className=Styles.container>
      <Box className=Styles.header>
        <Text.H3 color=Colors.grayLight> {t("Add a new post")} </Text.H3>
        <Button.Icon onClick={_ => onClose()}> <Icon.FiX /> </Button.Icon>
      </Box>
      <Box> <input /> </Box>
      <Box> <textArea /> </Box>
    </Box>}
  />
}
