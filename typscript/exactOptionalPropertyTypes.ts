// deno-lint-ignore-file ban-ts-comment no-unused-vars
type Options = {
  theme?: "dark" | "light";
};
// @ts-ignore
const options = {} satisfies Options;

// @ts-expect-error
const invalidOptions = { theme: undefined } satisfies Options;

// "exactOptionalPropertyTypes" が true のとき、Optional Property に明示的に undefined を指定した場合はエラーにできる
