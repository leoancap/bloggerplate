open AncestorCustom
open Theme

type tags = [#p | #span | #div | #h1 | #h2 | #h3]

let styles = Emotion.css({
  "margin": 0,
})

module Title = {
  @react.component
  let make = (~color=Colors.grayLight, ~className="", ~tag=#h1, ~children) => {
    <Typography
      lineHeight=[xs(80.->#pct)]
      fontSize=[xs(FontSize.lg->#px)]
      className={className ++ styles}
      color=[xs(color->#hex)]
      tag>
      {children->Render.s}
    </Typography>
  }
}

module H3 = {
  @react.component
  let make = (~color=Colors.grayDark, ~className="", ~tag=#h2, ~children) => {
    <Typography
      lineHeight=[xs(90.->#pct)]
      fontSize=[xs(FontSize.md->#px)]
      className={className ++ styles}
      color=[xs(color->#hex)]
      tag>
      {children->Render.s}
    </Typography>
  }
}

module Body = {
  @react.component
  let make = (~color=Colors.grayDark, ~className="", ~tag=#p, ~children) => {
    <Typography
      fontSize=[xs(FontSize.sm->#px)] className={className ++ styles} color=[xs(color->#hex)] tag>
      {children->Render.s}
    </Typography>
  }
}

module Small = {
  @react.component
  let make = (~color=Colors.danger, ~className="", ~tag=#p, ~children) => {
    <Typography
      fontSize=[xs(FontSize.xs->#px)] className={className ++ styles} color=[xs(color->#hex)] tag>
      {children->Render.s}
    </Typography>
  }
}

module Button = {
  @react.component
  let make = (~color=Colors.white, ~className="", ~tag=#p, ~children) => {
    <Typography
      fontWeight=[xs(#bold)]
      fontSize=[xs(FontSize.sm->#px)]
      className={className ++ styles}
      color=[xs(color->#hex)]
      tag>
      {children}
    </Typography>
  }
}
