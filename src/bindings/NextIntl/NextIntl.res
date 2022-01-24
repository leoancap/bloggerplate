type messages

@val external require_: string => messages = "require"

module NextIntlProvider = {
  @module("next-intl") @react.component
  external make: (
    ~locale: Next.Router.locale,
    ~messages: messages,
    ~children: React.element,
  ) => React.element = "NextIntlProvider"
}

module Trans = {
  type t

  @send external trans: string => unit = "write"
}

@module("next-intl")
external useNextIntlTranslations: (unit, . string) => string = "useTranslations"

@module("next-intl")
external useNextIntlTranslationsWithValues: (unit, . string, {..}) => string = "useTranslations"

let useTranslations = () => {
  let intl = useNextIntlTranslations()
  message => intl(. message)
}

let useTranslationsWithValues = () => {
  let intl = useNextIntlTranslationsWithValues()
  (message, values) => intl(. message, values)
}
