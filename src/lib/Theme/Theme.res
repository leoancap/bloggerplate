type intent = [
  | #primary
  | #success
  | #danger
  | #none
]

module Size = {
  let xs = 1
  let sm = 2
  let md = 3
  let lg = 4
}

module FontSize = {
  /* font-sizes in pixels */
  let xs = 10
  let sm = 16
  let md = 24
  let lg = 64

  let _xs = `10px`
  let _sm = `16px`
  let _md = `24px`
  let _lg = `64px`
}

module Padding = {
  open AncestorCustom
  let xs = Spacing.make(Size.xs)
  let sm = Spacing.make(Size.sm)
  let md = Spacing.make(Size.md)
  let lg = Spacing.make(Size.lg)
}

module Colors = {
  let primaryDark = "#5820CF"
  let primary = "#743AF0"
  let primaryLight = "#6F5A9A"

  let successDark = "#215432"
  let success = "#00A985"
  let successLight = "#62836A"

  let dangerDark = "#B70021"
  let danger = "#FF1B51"
  let dangerLight = "#DB0038"

  let noneDark = "#3A3939"
  let none = "#5D5C5C"
  let noneLight = "#838282"

  let black = "#070707"
  let grayDark = "#242424"
  let gray = "#3A3939"
  let grayLight = "#A7A7A7"
  let white = "#FFFFFF"
}

let fontFamily = "'Roboto Mono', monospace"
