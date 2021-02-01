/* eslint-disable no-useless-escape */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { RegExp, Match } from "..";
import { expectMatch, expectNotMatch, exec } from "../__tests__/utils";

it("line: 0 - matches abracadabra$ against 'abracadabracadabra'", () => {
  const match = exec("abracadabra$", "abracadabracadabra", "");
  expect(match.matches[0]).toBe("abracadabra");
});
it("line: 1 - matches a...b against 'abababbb'", () => {
  const match = exec("a...b", "abababbb", "");
  expect(match.matches[0]).toBe("ababb");
});
it("line: 2 - matches XXXXXX against '..XXXXXX'", () => {
  const match = exec("XXXXXX", "..XXXXXX", "");
  expect(match.matches[0]).toBe("XXXXXX");
});
it("line: 3 - matches \\) against '()'", () => {
  const match = exec("\\)", "()", "");
  expect(match.matches[0]).toBe(")");
});
it("line: 4 - matches a] against 'a]a'", () => {
  const match = exec("a]", "a]a", "");
  expect(match.matches[0]).toBe("a]");
});
it("line: 5 - matches } against '}'", () => {
  const match = exec("}", "}", "");
  expect(match.matches[0]).toBe("}");
});
it("line: 6 - matches \\} against '}'", () => {
  const match = exec("\\}", "}", "");
  expect(match.matches[0]).toBe("}");
});
it("line: 7 - matches \\] against ']'", () => {
  const match = exec("\\]", "]", "");
  expect(match.matches[0]).toBe("]");
});
it("line: 8 - matches ] against ']'", () => {
  const match = exec("]", "]", "");
  expect(match.matches[0]).toBe("]");
});
it("line: 9 - matches ] against ']'", () => {
  const match = exec("]", "]", "");
  expect(match.matches[0]).toBe("]");
});
it("line: 10 - matches { against '{'", () => {
  const match = exec("{", "{", "");
  expect(match.matches[0]).toBe("{");
});
it("line: 11 - matches } against '}'", () => {
  const match = exec("}", "}", "");
  expect(match.matches[0]).toBe("}");
});
it("line: 12 - matches ^a against 'ax'", () => {
  const match = exec("^a", "ax", "");
  expect(match.matches[0]).toBe("a");
});
it("line: 13 - matches \\^a against 'a^a'", () => {
  const match = exec("\\^a", "a^a", "");
  expect(match.matches[0]).toBe("^a");
});
it("line: 14 - matches a\\^ against 'a^'", () => {
  const match = exec("a\\^", "a^", "");
  expect(match.matches[0]).toBe("a^");
});
it("line: 15 - matches a$ against 'aa'", () => {
  const match = exec("a$", "aa", "");
  expect(match.matches[0]).toBe("a");
});
it("line: 16 - matches a\\$ against 'a$'", () => {
  const match = exec("a\\$", "a$", "");
  expect(match.matches[0]).toBe("a$");
});
it("line: 17 - matches ^$ against ''", () => {
  const match = exec("^$", "", "");
  expect(match.matches[0]).toBe("");
});
it("line: 18 - matches $^ against ''", () => {
  const match = exec("$^", "", "");
  expect(match.matches[0]).toBe("");
});
it("line: 19 - matches a($) against 'aa'", () => {
  const match = exec("a($)", "aa", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("");
});
xit("line: 20 - matches a*(^a) against 'aa'", () => {
  const match = exec("a*(^a)", "aa", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 21 - matches (..)*(...)* against 'a'", () => {
  const match = exec("(..)*(...)*", "a", "");
  expect(match.matches[0]).toBe("");
});
it("line: 22 - matches (..)*(...)* against 'abcd'", () => {
  const match = exec("(..)*(...)*", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
  expect(match.matches[1]).toBe("cd");
});
it("line: 23 - matches (ab|a)(bc|c) against 'abc'", () => {
  const match = exec("(ab|a)(bc|c)", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("ab");
  expect(match.matches[2]).toBe("c");
});
it("line: 24 - matches (ab)c|abc against 'abc'", () => {
  const match = exec("(ab)c|abc", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("ab");
});
it("line: 25 - matches a{0}b against 'ab'", () => {
  const match = exec("a{0}b", "ab", "");
  expect(match.matches[0]).toBe("b");
});
it("line: 26 - matches (a*)(b?)(b+)b{3} against 'aaabbbbbbb'", () => {
  const match = exec("(a*)(b?)(b+)b{3}", "aaabbbbbbb", "");
  expect(match.matches[0]).toBe("aaabbbbbbb");
  expect(match.matches[1]).toBe("aaa");
  expect(match.matches[2]).toBe("b");
  expect(match.matches[3]).toBe("bbb");
});
it("line: 27 - matches (a*)(b{0,1})(b{1,})b{3} against 'aaabbbbbbb'", () => {
  const match = exec("(a*)(b{0,1})(b{1,})b{3}", "aaabbbbbbb", "");
  expect(match.matches[0]).toBe("aaabbbbbbb");
  expect(match.matches[1]).toBe("aaa");
  expect(match.matches[2]).toBe("b");
  expect(match.matches[3]).toBe("bbb");
});
xit("line 28 - issue with parsing the test itself", () => {});
it("line: 29 - matches ((a|a)|a) against 'a'", () => {
  const match = exec("((a|a)|a)", "a", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
  expect(match.matches[2]).toBe("a");
});
it("line: 30 - matches (a*)(a|aa) against 'aaaa'", () => {
  const match = exec("(a*)(a|aa)", "aaaa", "");
  expect(match.matches[0]).toBe("aaaa");
  expect(match.matches[1]).toBe("aaa");
  expect(match.matches[2]).toBe("a");
});
it("line: 31 - matches a*(a.|aa) against 'aaaa'", () => {
  const match = exec("a*(a.|aa)", "aaaa", "");
  expect(match.matches[0]).toBe("aaaa");
  expect(match.matches[1]).toBe("aa");
});
it("line: 32 - matches a(b)|c(d)|a(e)f against 'aef'", () => {
  const match = exec("a(b)|c(d)|a(e)f", "aef", "");
  expect(match.matches[0]).toBe("aef");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("");
  expect(match.matches[3]).toBe("e");
});
it("line: 33 - matches (a|b)?.* against 'b'", () => {
  const match = exec("(a|b)?.*", "b", "");
  expect(match.matches[0]).toBe("b");
  expect(match.matches[1]).toBe("b");
});
it("line: 34 - matches (a|b)c|a(b|c) against 'ac'", () => {
  const match = exec("(a|b)c|a(b|c)", "ac", "");
  expect(match.matches[0]).toBe("ac");
  expect(match.matches[1]).toBe("a");
});
xit("line: 35 - matches (a|b)c|a(b|c) against 'ab'", () => {
  const match = exec("(a|b)c|a(b|c)", "ab", "");
  expect(match.matches[0]).toBe("ab");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("b");
});
it("line: 36 - matches (a|b)*c|(a|ab)*c against 'abc'", () => {
  const match = exec("(a|b)*c|(a|ab)*c", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("b");
});
it("line: 37 - matches (a|b)*c|(a|ab)*c against 'xc'", () => {
  const match = exec("(a|b)*c|(a|ab)*c", "xc", "");
  expect(match.matches[0]).toBe("c");
});
it("line: 38 - matches (.a|.b).*|.*(.a|.b) against 'xa'", () => {
  const match = exec("(.a|.b).*|.*(.a|.b)", "xa", "");
  expect(match.matches[0]).toBe("xa");
  expect(match.matches[1]).toBe("xa");
});
it("line: 39 - matches a?(ab|ba)ab against 'abab'", () => {
  const match = exec("a?(ab|ba)ab", "abab", "");
  expect(match.matches[0]).toBe("abab");
  expect(match.matches[1]).toBe("ab");
});
it("line: 40 - matches a?(ac{0}b|ba)ab against 'abab'", () => {
  const match = exec("a?(ac{0}b|ba)ab", "abab", "");
  expect(match.matches[0]).toBe("abab");
  expect(match.matches[1]).toBe("ab");
});
it("line: 41 - matches ab|abab against 'abbabab'", () => {
  const match = exec("ab|abab", "abbabab", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 42 - matches aba|bab|bba against 'baaabbbaba'", () => {
  const match = exec("aba|bab|bba", "baaabbbaba", "");
  expect(match.matches[0]).toBe("bba");
});
it("line: 43 - matches aba|bab against 'baaabbbaba'", () => {
  const match = exec("aba|bab", "baaabbbaba", "");
  expect(match.matches[0]).toBe("bab");
});
it("line: 44 - matches (aa|aaa)*|(a|aaaaa) against 'aa'", () => {
  const match = exec("(aa|aaa)*|(a|aaaaa)", "aa", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("aa");
});
it("line: 45 - matches (a.|.a.)*|(a|.a...) against 'aa'", () => {
  const match = exec("(a.|.a.)*|(a|.a...)", "aa", "");
  expect(match.matches[0]).toBe("aa");
  expect(match.matches[1]).toBe("aa");
});
it("line: 46 - matches ab|a against 'xabc'", () => {
  const match = exec("ab|a", "xabc", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 47 - matches ab|a against 'xxabc'", () => {
  const match = exec("ab|a", "xxabc", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 48 - matches (Ab|cD)* against 'aBcD'", () => {
  const match = exec("(Ab|cD)*", "aBcD", "i");
  expect(match.matches[0]).toBe("aBcD");
  expect(match.matches[1]).toBe("cD");
});
it("line: 49 - matches [^-] against '--a'", () => {
  const match = exec("[^-]", "--a", "");
  expect(match.matches[0]).toBe("a");
});
it("line: 50 - matches [a-]* against '--a'", () => {
  const match = exec("[a-]*", "--a", "");
  expect(match.matches[0]).toBe("--a");
});
it("line: 51 - matches [a-m-]* against '--amoma--'", () => {
  const match = exec("[a-m-]*", "--amoma--", "");
  expect(match.matches[0]).toBe("--am");
});
it("line: 52 - matches :::1:::0:|:::1:1:0: against ':::0:::1:::1:::0:'", () => {
  const match = exec(":::1:::0:|:::1:1:0:", ":::0:::1:::1:::0:", "");
  expect(match.matches[0]).toBe(":::1:::0:");
});
it("line: 53 - matches :::1:::0:|:::1:1:1: against ':::0:::1:::1:::0:'", () => {
  const match = exec(":::1:::0:|:::1:1:1:", ":::0:::1:::1:::0:", "");
  expect(match.matches[0]).toBe(":::1:::0:");
});
xit("line: 54 - matches [[:upper:]] against 'A'", () => {
  const match = exec("[[:upper:]]", "A", "");
  expect(match.matches[0]).toBe("A");
});
xit("line: 55 - matches [[:lower:]]+ against '`az{'", () => {
  const match = exec("[[:lower:]]+", "`az{", "");
  expect(match.matches[0]).toBe("az");
});
xit("line: 56 - matches [[:upper:]]+ against '@AZ['", () => {
  const match = exec("[[:upper:]]+", "@AZ[", "");
  expect(match.matches[0]).toBe("AZ");
});
it("line: 57 - matches [[-]] against '[[-]]'", () => {
  const match = exec("[[-]]", "[[-]]", "");
  expect(match.matches[0]).toBe("-]");
});
xit("line 58 - issue with parsing the test itself", () => {});
xit("line 59 - issue with parsing the test itself", () => {});
xit("line: 61 - matches \\n against '\\n'", () => {
  const match = exec("\\n", "\\n", "");
  expect(match.matches[0]).toBe("\\");
});
xit("line: 62 - matches \\n against '\\n'", () => {
  const match = exec("\\n", "\\n", "");
  expect(match.matches[0]).toBe("\\");
});
it("line: 63 - matches [^a] against '\\n'", () => {
  const match = exec("[^a]", "\\n", "");
  expect(match.matches[0]).toBe("\\");
});
xit("line: 64 - matches \\na against '\\na'", () => {
  const match = exec("\\na", "\\na", "");
  expect(match.matches[0]).toBe("\\n");
});
it("line: 65 - matches (a)(b)(c) against 'abc'", () => {
  const match = exec("(a)(b)(c)", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("a");
  expect(match.matches[2]).toBe("b");
  expect(match.matches[3]).toBe("c");
});
it("line: 66 - matches xxx against 'xxx'", () => {
  const match = exec("xxx", "xxx", "");
  expect(match.matches[0]).toBe("xxx");
});
it("line: 67 - matches (^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$) against 'feb 6,'", () => {
  const match = exec(
    "(^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$)",
    "feb 6,",
    ""
  );
  expect(match.matches[0]).toBe("feb 6,");
});
it("line: 68 - matches (^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$) against '2/7'", () => {
  const match = exec(
    "(^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$)",
    "2/7",
    ""
  );
  expect(match.matches[0]).toBe("2/7");
});
it("line: 69 - matches (^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$) against 'feb 1,Feb 6'", () => {
  const match = exec(
    "(^|[ (,;])((([Ff]eb[^ ]* *|0*2/|\\* */?)0*[6-7]))([^0-9]|$)",
    "feb 1,Feb 6",
    ""
  );
  expect(match.matches[0]).toBe(",Feb 6");
});
it("line: 70 - matches ((((((((((((((((((((((((((((((x)))))))))))))))))))))))))))))) against 'x'", () => {
  const match = exec(
    "((((((((((((((((((((((((((((((x))))))))))))))))))))))))))))))",
    "x",
    ""
  );
  expect(match.matches[0]).toBe("x");
  expect(match.matches[1]).toBe("x");
  expect(match.matches[2]).toBe("x");
});
it("line: 71 - matches ((((((((((((((((((((((((((((((x))))))))))))))))))))))))))))))* against 'xx'", () => {
  const match = exec(
    "((((((((((((((((((((((((((((((x))))))))))))))))))))))))))))))*",
    "xx",
    ""
  );
  expect(match.matches[0]).toBe("xx");
  expect(match.matches[1]).toBe("x");
  expect(match.matches[2]).toBe("x");
});
it("line: 72 - matches a?(ab|ba)* against 'ababababababababababababababababababababababababababababababababababababababababa'", () => {
  const match = exec(
    "a?(ab|ba)*",
    "ababababababababababababababababababababababababababababababababababababababababa",
    ""
  );
  expect(match.matches[0]).toBe(
    "ababababababababababababababababababababababababababababababababababababababababa"
  );
  expect(match.matches[1]).toBe("ba");
});
it("line: 73 - matches abaa|abbaa|abbbaa|abbbbaa against 'ababbabbbabbbabbbbabbbbaa'", () => {
  const match = exec(
    "abaa|abbaa|abbbaa|abbbbaa",
    "ababbabbbabbbabbbbabbbbaa",
    ""
  );
  expect(match.matches[0]).toBe("abbbbaa");
});
it("line: 74 - matches abaa|abbaa|abbbaa|abbbbaa against 'ababbabbbabbbabbbbabaa'", () => {
  const match = exec("abaa|abbaa|abbbaa|abbbbaa", "ababbabbbabbbabbbbabaa", "");
  expect(match.matches[0]).toBe("abaa");
});
it("line: 75 - matches aaac|aabc|abac|abbc|baac|babc|bbac|bbbc against 'baaabbbabac'", () => {
  const match = exec(
    "aaac|aabc|abac|abbc|baac|babc|bbac|bbbc",
    "baaabbbabac",
    ""
  );
  expect(match.matches[0]).toBe("abac");
});
xit("line: 76 - matches .* against '\\x01\xff'", () => {
  const match = exec(".*", "\\x01\xff", "");
  expect(match.matches[0]).toBe("\\x");
});
it("line: 77 - matches aaaa|bbbb|cccc|ddddd|eeeeee|fffffff|gggg|hhhh|iiiii|jjjjj|kkkkk|llll against 'XaaaXbbbXcccXdddXeeeXfffXgggXhhhXiiiXjjjXkkkXlllXcbaXaaaa'", () => {
  const match = exec(
    "aaaa|bbbb|cccc|ddddd|eeeeee|fffffff|gggg|hhhh|iiiii|jjjjj|kkkkk|llll",
    "XaaaXbbbXcccXdddXeeeXfffXgggXhhhXiiiXjjjXkkkXlllXcbaXaaaa",
    ""
  );
  expect(match.matches[0]).toBe("aaaa");
});
xit("line 78 - issue with parsing the test itself", () => {});
it("line: 79 - matches a*a*a*a*a*b against 'aaaaaaaaab'", () => {
  const match = exec("a*a*a*a*a*b", "aaaaaaaaab", "");
  expect(match.matches[0]).toBe("aaaaaaaaab");
});
it("line: 80 - matches ^ against ''", () => {
  const match = exec("^", "", "");
  expect(match.matches[0]).toBe("");
});
it("line: 81 - matches $ against ''", () => {
  const match = exec("$", "", "");
  expect(match.matches[0]).toBe("");
});
it("line: 82 - matches ^$ against ''", () => {
  const match = exec("^$", "", "");
  expect(match.matches[0]).toBe("");
});
it("line: 83 - matches ^a$ against 'a'", () => {
  const match = exec("^a$", "a", "");
  expect(match.matches[0]).toBe("a");
});
it("line: 84 - matches abc against 'abc'", () => {
  const match = exec("abc", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 85 - matches abc against 'xabcy'", () => {
  const match = exec("abc", "xabcy", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 86 - matches abc against 'ababc'", () => {
  const match = exec("abc", "ababc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 87 - matches ab*c against 'abc'", () => {
  const match = exec("ab*c", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 88 - matches ab*bc against 'abc'", () => {
  const match = exec("ab*bc", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 89 - matches ab*bc against 'abbc'", () => {
  const match = exec("ab*bc", "abbc", "");
  expect(match.matches[0]).toBe("abbc");
});
it("line: 90 - matches ab*bc against 'abbbbc'", () => {
  const match = exec("ab*bc", "abbbbc", "");
  expect(match.matches[0]).toBe("abbbbc");
});
it("line: 91 - matches ab+bc against 'abbc'", () => {
  const match = exec("ab+bc", "abbc", "");
  expect(match.matches[0]).toBe("abbc");
});
it("line: 92 - matches ab+bc against 'abbbbc'", () => {
  const match = exec("ab+bc", "abbbbc", "");
  expect(match.matches[0]).toBe("abbbbc");
});
it("line: 93 - matches ab?bc against 'abbc'", () => {
  const match = exec("ab?bc", "abbc", "");
  expect(match.matches[0]).toBe("abbc");
});
it("line: 94 - matches ab?bc against 'abc'", () => {
  const match = exec("ab?bc", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 95 - matches ab?c against 'abc'", () => {
  const match = exec("ab?c", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 96 - matches ^abc$ against 'abc'", () => {
  const match = exec("^abc$", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 97 - matches ^abc against 'abcc'", () => {
  const match = exec("^abc", "abcc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 98 - matches abc$ against 'aabc'", () => {
  const match = exec("abc$", "aabc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 99 - matches ^ against 'abc'", () => {
  const match = exec("^", "abc", "");
  expect(match.matches[0]).toBe("");
});
it("line: 100 - matches $ against 'abc'", () => {
  const match = exec("$", "abc", "");
  expect(match.matches[0]).toBe("");
});
it("line: 101 - matches a.c against 'abc'", () => {
  const match = exec("a.c", "abc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 102 - matches a.c against 'axc'", () => {
  const match = exec("a.c", "axc", "");
  expect(match.matches[0]).toBe("axc");
});
it("line: 103 - matches a.*c against 'axyzc'", () => {
  const match = exec("a.*c", "axyzc", "");
  expect(match.matches[0]).toBe("axyzc");
});
it("line: 104 - matches a[bc]d against 'abd'", () => {
  const match = exec("a[bc]d", "abd", "");
  expect(match.matches[0]).toBe("abd");
});
it("line: 105 - matches a[b-d]e against 'ace'", () => {
  const match = exec("a[b-d]e", "ace", "");
  expect(match.matches[0]).toBe("ace");
});
it("line: 106 - matches a[b-d] against 'aac'", () => {
  const match = exec("a[b-d]", "aac", "");
  expect(match.matches[0]).toBe("ac");
});
it("line: 107 - matches a[-b] against 'a-'", () => {
  const match = exec("a[-b]", "a-", "");
  expect(match.matches[0]).toBe("a-");
});
it("line: 108 - matches a[b-] against 'a-'", () => {
  const match = exec("a[b-]", "a-", "");
  expect(match.matches[0]).toBe("a-");
});
it("line: 109 - matches a] against 'a]'", () => {
  const match = exec("a]", "a]", "");
  expect(match.matches[0]).toBe("a]");
});
it("line: 110 - matches a[]]b against 'a]b'", () => {
  const match = exec("a[]]b", "a]b", "");
  expect(match.matches[0]).toBe("a]b");
});
it("line: 111 - matches a[^bc]d against 'aed'", () => {
  const match = exec("a[^bc]d", "aed", "");
  expect(match.matches[0]).toBe("aed");
});
it("line: 112 - matches a[^-b]c against 'adc'", () => {
  const match = exec("a[^-b]c", "adc", "");
  expect(match.matches[0]).toBe("adc");
});
it("line: 113 - matches a[^]b]c against 'adc'", () => {
  const match = exec("a[^]b]c", "adc", "");
  expect(match.matches[0]).toBe("adc");
});
it("line: 114 - matches ab|cd against 'abc'", () => {
  const match = exec("ab|cd", "abc", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 115 - matches ab|cd against 'abcd'", () => {
  const match = exec("ab|cd", "abcd", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 116 - matches a\\(b against 'a(b'", () => {
  const match = exec("a\\(b", "a(b", "");
  expect(match.matches[0]).toBe("a(b");
});
it("line: 117 - matches a\\(*b against 'ab'", () => {
  const match = exec("a\\(*b", "ab", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 118 - matches a\\(*b against 'a((b'", () => {
  const match = exec("a\\(*b", "a((b", "");
  expect(match.matches[0]).toBe("a((b");
});
it("line: 119 - matches ((a)) against 'abc'", () => {
  const match = exec("((a))", "abc", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
  expect(match.matches[2]).toBe("a");
});
it("line: 120 - matches (a)b(c) against 'abc'", () => {
  const match = exec("(a)b(c)", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("a");
  expect(match.matches[2]).toBe("c");
});
it("line: 121 - matches a+b+c against 'aabbabc'", () => {
  const match = exec("a+b+c", "aabbabc", "");
  expect(match.matches[0]).toBe("abc");
});
it("line: 122 - matches a* against 'aaa'", () => {
  const match = exec("a*", "aaa", "");
  expect(match.matches[0]).toBe("aaa");
});
it("line: 123 - matches (a*)* against '-'", () => {
  const match = exec("(a*)*", "-", "");
  expect(match.matches[0]).toBe("");
  expect(match.matches[1]).toBe("");
});
it("line: 124 - matches (a*)+ against '-'", () => {
  const match = exec("(a*)+", "-", "");
  expect(match.matches[0]).toBe("");
  expect(match.matches[1]).toBe("");
});
it("line: 125 - matches (a*|b)* against '-'", () => {
  const match = exec("(a*|b)*", "-", "");
  expect(match.matches[0]).toBe("");
  expect(match.matches[1]).toBe("");
});
it("line: 126 - matches (a+|b)* against 'ab'", () => {
  const match = exec("(a+|b)*", "ab", "");
  expect(match.matches[0]).toBe("ab");
  expect(match.matches[1]).toBe("b");
});
it("line: 127 - matches (a+|b)+ against 'ab'", () => {
  const match = exec("(a+|b)+", "ab", "");
  expect(match.matches[0]).toBe("ab");
  expect(match.matches[1]).toBe("b");
});
it("line: 128 - matches (a+|b)? against 'ab'", () => {
  const match = exec("(a+|b)?", "ab", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
});
it("line: 129 - matches [^ab]* against 'cde'", () => {
  const match = exec("[^ab]*", "cde", "");
  expect(match.matches[0]).toBe("cde");
});
it("line: 130 - matches (^)* against '-'", () => {
  const match = exec("(^)*", "-", "");
  expect(match.matches[0]).toBe("");
  expect(match.matches[1]).toBe("");
});
it("line: 131 - matches a* against ''", () => {
  const match = exec("a*", "", "");
  expect(match.matches[0]).toBe("");
});
it("line: 132 - matches ([abc])*d against 'abbbcd'", () => {
  const match = exec("([abc])*d", "abbbcd", "");
  expect(match.matches[0]).toBe("abbbcd");
  expect(match.matches[1]).toBe("c");
});
xit("line: 133 - matches ([abc])*bcd against 'abcd'", () => {
  const match = exec("([abc])*bcd", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
  expect(match.matches[1]).toBe("a");
});
it("line: 134 - matches a|b|c|d|e against 'e'", () => {
  const match = exec("a|b|c|d|e", "e", "");
  expect(match.matches[0]).toBe("e");
});
it("line: 135 - matches (a|b|c|d|e)f against 'ef'", () => {
  const match = exec("(a|b|c|d|e)f", "ef", "");
  expect(match.matches[0]).toBe("ef");
  expect(match.matches[1]).toBe("e");
});
it("line: 136 - matches ((a*|b))* against '-'", () => {
  const match = exec("((a*|b))*", "-", "");
  expect(match.matches[0]).toBe("");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("");
});
it("line: 137 - matches abcd*efg against 'abcdefg'", () => {
  const match = exec("abcd*efg", "abcdefg", "");
  expect(match.matches[0]).toBe("abcdefg");
});
it("line: 138 - matches ab* against 'xabyabbbz'", () => {
  const match = exec("ab*", "xabyabbbz", "");
  expect(match.matches[0]).toBe("ab");
});
it("line: 139 - matches ab* against 'xayabbbz'", () => {
  const match = exec("ab*", "xayabbbz", "");
  expect(match.matches[0]).toBe("a");
});
it("line: 140 - matches (ab|cd)e against 'abcde'", () => {
  const match = exec("(ab|cd)e", "abcde", "");
  expect(match.matches[0]).toBe("cde");
  expect(match.matches[1]).toBe("cd");
});
it("line: 141 - matches [abhgefdc]ij against 'hij'", () => {
  const match = exec("[abhgefdc]ij", "hij", "");
  expect(match.matches[0]).toBe("hij");
});
it("line: 142 - matches (a|b)c*d against 'abcd'", () => {
  const match = exec("(a|b)c*d", "abcd", "");
  expect(match.matches[0]).toBe("bcd");
  expect(match.matches[1]).toBe("b");
});
it("line: 143 - matches (ab|ab*)bc against 'abc'", () => {
  const match = exec("(ab|ab*)bc", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("a");
});
it("line: 144 - matches a([bc]*)c* against 'abc'", () => {
  const match = exec("a([bc]*)c*", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("bc");
});
it("line: 145 - matches a([bc]*)(c*d) against 'abcd'", () => {
  const match = exec("a([bc]*)(c*d)", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
  expect(match.matches[1]).toBe("bc");
  expect(match.matches[2]).toBe("d");
});
it("line: 146 - matches a([bc]+)(c*d) against 'abcd'", () => {
  const match = exec("a([bc]+)(c*d)", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
  expect(match.matches[1]).toBe("bc");
  expect(match.matches[2]).toBe("d");
});
it("line: 147 - matches a([bc]*)(c+d) against 'abcd'", () => {
  const match = exec("a([bc]*)(c+d)", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
  expect(match.matches[1]).toBe("b");
  expect(match.matches[2]).toBe("cd");
});
it("line: 148 - matches a[bcd]*dcdcde against 'adcdcde'", () => {
  const match = exec("a[bcd]*dcdcde", "adcdcde", "");
  expect(match.matches[0]).toBe("adcdcde");
});
it("line: 149 - matches (ab|a)b*c against 'abc'", () => {
  const match = exec("(ab|a)b*c", "abc", "");
  expect(match.matches[0]).toBe("abc");
  expect(match.matches[1]).toBe("ab");
});
xit("line: 150 - matches ((a)(b)c)(d) against 'abcd'", () => {
  const match = exec("((a)(b)c)(d)", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
  expect(match.matches[1]).toBe("abc");
  expect(match.matches[2]).toBe("a");
  expect(match.matches[3]).toBe("b");
  expect(match.matches[4]).toBe("d");
});
it("line: 151 - matches [A-Za-z_][A-Za-z0-9_]* against 'alpha'", () => {
  const match = exec("[A-Za-z_][A-Za-z0-9_]*", "alpha", "");
  expect(match.matches[0]).toBe("alpha");
});
it("line: 152 - matches ^a(bc+|b[eh])g|.h$ against 'abh'", () => {
  const match = exec("^a(bc+|b[eh])g|.h$", "abh", "");
  expect(match.matches[0]).toBe("bh");
});
it("line: 153 - matches (bc+d$|ef*g.|h?i(j|k)) against 'effgz'", () => {
  const match = exec("(bc+d$|ef*g.|h?i(j|k))", "effgz", "");
  expect(match.matches[0]).toBe("effgz");
  expect(match.matches[1]).toBe("effgz");
});
it("line: 154 - matches (bc+d$|ef*g.|h?i(j|k)) against 'ij'", () => {
  const match = exec("(bc+d$|ef*g.|h?i(j|k))", "ij", "");
  expect(match.matches[0]).toBe("ij");
  expect(match.matches[1]).toBe("ij");
  expect(match.matches[2]).toBe("j");
});
it("line: 155 - matches (bc+d$|ef*g.|h?i(j|k)) against 'reffgz'", () => {
  const match = exec("(bc+d$|ef*g.|h?i(j|k))", "reffgz", "");
  expect(match.matches[0]).toBe("effgz");
  expect(match.matches[1]).toBe("effgz");
});
it("line: 156 - matches (((((((((a))))))))) against 'a'", () => {
  const match = exec("(((((((((a)))))))))", "a", "");
  expect(match.matches[0]).toBe("a");
  expect(match.matches[1]).toBe("a");
  expect(match.matches[2]).toBe("a");
  expect(match.matches[3]).toBe("a");
  expect(match.matches[4]).toBe("a");
  expect(match.matches[5]).toBe("a");
  expect(match.matches[6]).toBe("a");
  expect(match.matches[7]).toBe("a");
  expect(match.matches[8]).toBe("a");
  expect(match.matches[9]).toBe("a");
});
it("line: 157 - matches multiple words against 'multiple words yeah'", () => {
  const match = exec("multiple words", "multiple words yeah", "");
  expect(match.matches[0]).toBe("multiple words");
});
it("line: 158 - matches (.*)c(.*) against 'abcde'", () => {
  const match = exec("(.*)c(.*)", "abcde", "");
  expect(match.matches[0]).toBe("abcde");
  expect(match.matches[1]).toBe("ab");
  expect(match.matches[2]).toBe("de");
});
it("line: 159 - matches abcd against 'abcd'", () => {
  const match = exec("abcd", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
});
it("line: 160 - matches a(bc)d against 'abcd'", () => {
  const match = exec("a(bc)d", "abcd", "");
  expect(match.matches[0]).toBe("abcd");
  expect(match.matches[1]).toBe("bc");
});
it("line: 161 - matches a[-]?c against 'ac'", () => {
  const match = exec("a[-]?c", "ac", "");
  expect(match.matches[0]).toBe("ac");
});
it("line: 162 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Qaddafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Qaddafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Qaddafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 163 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Mo'ammar Gadhafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Mo'ammar Gadhafi",
    ""
  );
  expect(match.matches[0]).toBe("Mo'ammar Gadhafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dh");
});
it("line: 164 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Kaddafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Kaddafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Kaddafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 165 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Qadhafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Qadhafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Qadhafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dh");
});
it("line: 166 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Gadafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Gadafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Gadafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("d");
});
it("line: 167 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Mu'ammar Qadafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Mu'ammar Qadafi",
    ""
  );
  expect(match.matches[0]).toBe("Mu'ammar Qadafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("d");
});
it("line: 168 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Moamar Gaddafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Moamar Gaddafi",
    ""
  );
  expect(match.matches[0]).toBe("Moamar Gaddafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 169 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Mu'ammar Qadhdhafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Mu'ammar Qadhdhafi",
    ""
  );
  expect(match.matches[0]).toBe("Mu'ammar Qadhdhafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dh");
});
it("line: 170 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Khaddafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Khaddafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Khaddafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 171 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Ghaddafy'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Ghaddafy",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Ghaddafy");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 172 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Ghadafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Ghadafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Ghadafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("d");
});
it("line: 173 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Ghaddafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Ghaddafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Ghaddafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 174 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muamar Kaddafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muamar Kaddafi",
    ""
  );
  expect(match.matches[0]).toBe("Muamar Kaddafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 175 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Quathafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Quathafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Quathafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("th");
});
it("line: 176 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Muammar Gheddafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Muammar Gheddafi",
    ""
  );
  expect(match.matches[0]).toBe("Muammar Gheddafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dd");
});
it("line: 177 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Moammar Khadafy'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Moammar Khadafy",
    ""
  );
  expect(match.matches[0]).toBe("Moammar Khadafy");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("d");
});
it("line: 178 - matches M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy] against 'Moammar Qudhafi'", () => {
  const match = exec(
    "M[ou]'?am+[ae]r .*([AEae]l[- ])?[GKQ]h?[aeu]+([dtz][dhz]?)+af[iy]",
    "Moammar Qudhafi",
    ""
  );
  expect(match.matches[0]).toBe("Moammar Qudhafi");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("dh");
});
it("line: 179 - matches a+(b|c)*d+ against 'aabcdd'", () => {
  const match = exec("a+(b|c)*d+", "aabcdd", "");
  expect(match.matches[0]).toBe("aabcdd");
  expect(match.matches[1]).toBe("c");
});
it("line: 180 - matches ^.+$ against 'vivi'", () => {
  const match = exec("^.+$", "vivi", "");
  expect(match.matches[0]).toBe("vivi");
});
it("line: 181 - matches ^(.+)$ against 'vivi'", () => {
  const match = exec("^(.+)$", "vivi", "");
  expect(match.matches[0]).toBe("vivi");
  expect(match.matches[1]).toBe("vivi");
});
it("line: 182 - matches ^([^!.]+).att.com!(.+)$ against 'gryphon.att.com!eby'", () => {
  const match = exec("^([^!.]+).att.com!(.+)$", "gryphon.att.com!eby", "");
  expect(match.matches[0]).toBe("gryphon.att.com!eby");
  expect(match.matches[1]).toBe("gryphon");
  expect(match.matches[2]).toBe("eby");
});
it("line: 183 - matches ^([^!]+!)?([^!]+)$ against 'bas'", () => {
  const match = exec("^([^!]+!)?([^!]+)$", "bas", "");
  expect(match.matches[0]).toBe("bas");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("bas");
});
it("line: 184 - matches ^([^!]+!)?([^!]+)$ against 'bar!bas'", () => {
  const match = exec("^([^!]+!)?([^!]+)$", "bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar!");
  expect(match.matches[2]).toBe("bas");
});
it("line: 185 - matches ^([^!]+!)?([^!]+)$ against 'foo!bas'", () => {
  const match = exec("^([^!]+!)?([^!]+)$", "foo!bas", "");
  expect(match.matches[0]).toBe("foo!bas");
  expect(match.matches[1]).toBe("foo!");
  expect(match.matches[2]).toBe("bas");
});
it("line: 186 - matches ^.+!([^!]+!)([^!]+)$ against 'foo!bar!bas'", () => {
  const match = exec("^.+!([^!]+!)([^!]+)$", "foo!bar!bas", "");
  expect(match.matches[0]).toBe("foo!bar!bas");
  expect(match.matches[1]).toBe("bar!");
  expect(match.matches[2]).toBe("bas");
});
xit("line: 187 - matches ((foo)|(bar))!bas against 'bar!bas'", () => {
  const match = exec("((foo)|(bar))!bas", "bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
  expect(match.matches[2]).toBe("");
  expect(match.matches[3]).toBe("bar");
});
xit("line: 188 - matches ((foo)|(bar))!bas against 'foo!bar!bas'", () => {
  const match = exec("((foo)|(bar))!bas", "foo!bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
  expect(match.matches[2]).toBe("");
  expect(match.matches[3]).toBe("bar");
});
it("line: 189 - matches ((foo)|(bar))!bas against 'foo!bas'", () => {
  const match = exec("((foo)|(bar))!bas", "foo!bas", "");
  expect(match.matches[0]).toBe("foo!bas");
  expect(match.matches[1]).toBe("foo");
  expect(match.matches[2]).toBe("foo");
});
xit("line: 190 - matches ((foo)|bar)!bas against 'bar!bas'", () => {
  const match = exec("((foo)|bar)!bas", "bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
});
xit("line: 191 - matches ((foo)|bar)!bas against 'foo!bar!bas'", () => {
  const match = exec("((foo)|bar)!bas", "foo!bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
});
it("line: 192 - matches ((foo)|bar)!bas against 'foo!bas'", () => {
  const match = exec("((foo)|bar)!bas", "foo!bas", "");
  expect(match.matches[0]).toBe("foo!bas");
  expect(match.matches[1]).toBe("foo");
  expect(match.matches[2]).toBe("foo");
});
it("line: 193 - matches (foo|(bar))!bas against 'bar!bas'", () => {
  const match = exec("(foo|(bar))!bas", "bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
  expect(match.matches[2]).toBe("bar");
});
it("line: 194 - matches (foo|(bar))!bas against 'foo!bar!bas'", () => {
  const match = exec("(foo|(bar))!bas", "foo!bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
  expect(match.matches[2]).toBe("bar");
});
it("line: 195 - matches (foo|(bar))!bas against 'foo!bas'", () => {
  const match = exec("(foo|(bar))!bas", "foo!bas", "");
  expect(match.matches[0]).toBe("foo!bas");
  expect(match.matches[1]).toBe("foo");
});
it("line: 196 - matches (foo|bar)!bas against 'bar!bas'", () => {
  const match = exec("(foo|bar)!bas", "bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
});
it("line: 197 - matches (foo|bar)!bas against 'foo!bar!bas'", () => {
  const match = exec("(foo|bar)!bas", "foo!bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar");
});
it("line: 198 - matches (foo|bar)!bas against 'foo!bas'", () => {
  const match = exec("(foo|bar)!bas", "foo!bas", "");
  expect(match.matches[0]).toBe("foo!bas");
  expect(match.matches[1]).toBe("foo");
});
xit("line: 199 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'foo!bar!bas'", () => {
  const match = exec(
    "^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$",
    "foo!bar!bas",
    ""
  );
  expect(match.matches[0]).toBe("foo!bar!bas");
  expect(match.matches[1]).toBe("foo!bar!bas");
  expect(match.matches[2]).toBe("");
  expect(match.matches[3]).toBe("");
  expect(match.matches[4]).toBe("bar!");
  expect(match.matches[5]).toBe("bas");
});
it("line: 200 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'bas'", () => {
  const match = exec("^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$", "bas", "");
  expect(match.matches[0]).toBe("bas");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("bas");
});
it("line: 201 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'bar!bas'", () => {
  const match = exec("^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$", "bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar!");
  expect(match.matches[2]).toBe("bas");
});
xit("line: 202 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'foo!bar!bas'", () => {
  const match = exec(
    "^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$",
    "foo!bar!bas",
    ""
  );
  expect(match.matches[0]).toBe("foo!bar!bas");
  expect(match.matches[1]).toBe("");
  expect(match.matches[2]).toBe("");
  expect(match.matches[3]).toBe("bar!");
  expect(match.matches[4]).toBe("bas");
});
it("line: 203 - matches ^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$ against 'foo!bas'", () => {
  const match = exec("^([^!]+!)?([^!]+)$|^.+!([^!]+!)([^!]+)$", "foo!bas", "");
  expect(match.matches[0]).toBe("foo!bas");
  expect(match.matches[1]).toBe("foo!");
  expect(match.matches[2]).toBe("bas");
});
xit("line: 204 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'bas'", () => {
  const match = exec("^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$", "bas", "");
  expect(match.matches[0]).toBe("bas");
  expect(match.matches[1]).toBe("bas");
  expect(match.matches[2]).toBe("");
  expect(match.matches[3]).toBe("bas");
});
xit("line: 205 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'bar!bas'", () => {
  const match = exec("^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$", "bar!bas", "");
  expect(match.matches[0]).toBe("bar!bas");
  expect(match.matches[1]).toBe("bar!bas");
  expect(match.matches[2]).toBe("bar!");
  expect(match.matches[3]).toBe("bas");
});
xit("line: 206 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'foo!bar!bas'", () => {
  const match = exec(
    "^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$",
    "foo!bar!bas",
    ""
  );
  expect(match.matches[0]).toBe("foo!bar!bas");
  expect(match.matches[1]).toBe("foo!bar!bas");
  expect(match.matches[2]).toBe("");
  expect(match.matches[3]).toBe("");
  expect(match.matches[4]).toBe("bar!");
  expect(match.matches[5]).toBe("bas");
});
xit("line: 207 - matches ^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$ against 'foo!bas'", () => {
  const match = exec("^(([^!]+!)?([^!]+)|.+!([^!]+!)([^!]+))$", "foo!bas", "");
  expect(match.matches[0]).toBe("foo!bas");
  expect(match.matches[1]).toBe("foo!bas");
  expect(match.matches[2]).toBe("foo!");
  expect(match.matches[3]).toBe("bas");
});
it("line: 208 - matches .*(/XXX).* against '/XXX'", () => {
  const match = exec(".*(/XXX).*", "/XXX", "");
  expect(match.matches[0]).toBe("/XXX");
  expect(match.matches[1]).toBe("/XXX");
});
xit("line: 209 - matches .*(\\XXX).* against '\\XXX'", () => {
  const match = exec(".*(\\XXX).*", "\\XXX", "");
  expect(match.matches[0]).toBe("\\XXX");
  expect(match.matches[1]).toBe("\\XXX");
});
xit("line: 210 - matches \\XXX against '\\XXX'", () => {
  const match = exec("\\XXX", "\\XXX", "");
  expect(match.matches[0]).toBe("\\XXX");
});
it("line: 211 - matches .*(/000).* against '/000'", () => {
  const match = exec(".*(/000).*", "/000", "");
  expect(match.matches[0]).toBe("/000");
  expect(match.matches[1]).toBe("/000");
});
xit("line 212 - issue with parsing the test itself", () => {});
xit("line 213 - issue with parsing the test itself", () => {});
