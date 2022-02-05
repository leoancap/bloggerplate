open CssJs

module Container = %styled.form([
  display(#flex),
  flexDirection(#column),
  gap(3.->#rem),
  height(100.->#percent),
])

module Header = %styled.div([display(#flex), justifyContent(#spaceBetween)])

module Footer = %styled.div([display(#flex), justifyContent(#spaceBetween), marginTop(#auto)])
