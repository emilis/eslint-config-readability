# eslint-config-readability

This is a _stylistic_ ESLint config that aims to increase code readability.

⚠️  A work in progress.

- It has strong opinions on rules where readability can be improved.
- It avoids opinions on rules that don't impact readability.
- It opens the freedom for a code writer to improve readability beyond what a strict ruleset would demand.

## Motivation

It is based on a few researched findings:

- 2 vs 4 spaces doesn't actually matter.
- A familiar code style can have bigger impact than most style improvements.
- People don't read online [they scan](https://www.nngroup.com/articles/how-people-read-online/):
    - (sub)headings work,
    - highlighted keywords are important,
    - lists work better than long lines of text,
    - shorter text is better,
    - [F-shaped pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) is how people often scan the text.

Also some of my own conclusions and hypotheses:

- We don't always have good syntax highlighting (e.g. in diffs, error output), therefore we should use more _spacing_ around _words_ inside code. This is similar to keyword highlighting in the NN/g research.

- The visual form of the code is more impactful than a dumb, consistent style (see ["The Line Wrapping Noise"](https://antfu.me/posts/why-not-prettier#the-line-wrapping-noise)).

- Measuring code lines in characters is like measuring pastry in centimeters. 7 _things_ on a line is probably the most we should use.

- Many of syntax elements are just visual noise that slows down reading. If you already are using ESLint, you don't have to visually check for syntax errors. Therefore stuff like closing brackets can often be grouped together without any spacing.


_I have tried some of the code readability improvements with a live audience. The developers in the audience were a few times faster at spotting bugs in the improved code. Sadly I didn't save the video of my presentation and now it's gone._
