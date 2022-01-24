open TestUtils
open Render

let button = <Button onClick={_ => ()}> {"ButtonText"->s} </Button>

test("Component renders", () =>
  button
  //
  ->render
  ->getByText(~matcher=#Str("ButtonText"))
  ->expect
  ->toMatchSnapshot
)
