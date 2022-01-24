let globalStyles = {
  "html, body, #root": {
    "width": "100%",
    "height": "100%",
    "margin": "0",
    "padding": "0",
  },
  "*": {
    "boxSizing": "border-box",
    "fontSize": "10px",
    "fontFamily": Theme.fontFamily,
  },
}

type pageProps = {
  session: Next.Auth.session,
  records: RescriptRelay.recordSourceRecords,
}

type props = {
  @as("Component")
  component: React.component<pageProps>,
  pageProps: pageProps,
}

let default = ({component, pageProps}) => {
  open NextIntl

  let content = React.createElement(component, pageProps)

  let {locale} = Next.Router.useRouter()

  let messages = require_(`../../lang/${locale->Js.String2.make}.json`)

  <NextIntlProvider locale messages>
    <RescriptRelay.Context.Provider
      environment={RelayEnv.createEnvironment(~records=pageProps.records, ())}>
      <Next.Auth.SessionProvider session=pageProps.session>
        <Emotion.Global styles=globalStyles />
        <Layout> <Navbar /> <section> content </section> </Layout>
      </Next.Auth.SessionProvider>
    </RescriptRelay.Context.Provider>
  </NextIntlProvider>
}
