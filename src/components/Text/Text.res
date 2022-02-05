open AncestorCustom
open Theme

type tags = [#p | #span | #div | #h1 | #h2 | #h3]

module Title = {
  @react.component
  let make = (~color=Colors.grayLight, ~className="", ~tag=#h1, ~children) => {
    let titleStyles = %cx(`
      color: $(color);
      margin: 0;
      line-height: 80%;
      font-size: $(FontSize.lg)
    `)

    <Typography className={`${titleStyles} ${className}`} tag> {children->Render.s} </Typography>
  }
}

module H3 = {
  @react.component
  let make = (~color=Colors.grayDark, ~className="", ~tag=#h2, ~children) => {
    let titleStyles = %cx(`
      color: $(color);
      margin: 0;
      line-height: 90%;
      font-size: $(FontSize.md)
      `)
    <Typography className={`${titleStyles} ${className}`} tag> {children->Render.s} </Typography>
  }
}

module Body = {
  @react.component
  let make = (~color=Colors.grayDark, ~className="", ~tag=#p, ~children) => {
    let titleStyles = %cx(`
      color: $(color);
      margin: 0;
      line-height: 90%;
      font-size: $(FontSize.sm)
      `)
    <Typography className={`${titleStyles} ${className}`} tag> {children->Render.s} </Typography>
  }
}

module Small = {
  @react.component
  let make = (~color=Colors.danger, ~className="", ~tag=#p, ~children) => {
    let titleStyles = %cx(`
      color: $(color);
      margin: 0;
      font-size: $(FontSize.xs)
      `)
    <Typography className={`${titleStyles} ${className}`} tag> {children->Render.s} </Typography>
  }
}

module Button = {
  @react.component
  let make = (~color=Colors.white, ~className="", ~tag=#p, ~children) => {
    let titleStyles = %cx(`
      color: $(color);
      margin: 0;
      font-weight: bold;
      font-size: $(FontSize.sm)
      `)
    <Typography className={`${titleStyles} ${className}`} tag> {children} </Typography>
  }
}
