# assemblyscript-regex

A regex engine for AssemblyScript.

[AssemblyScript](https://www.assemblyscript.org/) is a new language, based on TypeScript, that runs on WebAssembly. AssemblyScript has a lightweight standard library, but lacks support for Regular Expression. The project fills that gap!

This project exposes an API that mirrors the JavaScript [RegExp](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp) class:

```javascript
const regex = new RegExp("fo*", "g");
const str = "table football, foul";

let match: Match | null = regex.exec(str);
while (match != null) {
  // first iteration
  //   match.index = 6
  //   match.matches[0] = "foo"

  // second iteration
  //   match.index = 16
  //   match.matches[0] = "fo"
  match = regex.exec(str);
}
```

## Project status

The initial focus of this implementation has been feature support and functionality over performance. It currently supports a sufficient number of regex features to be considered useful, including most character classes, common assertions, groups, alternations, capturing groups and quantifiers.

The next phase of development will focussed on more extensive testing and performance. The project currently has reasonable unit test coverage, focussed on positive and negative test cases on a per-feature basis. It also includes a more exhaustive test suite with test cases borrowed from another regex library.

### Feature support

Based on the classfication within the [MDN cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

**Character sets**

- [x] .
- [x] \d
- [x] \D
- [x] \w
- [x] \W
- [x] \s
- [x] \S
- [x] \t
- [x] \r
- [x] \n
- [x] \v
- [x] \f
- [ ] [\b]
- [ ] \0
- [ ] \cX
- [x] \xhh
- [x] \uhhhh
- [ ] \u{hhhh} or \u{hhhhh}
- [x] \

**Assertions**

- [x] ^
- [x] $
- [ ] \b
- [ ] \B

**Other assertions**

- [ ] x(?=y) Lookahead assertion
- [ ] x(?!y) Negative lookahead assertion
- [ ] (?<=y)x Lookbehind assertion
- [ ] (?<!y)x Negative lookbehind assertion

**Groups and ranges**

- [x] x|y
- [x] [xyz][a-c]
- [x] [^xyz][^a-c]
- [x] (x) capturing group
- [ ] \n back reference
- [ ] (?<Name>x) named capturing group
- [x] (?:x) Non-capturing group

**Quantifiers**

- [x] x\*
- [x] x+
- [x] x?
- [x] x{n}
- [x] x{n,}
- [x] x{n,m}
- [ ] x\*? / x+? / ...

**RegExp**

- [x] global
- [ ] sticky
- [x] case insensitive
- [x] multiline
- [x] dotAll
- [ ] unicode

### Development

This project is open source, MIT licenced and your contributions are very much welcomed.

To get started, check out the repository and install dependencies:

```
$ npm install
```

A few general points about the tools and processes this project uses:

- This project uses prettier for code formatting and eslint to provide additional syntactic checks. These are both run on `npm test` and as part of the CI build.
- The unit tests are executed using [as-pect](https://github.com/jtenner/as-pect) - a native AssemblyScript test runner
- The specification tests are within the `spec` folder. The `npm run test:generate` target transforms these tests into as-pect tests which execute as part of the standard build / test cycle
- In order to support improved debugging you can execute this library as TypeScript (rather than WebAssembly), via the `npm run tsrun` target.
