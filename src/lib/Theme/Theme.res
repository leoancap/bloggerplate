type status = [#active | #unactive]

type intent = [
  | #primary
  | #success
  | #danger
  | #none
]

module Size = {
  let xs = 1.->#rem
  let sm = 2.->#rem
  let md = 3.->#rem
  let lg = 4.->#rem

  // Raw values
  let _xs = 1
  let _sm = 2.
  let _md = 3.
  let _lg = 4.
}

module FontSize = {
  /* font-sizes in pixels */
  let xs = 10->#px
  let sm = 16->#px
  let md = 24->#px
  let lg = 64->#px
}

module Padding = {
  let xs = Size.xs
  let sm = Size.sm
  let md = Size.md
  let lg = Size.lg
}

module BorderRadius = {
  let xs = 0.4->#rem
  let sm = 0.6->#rem
}

module Colors = {
  let primaryDark = "5820CF"->#hex
  let primary = "743AF0"->#hex
  let primaryLight = "6F5A9A"->#hex

  let successDark = "215432"->#hex
  let success = "00A985"->#hex
  let successLight = "62836A"->#hex

  let dangerDark = "B70021"->#hex
  let danger = "FF1B51"->#hex
  let dangerLight = "DB0038"->#hex

  let noneDark = "3A3939"->#hex
  let none = "5D5C5C"->#hex
  let noneLight = "838282"->#hex

  let black = "070707"->#hex
  let grayDark = "242424"->#hex
  let grayLight = "A7A7A7"->#hex
  let white = "FFFFFF"->#hex
  let gray = "3A3939"->#hex
}
