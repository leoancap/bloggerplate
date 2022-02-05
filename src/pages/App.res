%styled.global(`
  html, body {
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
  }
`)
%styled.global(`
  * {
    box-sizing: border-box;
    font-size: 10px;
    font-family: 'Roboto Mono', monospace; 
  }
`)

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
        <Layout> <Navbar /> <section> content </section> </Layout>
      </Next.Auth.SessionProvider>
    </RescriptRelay.Context.Provider>
  </NextIntlProvider>
}
