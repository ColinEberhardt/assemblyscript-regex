const { RegExp, expectMatch, matches } = require("../util");

it("line: 0 - matches abracadabra$ against 'abracadabracadabra'", () => {
  const match = matches("abracadabra$", "abracadabracadabra");
  expect(match.matches[0]).toEqual("abracadabra");
});
it("line: 1 - matches a...b against 'abababbb'", () => {
  const match = matches("a...b", "abababbb");
  expect(match.matches[0]).toEqual("ababb");
});
it("line: 2 - matches XXXXXX against '..XXXXXX'", () => {
  const match = matches("XXXXXX", "..XXXXXX");
  expect(match.matches[0]).toEqual("XXXXXX");
});
it("line: 3 - matches \\) against '()'", () => {
  const match = matches("\\)", "()");
  expect(match.matches[0]).toEqual(")");
});
it("line: 4 - matches a] against 'a]a'", () => {
  const match = matches("a]", "a]a");
  expect(match.matches[0]).toEqual("a]");
});
it("line: 5 - matches } against '}'", () => {
  const match = matches("}", "}");
  expect(match.matches[0]).toEqual("}");
});
it("line: 6 - matches \\} against '}'", () => {
  const match = matches("\\}", "}");
  expect(match.matches[0]).toEqual("}");
});
it("line: 7 - matches \\] against ']'", () => {
  const match = matches("\\]", "]");
  expect(match.matches[0]).toEqual("]");
});
it("line: 8 - matches ] against ']'", () => {
  const match = matches("]", "]");
  expect(match.matches[0]).toEqual("]");
});
it("line: 9 - matches ] against ']'", () => {
  const match = matches("]", "]");
  expect(match.matches[0]).toEqual("]");
});
it("line: 10 - matches { against '{'", () => {
  const match = matches("{", "{");
  expect(match.matches[0]).toEqual("{");
});
it("line: 11 - matches } against '}'", () => {
  const match = matches("}", "}");
  expect(match.matches[0]).toEqual("}");
});
it("line: 12 - matches ^a against 'ax'", () => {
  const match = matches("^a", "ax");
  expect(match.matches[0]).toEqual("a");
});
it("line: 13 - matches \\^a against 'a^a'", () => {
  const match = matches("\\^a", "a^a");
  expect(match.matches[0]).toEqual("^a");
});
it("line: 14 - matches a\\^ against 'a^'", () => {
  const match = matches("a\\^", "a^");
  expect(match.matches[0]).toEqual("a^");
});
it("line: 15 - matches a$ against 'aa'", () => {
  const match = matches("a$", "aa");
  expect(match.matches[0]).toEqual("a");
});
it("line: 16 - matches a\\$ against 'a$'", () => {
  const match = matches("a\\$", "a$");
  expect(match.matches[0]).toEqual("a$");
});
it("line: 17 - matches ^$ against ''", () => {
  const match = matches("^$", "");
  expect(match.matches[0]).toEqual("");
});
it("line: 18 - matches $^ against ''", () => {
  const match = matches("$^", "");
  expect(match.matches[0]).toEqual("");
});
it("line: 19 - matches a($) against 'aa'", () => {
  const match = matches("a($)", "aa");
  expect(match.matches[0]).toEqual("a");
  expect(match.matches[1]).toEqual("");
});
it.skip("line: 20 - matches a*(^a) against 'aa'", () => {
  const match = matches("a*(^a)", "aa");
  expect(match.matches[0]).toEqual("a");
  expect(match.matches[1]).toEqual("a");
});
it("line: 21 - matches (..)*(...)* against 'a'", () => {
  const match = matches("(..)*(...)*", "a");
  expect(match.matches[0]).toEqual("");
});
it("line: 22 - matches (..)*(...)* against 'abcd'", () => {
  const match = matches("(..)*(...)*", "abcd");
  expect(match.matches[0]).toEqual("abcd");
  expect(match.matches[1]).toEqual("cd");
});
it("line: 23 - matches (ab|a)(bc|c) against 'abc'", () => {
  const match = matches("(ab|a)(bc|c)", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("ab");
  expect(match.matches[2]).toEqual("c");
});
it("line: 24 - matches (ab)c|abc against 'abc'", () => {
  const match = matches("(ab)c|abc", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("ab");
});
it("line: 25 - matches a{0}b against 'ab'", () => {
  const match = matches("a{0}b", "ab");
  expect(match.matches[0]).toEqual("b");
});
it("line: 26 - matches (a*)(b?)(b+)b{3} against 'aaabbbbbbb'", () => {
  const match = matches("(a*)(b?)(b+)b{3}", "aaabbbbbbb");
  expect(match.matches[0]).toEqual("aaabbbbbbb");
  expect(match.matches[1]).toEqual("aaa");
  expect(match.matches[2]).toEqual("b");
  expect(match.matches[3]).toEqual("bbb");
});
it("line: 27 - matches (a*)(b{0,1})(b{1,})b{3} against 'aaabbbbbbb'", () => {
  const match = matches("(a*)(b{0,1})(b{1,})b{3}", "aaabbbbbbb");
  expect(match.matches[0]).toEqual("aaabbbbbbb");
  expect(match.matches[1]).toEqual("aaa");
  expect(match.matches[2]).toEqual("b");
  expect(match.matches[3]).toEqual("bbb");
});
it("line: 28 - matches a{9876543210} against ''", () => {
  expect(() => new RegExp("a{9876543210}")).toThrow();
});
it("line: 29 - matches ((a|a)|a) against 'a'", () => {
  const match = matches("((a|a)|a)", "a");
  expect(match.matches[0]).toEqual("a");
  expect(match.matches[1]).toEqual("a");
  expect(match.matches[2]).toEqual("a");
});
it("line: 30 - matches (a*)(a|aa) against 'aaaa'", () => {
  const match = matches("(a*)(a|aa)", "aaaa");
  expect(match.matches[0]).toEqual("aaaa");
  expect(match.matches[1]).toEqual("aaa");
  expect(match.matches[2]).toEqual("a");
});
it("line: 31 - matches a*(a.|aa) against 'aaaa'", () => {
  const match = matches("a*(a.|aa)", "aaaa");
  expect(match.matches[0]).toEqual("aaaa");
  expect(match.matches[1]).toEqual("aa");
});
it("line: 32 - matches a(b)|c(d)|a(e)f against 'aef'", () => {
  const match = matches("a(b)|c(d)|a(e)f", "aef");
  expect(match.matches[0]).toEqual("aef");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("");
  expect(match.matches[3]).toEqual("e");
});
it("line: 33 - matches (a|b)?.* against 'b'", () => {
  const match = matches("(a|b)?.*", "b");
  expect(match.matches[0]).toEqual("b");
  expect(match.matches[1]).toEqual("b");
});
it("line: 34 - matches (a|b)c|a(b|c) against 'ac'", () => {
  const match = matches("(a|b)c|a(b|c)", "ac");
  expect(match.matches[0]).toEqual("ac");
  expect(match.matches[1]).toEqual("a");
});
it.skip("line: 35 - matches (a|b)c|a(b|c) against 'ab'", () => {
  const match = matches("(a|b)c|a(b|c)", "ab");
  expect(match.matches[0]).toEqual("ab");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("b");
});
it("line: 36 - matches (a|b)*c|(a|ab)*c against 'abc'", () => {
  const match = matches("(a|b)*c|(a|ab)*c", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("b");
});
it("line: 37 - matches (a|b)*c|(a|ab)*c against 'xc'", () => {
  const match = matches("(a|b)*c|(a|ab)*c", "xc");
  expect(match.matches[0]).toEqual("c");
});
it("line: 38 - matches (.a|.b).*|.*(.a|.b) against 'xa'", () => {
  const match = matches("(.a|.b).*|.*(.a|.b)", "xa");
  expect(match.matches[0]).toEqual("xa");
  expect(match.matches[1]).toEqual("xa");
});
it("line: 39 - matches a?(ab|ba)ab against 'abab'", () => {
  const match = matches("a?(ab|ba)ab", "abab");
  expect(match.matches[0]).toEqual("abab");
  expect(match.matches[1]).toEqual("ab");
});
it("line: 40 - matches a?(ac{0}b|ba)ab against 'abab'", () => {
  const match = matches("a?(ac{0}b|ba)ab", "abab");
  expect(match.matches[0]).toEqual("abab");
  expect(match.matches[1]).toEqual("ab");
});
it("line: 41 - matches ab|abab against 'abbabab'", () => {
  const match = matches("ab|abab", "abbabab");
  expect(match.matches[0]).toEqual("ab");
});
it("line: 42 - matches aba|bab|bba against 'baaabbbaba'", () => {
  const match = matches("aba|bab|bba", "baaabbbaba");
  expect(match.matches[0]).toEqual("bba");
});
it("line: 43 - matches aba|bab against 'baaabbbaba'", () => {
  const match = matches("aba|bab", "baaabbbaba");
  expect(match.matches[0]).toEqual("bab");
});
it("line: 44 - matches (aa|aaa)*|(a|aaaaa) against 'aa'", () => {
  const match = matches("(aa|aaa)*|(a|aaaaa)", "aa");
  expect(match.matches[0]).toEqual("aa");
  expect(match.matches[1]).toEqual("aa");
});
it("line: 45 - matches (a.|.a.)*|(a|.a...) against 'aa'", () => {
  const match = matches("(a.|.a.)*|(a|.a...)", "aa");
  expect(match.matches[0]).toEqual("aa");
  expect(match.matches[1]).toEqual("aa");
});
it("line: 46 - matches ab|a against 'xabc'", () => {
  const match = matches("ab|a", "xabc");
  expect(match.matches[0]).toEqual("ab");
});
it("line: 47 - matches ab|a against 'xxabc'", () => {
  const match = matches("ab|a", "xxabc");
  expect(match.matches[0]).toEqual("ab");
});
it.skip("line: 48 - matches (Ab|cD)* against 'aBcD'", () => {
  const match = matches("(Ab|cD)*", "aBcD");
  expect(match.matches[0]).toEqual("aBcD");
  expect(match.matches[1]).toEqual("cD");
});
it("line: 49 - matches [^-] against '--a'", () => {
  const match = matches("[^-]", "--a");
  expect(match.matches[0]).toEqual("a");
});
it("line: 50 - matches [a-]* against '--a'", () => {
  const match = matches("[a-]*", "--a");
  expect(match.matches[0]).toEqual("--a");
});
it("line: 51 - matches [a-m-]* against '--amoma--'", () => {
  const match = matches("[a-m-]*", "--amoma--");
  expect(match.matches[0]).toEqual("--am");
});
it("line: 52 - matches :::1:::0:|:::1:1:0: against ':::0:::1:::1:::0:'", () => {
  const match = matches(":::1:::0:|:::1:1:0:", ":::0:::1:::1:::0:");
  expect(match.matches[0]).toEqual(":::1:::0:");
});
it("line: 53 - matches :::1:::0:|:::1:1:1: against ':::0:::1:::1:::0:'", () => {
  const match = matches(":::1:::0:|:::1:1:1:", ":::0:::1:::1:::0:");
  expect(match.matches[0]).toEqual(":::1:::0:");
});
it.skip("line: 54 - matches [[:upper:]] against 'A'", () => {
  const match = matches("[[:upper:]]", "A");
  expect(match.matches[0]).toEqual("A");
});
it.skip("line: 55 - matches [[:lower:]]+ against '`az{'", () => {
  const match = matches("[[:lower:]]+", "`az{");
  expect(match.matches[0]).toEqual("az");
});
it.skip("line: 56 - matches [[:upper:]]+ against '@AZ['", () => {
  const match = matches("[[:upper:]]+", "@AZ[");
  expect(match.matches[0]).toEqual("AZ");
});
it("line: 57 - matches [[-]] against '[[-]]'", () => {
  const match = matches("[[-]]", "[[-]]");
  expect(match.matches[0]).toEqual("-]");
});
it.skip("line 58 - issue with parsing the test itself", () => {});
it.skip("line 59 - issue with parsing the test itself", () => {});
it.skip("line: 61 - matches \\n against '\\n'", () => {
  const match = matches("\\n", "\\n");
  expect(match.matches[0]).toEqual("\\");
});
it.skip("line: 62 - matches \\n against '\\n'", () => {
  const match = matches("\\n", "\\n");
  expect(match.matches[0]).toEqual("\\");
});
it("line: 63 - matches [^a] against '\\n'", () => {
  const match = matches("[^a]", "\\n");
  expect(match.matches[0]).toEqual("\\");
});
it.skip("line: 64 - matches \\na against '\\na'", () => {
  const match = matches("\\na", "\\na");
  expect(match.matches[0]).toEqual("\\n");
});
it("line: 65 - matches (a)(b)(c) against 'abc'", () => {
  const match = matches("(a)(b)(c)", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("a");
  expect(match.matches[2]).toEqual("b");
  expect(match.matches[3]).toEqual("c");
});
it("line: 66 - matches xxx against 'xxx'", () => {
  const match = matches("xxx", "xxx");
  expect(match.matches[0]).toEqual("xxx");
});
it("line: 67 - matches (^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$) against 'feb 6,'", () => {
  const match = matches(
    "(^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$)",
    "feb 6,"
  );
  expect(match.matches[0]).toEqual("feb 6,");
});
it("line: 68 - matches (^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$) against '2/7'", () => {
  const match = matches(
    "(^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$)",
    "2/7"
  );
  expect(match.matches[0]).toEqual("2/7");
});
it("line: 69 - matches (^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$) against 'feb 1,Feb 6'", () => {
  const match = matches(
    "(^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$)",
    "feb 1,Feb 6"
  );
  expect(match.matches[0]).toEqual(",Feb 6");
});
it("line: 70 - matches ((((((((((((((((((((((((((((((x)))))))))))))))))))))))))))))) against 'x'", () => {
  const match = matches(
    "((((((((((((((((((((((((((((((x))))))))))))))))))))))))))))))",
    "x"
  );
  expect(match.matches[0]).toEqual("x");
  expect(match.matches[1]).toEqual("x");
  expect(match.matches[2]).toEqual("x");
});
it("line: 71 - matches ((((((((((((((((((((((((((((((x))))))))))))))))))))))))))))))* against 'xx'", () => {
  const match = matches(
    "((((((((((((((((((((((((((((((x))))))))))))))))))))))))))))))*",
    "xx"
  );
  expect(match.matches[0]).toEqual("xx");
  expect(match.matches[1]).toEqual("x");
  expect(match.matches[2]).toEqual("x");
});
it.skip("line: 72 - matches a?(ab|ba)* against 'ababababababababababababababababababababababababababababababababababababababababa'", () => {
  const match = matches(
    "a?(ab|ba)*",
    "ababababababababababababababababababababababababababababababababababababababababa"
  );
  expect(match.matches[0]).toEqual(
    "ababababababababababababababababababababababababababababababababababababababababa"
  );
  expect(match.matches[1]).toEqual("ba");
});
it("line: 73 - matches abaa|abbaa|abbbaa|abbbbaa against 'ababbabbbabbbabbbbabbbbaa'", () => {
  const match = matches(
    "abaa|abbaa|abbbaa|abbbbaa",
    "ababbabbbabbbabbbbabbbbaa"
  );
  expect(match.matches[0]).toEqual("abbbbaa");
});
it("line: 74 - matches abaa|abbaa|abbbaa|abbbbaa against 'ababbabbbabbbabbbbabaa'", () => {
  const match = matches("abaa|abbaa|abbbaa|abbbbaa", "ababbabbbabbbabbbbabaa");
  expect(match.matches[0]).toEqual("abaa");
});
it("line: 75 - matches aaac|aabc|abac|abbc|baac|babc|bbac|bbbc against 'baaabbbabac'", () => {
  const match = matches(
    "aaac|aabc|abac|abbc|baac|babc|bbac|bbbc",
    "baaabbbabac"
  );
  expect(match.matches[0]).toEqual("abac");
});
it.skip("line: 76 - matches .* against '\\x01\xff'", () => {
  const match = matches(".*", "\\x01\xff");
  expect(match.matches[0]).toEqual("\\x");
});
it("line: 77 - matches aaaa|bbbb|cccc|ddddd|eeeeee|fffffff|gggg|hhhh|iiiii|jjjjj|kkkkk|llll against 'XaaaXbbbXcccXdddXeeeXfffXgggXhhhXiiiXjjjXkkkXlllXcbaXaaaa'", () => {
  const match = matches(
    "aaaa|bbbb|cccc|ddddd|eeeeee|fffffff|gggg|hhhh|iiiii|jjjjj|kkkkk|llll",
    "XaaaXbbbXcccXdddXeeeXfffXgggXhhhXiiiXjjjXkkkXlllXcbaXaaaa"
  );
  expect(match.matches[0]).toEqual("aaaa");
});
it.skip("line 78 - issue with parsing the test itself", () => {});
it("line: 79 - matches a*a*a*a*a*b against 'aaaaaaaaab'", () => {
  const match = matches("a*a*a*a*a*b", "aaaaaaaaab");
  expect(match.matches[0]).toEqual("aaaaaaaaab");
});
it("line: 80 - matches ^ against ''", () => {
  const match = matches("^", "");
  expect(match.matches[0]).toEqual("");
});
it("line: 81 - matches $ against ''", () => {
  const match = matches("$", "");
  expect(match.matches[0]).toEqual("");
});
it("line: 82 - matches ^$ against ''", () => {
  const match = matches("^$", "");
  expect(match.matches[0]).toEqual("");
});
it("line: 83 - matches ^a$ against 'a'", () => {
  const match = matches("^a$", "a");
  expect(match.matches[0]).toEqual("a");
});
it("line: 84 - matches abc against 'abc'", () => {
  const match = matches("abc", "abc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 85 - matches abc against 'xabcy'", () => {
  const match = matches("abc", "xabcy");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 86 - matches abc against 'ababc'", () => {
  const match = matches("abc", "ababc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 87 - matches ab*c against 'abc'", () => {
  const match = matches("ab*c", "abc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 88 - matches ab*bc against 'abc'", () => {
  const match = matches("ab*bc", "abc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 89 - matches ab*bc against 'abbc'", () => {
  const match = matches("ab*bc", "abbc");
  expect(match.matches[0]).toEqual("abbc");
});
it("line: 90 - matches ab*bc against 'abbbbc'", () => {
  const match = matches("ab*bc", "abbbbc");
  expect(match.matches[0]).toEqual("abbbbc");
});
it("line: 91 - matches ab+bc against 'abbc'", () => {
  const match = matches("ab+bc", "abbc");
  expect(match.matches[0]).toEqual("abbc");
});
it("line: 92 - matches ab+bc against 'abbbbc'", () => {
  const match = matches("ab+bc", "abbbbc");
  expect(match.matches[0]).toEqual("abbbbc");
});
it("line: 93 - matches ab?bc against 'abbc'", () => {
  const match = matches("ab?bc", "abbc");
  expect(match.matches[0]).toEqual("abbc");
});
it("line: 94 - matches ab?bc against 'abc'", () => {
  const match = matches("ab?bc", "abc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 95 - matches ab?c against 'abc'", () => {
  const match = matches("ab?c", "abc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 96 - matches ^abc$ against 'abc'", () => {
  const match = matches("^abc$", "abc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 97 - matches ^abc against 'abcc'", () => {
  const match = matches("^abc", "abcc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 98 - matches abc$ against 'aabc'", () => {
  const match = matches("abc$", "aabc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 99 - matches ^ against 'abc'", () => {
  const match = matches("^", "abc");
  expect(match.matches[0]).toEqual("");
});
it("line: 100 - matches $ against 'abc'", () => {
  const match = matches("$", "abc");
  expect(match.matches[0]).toEqual("");
});
it("line: 101 - matches a.c against 'abc'", () => {
  const match = matches("a.c", "abc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 102 - matches a.c against 'axc'", () => {
  const match = matches("a.c", "axc");
  expect(match.matches[0]).toEqual("axc");
});
it("line: 103 - matches a.*c against 'axyzc'", () => {
  const match = matches("a.*c", "axyzc");
  expect(match.matches[0]).toEqual("axyzc");
});
it("line: 104 - matches a[bc]d against 'abd'", () => {
  const match = matches("a[bc]d", "abd");
  expect(match.matches[0]).toEqual("abd");
});
it("line: 105 - matches a[b-d]e against 'ace'", () => {
  const match = matches("a[b-d]e", "ace");
  expect(match.matches[0]).toEqual("ace");
});
it("line: 106 - matches a[b-d] against 'aac'", () => {
  const match = matches("a[b-d]", "aac");
  expect(match.matches[0]).toEqual("ac");
});
it("line: 107 - matches a[-b] against 'a-'", () => {
  const match = matches("a[-b]", "a-");
  expect(match.matches[0]).toEqual("a-");
});
it("line: 108 - matches a[b-] against 'a-'", () => {
  const match = matches("a[b-]", "a-");
  expect(match.matches[0]).toEqual("a-");
});
it("line: 109 - matches a] against 'a]'", () => {
  const match = matches("a]", "a]");
  expect(match.matches[0]).toEqual("a]");
});
it("line: 110 - matches a[]]b against 'a]b'", () => {
  const match = matches("a[]]b", "a]b");
  expect(match.matches[0]).toEqual("a]b");
});
it("line: 111 - matches a[^bc]d against 'aed'", () => {
  const match = matches("a[^bc]d", "aed");
  expect(match.matches[0]).toEqual("aed");
});
it("line: 112 - matches a[^-b]c against 'adc'", () => {
  const match = matches("a[^-b]c", "adc");
  expect(match.matches[0]).toEqual("adc");
});
it("line: 113 - matches a[^]b]c against 'adc'", () => {
  const match = matches("a[^]b]c", "adc");
  expect(match.matches[0]).toEqual("adc");
});
it("line: 114 - matches ab|cd against 'abc'", () => {
  const match = matches("ab|cd", "abc");
  expect(match.matches[0]).toEqual("ab");
});
it("line: 115 - matches ab|cd against 'abcd'", () => {
  const match = matches("ab|cd", "abcd");
  expect(match.matches[0]).toEqual("ab");
});
it("line: 116 - matches a\\(b against 'a(b'", () => {
  const match = matches("a\\(b", "a(b");
  expect(match.matches[0]).toEqual("a(b");
});
it("line: 117 - matches a\\(*b against 'ab'", () => {
  const match = matches("a\\(*b", "ab");
  expect(match.matches[0]).toEqual("ab");
});
it("line: 118 - matches a\\(*b against 'a((b'", () => {
  const match = matches("a\\(*b", "a((b");
  expect(match.matches[0]).toEqual("a((b");
});
it("line: 119 - matches ((a)) against 'abc'", () => {
  const match = matches("((a))", "abc");
  expect(match.matches[0]).toEqual("a");
  expect(match.matches[1]).toEqual("a");
  expect(match.matches[2]).toEqual("a");
});
it("line: 120 - matches (a)b(c) against 'abc'", () => {
  const match = matches("(a)b(c)", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("a");
  expect(match.matches[2]).toEqual("c");
});
it("line: 121 - matches a+b+c against 'aabbabc'", () => {
  const match = matches("a+b+c", "aabbabc");
  expect(match.matches[0]).toEqual("abc");
});
it("line: 122 - matches a* against 'aaa'", () => {
  const match = matches("a*", "aaa");
  expect(match.matches[0]).toEqual("aaa");
});
it("line: 123 - matches (a*)* against '-'", () => {
  const match = matches("(a*)*", "-");
  expect(match.matches[0]).toEqual("");
  expect(match.matches[1]).toEqual("");
});
it("line: 124 - matches (a*)+ against '-'", () => {
  const match = matches("(a*)+", "-");
  expect(match.matches[0]).toEqual("");
  expect(match.matches[1]).toEqual("");
});
it("line: 125 - matches (a*|b)* against '-'", () => {
  const match = matches("(a*|b)*", "-");
  expect(match.matches[0]).toEqual("");
  expect(match.matches[1]).toEqual("");
});
it("line: 126 - matches (a+|b)* against 'ab'", () => {
  const match = matches("(a+|b)*", "ab");
  expect(match.matches[0]).toEqual("ab");
  expect(match.matches[1]).toEqual("b");
});
it("line: 127 - matches (a+|b)+ against 'ab'", () => {
  const match = matches("(a+|b)+", "ab");
  expect(match.matches[0]).toEqual("ab");
  expect(match.matches[1]).toEqual("b");
});
it("line: 128 - matches (a+|b)? against 'ab'", () => {
  const match = matches("(a+|b)?", "ab");
  expect(match.matches[0]).toEqual("a");
  expect(match.matches[1]).toEqual("a");
});
it("line: 129 - matches [^ab]* against 'cde'", () => {
  const match = matches("[^ab]*", "cde");
  expect(match.matches[0]).toEqual("cde");
});
it("line: 130 - matches (^)* against '-'", () => {
  const match = matches("(^)*", "-");
  expect(match.matches[0]).toEqual("");
  expect(match.matches[1]).toEqual("");
});
it("line: 131 - matches a* against ''", () => {
  const match = matches("a*", "");
  expect(match.matches[0]).toEqual("");
});
it("line: 132 - matches ([abc])*d against 'abbbcd'", () => {
  const match = matches("([abc])*d", "abbbcd");
  expect(match.matches[0]).toEqual("abbbcd");
  expect(match.matches[1]).toEqual("c");
});
it.skip("line: 133 - matches ([abc])*bcd against 'abcd'", () => {
  const match = matches("([abc])*bcd", "abcd");
  expect(match.matches[0]).toEqual("abcd");
  expect(match.matches[1]).toEqual("a");
});
it("line: 134 - matches a|b|c|d|e against 'e'", () => {
  const match = matches("a|b|c|d|e", "e");
  expect(match.matches[0]).toEqual("e");
});
it("line: 135 - matches (a|b|c|d|e)f against 'ef'", () => {
  const match = matches("(a|b|c|d|e)f", "ef");
  expect(match.matches[0]).toEqual("ef");
  expect(match.matches[1]).toEqual("e");
});
it("line: 136 - matches ((a*|b))* against '-'", () => {
  const match = matches("((a*|b))*", "-");
  expect(match.matches[0]).toEqual("");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("");
});
it("line: 137 - matches abcd*efg against 'abcdefg'", () => {
  const match = matches("abcd*efg", "abcdefg");
  expect(match.matches[0]).toEqual("abcdefg");
});
it("line: 138 - matches ab* against 'xabyabbbz'", () => {
  const match = matches("ab*", "xabyabbbz");
  expect(match.matches[0]).toEqual("ab");
});
it("line: 139 - matches ab* against 'xayabbbz'", () => {
  const match = matches("ab*", "xayabbbz");
  expect(match.matches[0]).toEqual("a");
});
it("line: 140 - matches (ab|cd)e against 'abcde'", () => {
  const match = matches("(ab|cd)e", "abcde");
  expect(match.matches[0]).toEqual("cde");
  expect(match.matches[1]).toEqual("cd");
});
it("line: 141 - matches [abhgefdc]ij against 'hij'", () => {
  const match = matches("[abhgefdc]ij", "hij");
  expect(match.matches[0]).toEqual("hij");
});
it("line: 142 - matches (a|b)c*d against 'abcd'", () => {
  const match = matches("(a|b)c*d", "abcd");
  expect(match.matches[0]).toEqual("bcd");
  expect(match.matches[1]).toEqual("b");
});
it("line: 143 - matches (ab|ab*)bc against 'abc'", () => {
  const match = matches("(ab|ab*)bc", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("a");
});
it("line: 144 - matches a([bc]*)c* against 'abc'", () => {
  const match = matches("a([bc]*)c*", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("bc");
});
it("line: 145 - matches a([bc]*)(c*d) against 'abcd'", () => {
  const match = matches("a([bc]*)(c*d)", "abcd");
  expect(match.matches[0]).toEqual("abcd");
  expect(match.matches[1]).toEqual("bc");
  expect(match.matches[2]).toEqual("d");
});
it("line: 146 - matches a([bc]+)(c*d) against 'abcd'", () => {
  const match = matches("a([bc]+)(c*d)", "abcd");
  expect(match.matches[0]).toEqual("abcd");
  expect(match.matches[1]).toEqual("bc");
  expect(match.matches[2]).toEqual("d");
});
it("line: 147 - matches a([bc]*)(c+d) against 'abcd'", () => {
  const match = matches("a([bc]*)(c+d)", "abcd");
  expect(match.matches[0]).toEqual("abcd");
  expect(match.matches[1]).toEqual("b");
  expect(match.matches[2]).toEqual("cd");
});
it("line: 148 - matches a[bcd]*dcdcde against 'adcdcde'", () => {
  const match = matches("a[bcd]*dcdcde", "adcdcde");
  expect(match.matches[0]).toEqual("adcdcde");
});
it("line: 149 - matches (ab|a)b*c against 'abc'", () => {
  const match = matches("(ab|a)b*c", "abc");
  expect(match.matches[0]).toEqual("abc");
  expect(match.matches[1]).toEqual("ab");
});
it.skip("line: 150 - matches ((a)(b)c)(d) against 'abcd'", () => {
  const match = matches("((a)(b)c)(d)", "abcd");
  expect(match.matches[0]).toEqual("abcd");
  expect(match.matches[1]).toEqual("abc");
  expect(match.matches[2]).toEqual("a");
  expect(match.matches[3]).toEqual("b");
  expect(match.matches[4]).toEqual("d");
});
it("line: 151 - matches [A-Za-z_][A-Za-z0-9_]* against 'alpha'", () => {
  const match = matches("[A-Za-z_][A-Za-z0-9_]*", "alpha");
  expect(match.matches[0]).toEqual("alpha");
});
it("line: 152 - matches ^a(bc+|b[eh])g|.h$ against 'abh'", () => {
  const match = matches("^a(bc+|b[eh])g|.h$", "abh");
  expect(match.matches[0]).toEqual("bh");
});
it("line: 153 - matches (bc+d$|ef*g.|h?i(j|k)) against 'effgz'", () => {
  const match = matches("(bc+d$|ef*g.|h?i(j|k))", "effgz");
  expect(match.matches[0]).toEqual("effgz");
  expect(match.matches[1]).toEqual("effgz");
});
it("line: 154 - matches (bc+d$|ef*g.|h?i(j|k)) against 'ij'", () => {
  const match = matches("(bc+d$|ef*g.|h?i(j|k))", "ij");
  expect(match.matches[0]).toEqual("ij");
  expect(match.matches[1]).toEqual("ij");
  expect(match.matches[2]).toEqual("j");
});
it("line: 155 - matches (bc+d$|ef*g.|h?i(j|k)) against 'reffgz'", () => {
  const match = matches("(bc+d$|ef*g.|h?i(j|k))", "reffgz");
  expect(match.matches[0]).toEqual("effgz");
  expect(match.matches[1]).toEqual("effgz");
});
it("line: 156 - matches (((((((((a))))))))) against 'a'", () => {
  const match = matches("(((((((((a)))))))))", "a");
  expect(match.matches[0]).toEqual("a");
  expect(match.matches[1]).toEqual("a");
  expect(match.matches[2]).toEqual("a");
  expect(match.matches[3]).toEqual("a");
  expect(match.matches[4]).toEqual("a");
  expect(match.matches[5]).toEqual("a");
  expect(match.matches[6]).toEqual("a");
  expect(match.matches[7]).toEqual("a");
  expect(match.matches[8]).toEqual("a");
  expect(match.matches[9]).toEqual("a");
});
it("line: 157 - matches multiple words against 'multiple words yeah'", () => {
  const match = matches("multiple words", "multiple words yeah");
  expect(match.matches[0]).toEqual("multiple words");
});
it("line: 158 - matches (.*)c(.*) against 'abcde'", () => {
  const match = matches("(.*)c(.*)", "abcde");
  expect(match.matches[0]).toEqual("abcde");
  expect(match.matches[1]).toEqual("ab");
  expect(match.matches[2]).toEqual("de");
});
it("line: 159 - matches abcd against 'abcd'", () => {
  const match = matches("abcd", "abcd");
  expect(match.matches[0]).toEqual("abcd");
});
it("line: 160 - matches a(bc)d against 'abcd'", () => {
  const match = matches("a(bc)d", "abcd");
  expect(match.matches[0]).toEqual("abcd");
  expect(match.matches[1]).toEqual("bc");
});
it("line: 161 - matches a[-]?c against 'ac'", () => {
  const match = matches("a[-]?c", "ac");
  expect(match.matches[0]).toEqual("ac");
});
it("line: 162 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Qaddafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Qaddafi"
  );
  expect(match.matches[0]).toEqual("Muammar Qaddafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 163 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Mo'ammar Gadhafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Mo'ammar Gadhafi"
  );
  expect(match.matches[0]).toEqual("Mo'ammar Gadhafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dh");
});
it("line: 164 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Kaddafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Kaddafi"
  );
  expect(match.matches[0]).toEqual("Muammar Kaddafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 165 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Qadhafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Qadhafi"
  );
  expect(match.matches[0]).toEqual("Muammar Qadhafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dh");
});
it("line: 166 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Gadafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Gadafi"
  );
  expect(match.matches[0]).toEqual("Muammar Gadafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("d");
});
it("line: 167 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Mu'ammar Qadafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Mu'ammar Qadafi"
  );
  expect(match.matches[0]).toEqual("Mu'ammar Qadafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("d");
});
it("line: 168 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Moamar Gaddafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Moamar Gaddafi"
  );
  expect(match.matches[0]).toEqual("Moamar Gaddafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 169 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Mu'ammar Qadhdhafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Mu'ammar Qadhdhafi"
  );
  expect(match.matches[0]).toEqual("Mu'ammar Qadhdhafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dh");
});
it("line: 170 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Khaddafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Khaddafi"
  );
  expect(match.matches[0]).toEqual("Muammar Khaddafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 171 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Ghaddafy'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Ghaddafy"
  );
  expect(match.matches[0]).toEqual("Muammar Ghaddafy");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 172 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Ghadafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Ghadafi"
  );
  expect(match.matches[0]).toEqual("Muammar Ghadafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("d");
});
it("line: 173 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Ghaddafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Ghaddafi"
  );
  expect(match.matches[0]).toEqual("Muammar Ghaddafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 174 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muamar Kaddafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muamar Kaddafi"
  );
  expect(match.matches[0]).toEqual("Muamar Kaddafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 175 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Quathafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Quathafi"
  );
  expect(match.matches[0]).toEqual("Muammar Quathafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("th");
});
it("line: 176 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Gheddafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Gheddafi"
  );
  expect(match.matches[0]).toEqual("Muammar Gheddafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dd");
});
it("line: 177 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Moammar Khadafy'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Moammar Khadafy"
  );
  expect(match.matches[0]).toEqual("Moammar Khadafy");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("d");
});
it("line: 178 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Moammar Qudhafi'", () => {
  const match = matches(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Moammar Qudhafi"
  );
  expect(match.matches[0]).toEqual("Moammar Qudhafi");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("dh");
});
it("line: 179 - matches a+(b|c)*d+ against 'aabcdd'", () => {
  const match = matches("a+(b|c)*d+", "aabcdd");
  expect(match.matches[0]).toEqual("aabcdd");
  expect(match.matches[1]).toEqual("c");
});
it("line: 180 - matches ^.+$ against 'vivi'", () => {
  const match = matches("^.+$", "vivi");
  expect(match.matches[0]).toEqual("vivi");
});
it("line: 181 - matches ^(.+)$ against 'vivi'", () => {
  const match = matches("^(.+)$", "vivi");
  expect(match.matches[0]).toEqual("vivi");
  expect(match.matches[1]).toEqual("vivi");
});
it("line: 182 - matches ^([^!.]+).att.com!(.+)$ against 'gryphon.att.com!eby'", () => {
  const match = matches("^([^!.]+).att.com!(.+)$", "gryphon.att.com!eby");
  expect(match.matches[0]).toEqual("gryphon.att.com!eby");
  expect(match.matches[1]).toEqual("gryphon");
  expect(match.matches[2]).toEqual("eby");
});
it("line: 183 - matches ^([^!]+!)?([^!]+)$ against 'bas'", () => {
  const match = matches("^([^!]+!)?([^!]+)$", "bas");
  expect(match.matches[0]).toEqual("bas");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("bas");
});
it("line: 184 - matches ^([^!]+!)?([^!]+)$ against 'bar!bas'", () => {
  const match = matches("^([^!]+!)?([^!]+)$", "bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar!");
  expect(match.matches[2]).toEqual("bas");
});
it("line: 185 - matches ^([^!]+!)?([^!]+)$ against 'foo!bas'", () => {
  const match = matches("^([^!]+!)?([^!]+)$", "foo!bas");
  expect(match.matches[0]).toEqual("foo!bas");
  expect(match.matches[1]).toEqual("foo!");
  expect(match.matches[2]).toEqual("bas");
});
it("line: 186 - matches ^.+!([^!]+!)([^!]+)$ against 'foo!bar!bas'", () => {
  const match = matches("^.+!([^!]+!)([^!]+)$", "foo!bar!bas");
  expect(match.matches[0]).toEqual("foo!bar!bas");
  expect(match.matches[1]).toEqual("bar!");
  expect(match.matches[2]).toEqual("bas");
});
it.skip("line: 187 - matches ((foo)|(bar))!bas against 'bar!bas'", () => {
  const match = matches("((foo)|(bar))!bas", "bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
  expect(match.matches[2]).toEqual("");
  expect(match.matches[3]).toEqual("bar");
});
it.skip("line: 188 - matches ((foo)|(bar))!bas against 'foo!bar!bas'", () => {
  const match = matches("((foo)|(bar))!bas", "foo!bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
  expect(match.matches[2]).toEqual("");
  expect(match.matches[3]).toEqual("bar");
});
it("line: 189 - matches ((foo)|(bar))!bas against 'foo!bas'", () => {
  const match = matches("((foo)|(bar))!bas", "foo!bas");
  expect(match.matches[0]).toEqual("foo!bas");
  expect(match.matches[1]).toEqual("foo");
  expect(match.matches[2]).toEqual("foo");
});
it.skip("line: 190 - matches ((foo)|bar)!bas against 'bar!bas'", () => {
  const match = matches("((foo)|bar)!bas", "bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
});
it.skip("line: 191 - matches ((foo)|bar)!bas against 'foo!bar!bas'", () => {
  const match = matches("((foo)|bar)!bas", "foo!bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
});
it("line: 192 - matches ((foo)|bar)!bas against 'foo!bas'", () => {
  const match = matches("((foo)|bar)!bas", "foo!bas");
  expect(match.matches[0]).toEqual("foo!bas");
  expect(match.matches[1]).toEqual("foo");
  expect(match.matches[2]).toEqual("foo");
});
it("line: 193 - matches (foo|(bar))!bas against 'bar!bas'", () => {
  const match = matches("(foo|(bar))!bas", "bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
  expect(match.matches[2]).toEqual("bar");
});
it("line: 194 - matches (foo|(bar))!bas against 'foo!bar!bas'", () => {
  const match = matches("(foo|(bar))!bas", "foo!bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
  expect(match.matches[2]).toEqual("bar");
});
it("line: 195 - matches (foo|(bar))!bas against 'foo!bas'", () => {
  const match = matches("(foo|(bar))!bas", "foo!bas");
  expect(match.matches[0]).toEqual("foo!bas");
  expect(match.matches[1]).toEqual("foo");
});
it("line: 196 - matches (foo|bar)!bas against 'bar!bas'", () => {
  const match = matches("(foo|bar)!bas", "bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
});
it("line: 197 - matches (foo|bar)!bas against 'foo!bar!bas'", () => {
  const match = matches("(foo|bar)!bas", "foo!bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar");
});
it("line: 198 - matches (foo|bar)!bas against 'foo!bas'", () => {
  const match = matches("(foo|bar)!bas", "foo!bas");
  expect(match.matches[0]).toEqual("foo!bas");
  expect(match.matches[1]).toEqual("foo");
});
it.skip("line: 199 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'foo!bar!bas'", () => {
  const match = matches(
    "^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$",
    "foo!bar!bas"
  );
  expect(match.matches[0]).toEqual("foo!bar!bas");
  expect(match.matches[1]).toEqual("foo!bar!bas");
  expect(match.matches[2]).toEqual("");
  expect(match.matches[3]).toEqual("");
  expect(match.matches[4]).toEqual("bar!");
  expect(match.matches[5]).toEqual("bas");
});
it("line: 200 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'bas'", () => {
  const match = matches("^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$", "bas");
  expect(match.matches[0]).toEqual("bas");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("bas");
});
it("line: 201 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'bar!bas'", () => {
  const match = matches("^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$", "bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar!");
  expect(match.matches[2]).toEqual("bas");
});
it.skip("line: 202 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'foo!bar!bas'", () => {
  const match = matches(
    "^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$",
    "foo!bar!bas"
  );
  expect(match.matches[0]).toEqual("foo!bar!bas");
  expect(match.matches[1]).toEqual("");
  expect(match.matches[2]).toEqual("");
  expect(match.matches[3]).toEqual("bar!");
  expect(match.matches[4]).toEqual("bas");
});
it("line: 203 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'foo!bas'", () => {
  const match = matches("^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$", "foo!bas");
  expect(match.matches[0]).toEqual("foo!bas");
  expect(match.matches[1]).toEqual("foo!");
  expect(match.matches[2]).toEqual("bas");
});
it.skip("line: 204 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'bas'", () => {
  const match = matches("^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$", "bas");
  expect(match.matches[0]).toEqual("bas");
  expect(match.matches[1]).toEqual("bas");
  expect(match.matches[2]).toEqual("");
  expect(match.matches[3]).toEqual("bas");
});
it.skip("line: 205 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'bar!bas'", () => {
  const match = matches("^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$", "bar!bas");
  expect(match.matches[0]).toEqual("bar!bas");
  expect(match.matches[1]).toEqual("bar!bas");
  expect(match.matches[2]).toEqual("bar!");
  expect(match.matches[3]).toEqual("bas");
});
it.skip("line: 206 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'foo!bar!bas'", () => {
  const match = matches(
    "^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$",
    "foo!bar!bas"
  );
  expect(match.matches[0]).toEqual("foo!bar!bas");
  expect(match.matches[1]).toEqual("foo!bar!bas");
  expect(match.matches[2]).toEqual("");
  expect(match.matches[3]).toEqual("");
  expect(match.matches[4]).toEqual("bar!");
  expect(match.matches[5]).toEqual("bas");
});
it.skip("line: 207 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'foo!bas'", () => {
  const match = matches("^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$", "foo!bas");
  expect(match.matches[0]).toEqual("foo!bas");
  expect(match.matches[1]).toEqual("foo!bas");
  expect(match.matches[2]).toEqual("foo!");
  expect(match.matches[3]).toEqual("bas");
});
it("line: 208 - matches .*(/XXX).* against '/XXX'", () => {
  const match = matches(".*(/XXX).*", "/XXX");
  expect(match.matches[0]).toEqual("/XXX");
  expect(match.matches[1]).toEqual("/XXX");
});
it.skip("line: 209 - matches .*(\\XXX).* against '\\XXX'", () => {
  const match = matches(".*(\\XXX).*", "\\XXX");
  expect(match.matches[0]).toEqual("\\XXX");
  expect(match.matches[1]).toEqual("\\XXX");
});
it.skip("line: 210 - matches \\XXX against '\\XXX'", () => {
  const match = matches("\\XXX", "\\XXX");
  expect(match.matches[0]).toEqual("\\XXX");
});
it("line: 211 - matches .*(/000).* against '/000'", () => {
  const match = matches(".*(/000).*", "/000");
  expect(match.matches[0]).toEqual("/000");
  expect(match.matches[1]).toEqual("/000");
});
it.skip("line 212 - issue with parsing the test itself", () => {});
it.skip("line 213 - issue with parsing the test itself", () => {});
