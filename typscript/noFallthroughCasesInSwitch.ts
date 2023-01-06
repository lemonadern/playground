// deno-lint-ignore-file ban-ts-comment no-inferrable-types no-fallthrough
const n: number = 3;

switch (n) {
  // @ts-expect-error
  case 1:
    console.log("");
    // break;

  default:
    break;
}

// noFallthroughCasesInSwitch が true のとき、 switch 文で Fallthrough させるようなコードを書くとエラーになる
