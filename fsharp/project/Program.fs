open FSharp.Scanf

printfn "what is the ultimate answer?"

try
  let answer = scanfn "%i"
  if answer = 42 then
      printfn "correct"
  else
      printfn "incorrect"
with
  | _ -> printfn "invalid input"