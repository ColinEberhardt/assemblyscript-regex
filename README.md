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

 - [ ] x(?=y)
 - [ ] x(?!y)
 - [ ] (?<=y)x
 - [ ] (?<!y)x

### Groups and ranges

 - [x] x|y
 - [ ] [xyz][a-c]
 - [ ] [^xyz][^a-c]
 - [ ] (x)
 - [ ] \n
 - [ ] (?<Name>x)
 - [ ] (?:x)

### Quantifiers

 - [x] x*
 - [x] x+
 - [x] x?
 - [ ] x{n}
 - [ ] x{n,}
 - [ ] x{n,m}
 - [ ] x*? / x+? / ...
