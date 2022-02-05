open Modal_Styles

@react.component
let make = (~isOpen=false, ~onClose, ~size=#lg, ~content) => {
  let size = switch size {
  | #xs => 20.->#rem
  | #sm => 40.->#rem
  | #md => 60.->#rem
  | #lg => 80.->#rem
  }

  switch isOpen {
  | false => React.null
  | true =>
    <Backdrop onClick={_ => onClose()}>
      <Container size onClick={evt => ReactEvent.Mouse.stopPropagation(evt)}> content </Container>
    </Backdrop>
  }
}
