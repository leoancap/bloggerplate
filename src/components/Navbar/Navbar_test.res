open TestUtils

%raw(`jest.mock('next/router',() => ({useRouter: () => ({pathname: "/" })}) )`)
%raw(`jest.mock('next-auth/react',() => ({useSession: () => ({})}) )`)
%raw(`jest.mock('next-intl', () => ({useTranslations: () => t => t}) )`)

let navbar = <Navbar />

test("render Code NavItem", () => {
  navbar->render->getByTitle(~matcher=#Str("Code"))->expect->toMatchSnapshot
})

test("render Review NavItem", () => {
  navbar->render->getByTitle(~matcher=#Str("Review"))->expect->toMatchSnapshot
})

test("render Signin NavItem", () => {
  navbar->render->getByTitle(~matcher=#Str("Signin"))->expect->toMatchSnapshot
})

test("render Signout NavItem", () => {
  %raw(`jest.spyOn(require('next-auth/react'), 'useSession').mockReturnValue(
    {data: {user: {name: "mockUser"}}
  })`) |> ignore
  navbar->render->getByTitle(~matcher=#Str("Signout"))->expect->toMatchSnapshot
})

test("render Settings NavItem", () => {
  navbar->render->getByTitle(~matcher=#Str("Settings"))->expect->toMatchSnapshot
})
