module Config = Ancestor.Make({
  type breakpoints<'a> = [
    | #xs('a)
    | #sm('a)
    | #md('a)
    | #lg('a)
  ]

  let spacing = 10.0

  let radius = 4.0

  let sizeByBreakpoints = values =>
    switch values {
    | #xs(_) => 0
    | #sm(_) => 475
    | #md(_) => 920
    | #lg(_) => 1280
    }

  let unboxBreakpointValue = values =>
    switch values {
    | #xs(v) => v
    | #sm(v) => v
    | #md(v) => v
    | #lg(v) => v
    }

  let css = Ancestor_Emotion.css
})

module Base = Config.Base
module Box = Config.Box
module Typography = Config.Typography
module Grid = Config.Grid
module Hidden = Config.Hidden
module Color = Config.CssTypes.Color
module Spacing = Config.Spacing
module Radius = Config.Radius

let xs = v => #xs(v)
let sm = v => #sm(v)
let md = v => #md(v)
let lg = v => #lg(v)

let rem = v => v->Belt.Float.fromString->#rem
