module FormFields = %lenses(
  type state = {
    title: string,
    body: string,
  }
)

include ReForm.Make(FormFields)

let initialState: FormFields.state = {
  title: "",
  body: "",
}
