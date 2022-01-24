open AncestorCustom
open Next

module Styles = {
  open Theme
  let container = Emotion.css({
    "backgroundColor": Theme.Colors.gray,
    "width": "100%",
    "height": "100%",
    "display": "flex",
    "flexDirection": "column",
    /* "paddingBottom": Padding.xs, */
  })

  let icon = (~active=false, ~pushToBottom=false, ()) =>
    Emotion.css({
      "padding": Padding.xs,
      "position": "relative",
      "svg, img": {
        "width": Spacing.make(4),
        "height": Spacing.make(4),
      },
      "marginTop": pushToBottom ? "auto" : "unset",
      "color": Colors.grayLight,
      "cursor": "pointer",
      "&:hover": {
        "color": Colors.white,
      },
      "&:before": {
        "content": "' '",
        "height": Spacing.make(6),
        "width": "2px",
        "position": "absolute",
        "top": "0",
        "left": "0",
        "backgroundColor": Colors.white,
        "display": active ? "unset" : "none",
      },
    })
}

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
    <NavItem title={t("Code")} active={pathname == "/"} href="/" icon={<Icon.FiTerminal />} />
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
