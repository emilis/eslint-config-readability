# eslint-config-readability

This is a _stylistic_ ESLint config that aims to increase code readability.

⚠️  A work in progress.

##  Goals

- Increase code readability based on consistent research findings.

### Non-goals

- Break style familiarity without strong reasons.
- Force opinions on every style detail.
- Prevent code writers from improving readability beyond what a lint ruleset can offer.

## Motivation

It is based on a few well researched findings:

- 2 vs 4 spaces doesn't actually matter.
- A familiar code style can have bigger impact than most style improvements.
- People don't read online [they scan](https://www.nngroup.com/articles/how-people-read-online/):
    - headings work,
    - highlighted keywords are important,
    - lists work better than long lines of text,
    - shorter text is better,
    - [F-shaped pattern](https://www.nngroup.com/articles/f-shaped-pattern-reading-web-content/) is how people often scan the text.

Also some of my own conclusions and hypotheses:

- We don't always have good syntax highlighting (e.g. in diffs, error output), therefore we should use more _spacing_ around _words_ inside code. This is similar to keyword highlighting in the NN/g research.

- The visual form of the code is more impactful than a dumb, consistent style (see ["The Line Wrapping Noise"](https://antfu.me/posts/why-not-prettier#the-line-wrapping-noise)).

- Measuring code lines in characters is like measuring pastry in centimeters. 7 _things_ on a line is probably the most we should use.

- Many of syntax elements are just visual noise that slows down reading. If you already are using ESLint, you don't have to visually check for syntax errors. Therefore stuff like closing brackets can often be grouped together without any spacing.


_I have tried **some** of the improvements with a live audience. The developers in the audience were a few times faster at spotting bugs in the improved code. Sadly I didn't save the video of my presentation and now it's gone._
