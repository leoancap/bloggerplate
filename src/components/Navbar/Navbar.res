open AncestorCustom
open Next

open Navbar_Styles

module NavItem = {
  @react.component
  let make = (~href=?, ~icon, ~title=?, ~status=#unactive, ~mt=?, ~onClick=?) => {
    let content = switch href {
    | Some(href) => <Link href> <div> icon </div> </Link>
    | None => icon
    }
    <IconStyled ?mt status ?onClick ?title> content </IconStyled>
  }
}

@react.component
let make = () => {
  let {pathname} = Router.useRouter()
  let session = Next.Auth.useSession()

  let t = NextIntl.useTranslations()

  <Container>
    <NavItem
      title={t("Posts")}
      status={pathname == "/" ? #active : #unactive}
      href="/"
      icon={<Icon.FiTerminal />}
    />
    <NavItem
      title={t("Review")}
      status={pathname == "/review" ? #active : #unactive}
      href="/review"
      icon={<Icon.FiHeart />}
    />
    <NavItem
      mt=#auto
      title={t(Js.Nullable.isNullable(session.data) ? "Signin" : "Signout")}
      onClick={Js.Nullable.isNullable(session.data) ? Auth.signIn : Auth.signOut}
      icon={switch Js.Nullable.toOption(session.data) {
      | Some({user}) => <Base alt=user.name tag=#img src=user.image />
      | None => <Icon.FiUser />
      }}
    />
    <NavItem title={t("Settings")} icon={<Icon.FiSettings />} />
  </Container>
}
