# as-regex

A regex engine built with AssemblyScript

Currently AssemblyScript lacks Regex support. For a bit of fun I thought I'd try implementing a simple regex engine, based on [Denis Kyashif's blog post](https://deniskyashif.com/2019/02/17/implementing-a-regular-expression-engine/). The implementation is relatively simplistic, I've focussed on functionality rather than performance. However, it might be of use to someone.

## Feature support

based on the [MDN cheatsheet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)

### Character classes

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
 - [ ] \xhh
 - [ ] \uhhhh
 - [ ] \u{hhhh} or \u{hhhhh}
 - [x] \

### Assertions

 - [x] ^
 - [x] $
 - [ ] \b
 - [ ] \B

### Other assertions

 - [ ] x(?=y) Lookahead assertion
 - [ ] x(?!y) Negative lookahead assertion
 - [ ] (?<=y)x Lookbehind assertion
 - [ ] (?<!y)x Negative lookbehind assertion

### Groups and ranges

 - [x] x|y
 - [x] [xyz][a-c]
 - [x] [^xyz][^a-c]
 - [ ] (x) capturing group
 - [ ] \n back reference
 - [ ] (?<Name>x) named capturing group
 - [ ] (?:x) Non-capturing group

### Quantifiers

 - [x] x*
 - [x] x+
 - [x] x?
 - [ ] x{n}
 - [ ] x{n,}
 - [ ] x{n,m}
 - [ ] x*? / x+? / ...

### Runtime

 - [ ] multiline

## Testing

Currently passes 83 of the 217 tests from the Rust regex test suite:

https://raw.githubusercontent.com/rust-lang/regex/master/src/testdata/basic.dat