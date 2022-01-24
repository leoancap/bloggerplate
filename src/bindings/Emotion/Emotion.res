@module("@emotion/css") external css: {..} => string = "css"
@module("@emotion/css") external injectGlobal: {..} => unit = "injectGlobal"
@module("@emotion/css") external keyframes: {..} => string = "keyframes"

module Global = {
  @module("@emotion/react") @react.component
  external make: (~styles: {..}) => React.element = "Global"
}
