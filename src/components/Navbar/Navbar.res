open AncestorCustom
open Next

module Styles = Navbar_Styles

module NavItem = {
  @react.component
  let make = (~href=?, ~icon, ~title=?, ~active=false, ~pushToBottom=false, ~onClick=?) => {
    let content = switch href {
    | Some(href) => <Link href> <div> icon </div> </Link>
    | None => icon
    }
    <Box ariaSelected=active ?title ?onClick className={Styles.icon(~active, ~pushToBottom, ())}>
      content
    </Box>
  }
}

@react.component
let make = () => {
  let {pathname} = Router.useRouter()
  let session = Next.Auth.useSession()

  let t = NextIntl.useTranslations()

  <Box className=Styles.container>
    <NavItem title={t("Posts")} active={pathname == "/"} href="/" icon={<Icon.FiTerminal />} />
    <NavItem
      title={t("Review")} active={pathname == "/review"} href="/review" icon={<Icon.FiHeart />}
    />
    <NavItem
      pushToBottom=true
      title={t(Js.Nullable.isNullable(session.data) ? "Signin" : "Signout")}
      onClick={Js.Nullable.isNullable(session.data) ? Auth.signIn : Auth.signOut}
      icon={switch Js.Nullable.toOption(session.data) {
      | Some({user}) => <Base alt=user.name tag=#img src=user.image />
      | None => <Icon.FiUser />
      }}
    />
    <NavItem title={t("Settings")} icon={<Icon.FiSettings />} />
  </Box>
}
