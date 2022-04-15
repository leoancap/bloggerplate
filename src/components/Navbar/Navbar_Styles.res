open Theme
open CssJs

module Container = %styled.div(`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: $(Theme.Colors.gray);
`)

module IconStyled = %styled.div(
  (~status=#unactive, ~mt=#unset) => {
    [
      color(Colors.grayLight),
      cursor(#pointer),
      position(#relative),
      padding(Padding.xs),
      marginTop(mt),
      selector(. "svg, img", [height(Size.lg), width(Size.lg)]),
      hover([color(Colors.white)]),
      before([
        unsafe("content", "' '"),
        height(6.->#rem),
        width(2->#px),
        top(#zero),
        left(#zero),
        position(#absolute),
        backgroundColor(Colors.white),
        display(
          switch status {
          | #active => #unset
          | #unactive => #none
          },
        ),
      ]),
    ]
  }
)
