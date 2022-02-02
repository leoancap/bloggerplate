let s = React.string

let mapi = (items, fn) =>
  items->Js.Array2.mapi((item, index) => fn(item, index->Js.Int.toString))->React.array

let map = (items, fn) => items->Js.Array2.mapi((item, _) => fn(item))->React.array
