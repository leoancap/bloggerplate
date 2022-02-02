open Storybook
open Render

let onClick = event => Js.log(event)

storiesOf("Button", storybookModule)
->add("Primary", () => {
  let handleClick = event => {
    Js.log(("onClick => ", event))
  }
  <Button onClick={handleClick}> {`Easy`->s} </Button>
})
->add("Secondary", () => {
  let handleClick = event => {
    Js.log(("onClick => ", event))
  }
  <Button intent=#success onClick={handleClick}> {`Easy`->s} </Button>
})
->add("Danger", () => {
  let handleClick = event => {
    Js.log(("onClick => ", event))
  }
  <Button intent=#danger onClick={handleClick}> {`Easy`->s} </Button>
})
->ignore
