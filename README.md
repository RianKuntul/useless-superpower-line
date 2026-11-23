# Useless Superpower Line

![Competition](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68.svg)
![Rank](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/RianKuntul/useless-superpower-line/rank.svg)
![Reward](https://make.fun/badge/u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68/RianKuntul/useless-superpower-line/reward.svg)

Entry for the make.fun competition **One Line, Zero Use: The Useless Superpower Sprint** (`u-daring-gecko-25-one-line-zero-use-the-useless-01ca1c68`).

## The line

> I can sense exactly when the Wi-Fi is about to die — three seconds before it does, every single time, which is precisely too late to save anything.

## How it works

`main.ts` (Node 22) writes the line to `/output/entry.txt` (override with the `MAKEFUN_OUTPUT_DIR` environment variable). It includes a length guard that throws if the line ever leaves the competition's 1–200 character range — the line is 147 characters.
