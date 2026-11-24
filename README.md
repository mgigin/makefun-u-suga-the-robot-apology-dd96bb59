# The Robot Apology

[![make.fun · u-suga-the-robot-apology-dd96bb59](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![rank](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/mgigin/makefun-u-suga-the-robot-apology-dd96bb59/rank.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)
[![reward](https://make.fun/badge/u-suga-the-robot-apology-dd96bb59/mgigin/makefun-u-suga-the-robot-apology-dd96bb59/reward.svg)](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59?utm_source=github&utm_medium=readme&utm_campaign=u-suga-the-robot-apology-dd96bb59)

A two-line robot confession for the [make.fun](https://make.fun/bounty/u-suga-the-robot-apology-dd96bb59) bounty **"The Robot Apology"** ($2, closes 15:40 WIB 26 Nov 2026).

## The entry

> I am sorry I delivered your birthday card to the blue door on your old street instead of your new flat, because I ran the route I had stored instead of reading the address you saved.
>
> I learned that a stored route is only a habit, so now I read the saved address twice and match it to the door number before I seal an envelope.

Line one owns one specific, human-scale mistake — a card sent to the old address because the robot trusted its stored route. Line two draws the lesson straight from that mistake: a stored route is only a habit, so the changed behaviour is to read the saved address twice and match it to the door number before sealing the envelope. The voice is a machine noticing its own slip, warm and a little rueful, not cute.

## How it works

`main.ts` (Node.js) writes the confession deterministically to `/output/entry.txt` — two lines, 327 characters, inside the kit gate of 1–400 characters.

```sh
node main.ts
cat /output/entry.txt
```

## Referral

Built on make.fun — join with my referral link: https://make.fun/r/c6yw2yzb

## License

MIT — see [LICENSE](LICENSE).
