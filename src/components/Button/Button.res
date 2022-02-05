open AncestorCustom

open Button_Styles

@react.component
let make = (~children=React.null, ~type_=?, ~onClick=?, ~disabled=false, ~intent=#primary) => {
  <Base ?type_ tag=#button ?onClick className={buttonStyles(~intent, ~disabled)} disabled>
    <Box> <Text.Button> children </Text.Button> </Box>
  </Base>
}

module Icon = {
  @react.component
  let make = (~children, ~onClick=?) => {
    <Base tag=#button ?onClick className={iconStyles}> children </Base>
  }
}
