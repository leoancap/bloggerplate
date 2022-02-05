open Input_Styles

type tag = [#input | #textarea]

@react.component
let make = (~onChange=?, ~label, ~placeholder=?, ~value=?, ~tag=#input, ~error=None) => {
  let t = NextIntl.useTranslations()

  let intent = Belt.Option.mapWithDefault(error, #success, _ => #danger)

  <Container>
    <Label htmlFor=label> {label->Render.s} </Label>
    {switch tag {
    | #input => <InputStyled intent ?onChange label ?placeholder ?value />
    | #textarea => <TextArea intent ?onChange label ?placeholder ?value />
    }}
    {switch error {
    | Some(msg) => <Error> <Text.Small> {t(msg)} </Text.Small> </Error>
    | None => React.null
    }}
  </Container>
}
