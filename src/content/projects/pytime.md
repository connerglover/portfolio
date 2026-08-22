---
title: 'PyTime'
summary: 'My first speedrun retiming tool — a GUI that worked out a run time with and without loads from YouTube debug info. Retired in favour of CRT.'
date: 2023-03-21
updated: 2026-07-10
tech: ['Python']
repo: 'https://github.com/connerglover/PyTime'
featured: false
draft: false
---

PyTime was the first real program I finished and released. It solved the same
problem [CRT](/projects/crt/) solves now — retiming a speedrun from video — and it
was written to replace SPRT, the tool the community was using at the time, mainly
by handling load times properly.

## How it worked

The whole thing ran off YouTube's debug information, which is more precise than
scrubbing a video by eye:

1. Find the framerate. Right-click the player, open **Stats for nerds**, and read
   the number after the resolution.
2. Step to the first frame of the run with the `,` and `.` keys, copy the debug
   info, and paste it into the start box. Repeat for the last frame.
3. Do the same for the first and last frame of each loading screen.
4. Hit calculate. PyTime returned the time with and without loads, and offered to
   copy a moderator message ready to paste into speedrun.com.

## What happened to it

PyTime is archived. It had accumulated enough structural problems that fixing
them meant starting over, so I rewrote it as CRT — same idea, built properly, on
PySide6 instead. The repository is still up with a deprecation notice pointing at
the replacement, since people had bookmarked it.

## Credits

I did not build this alone, and the README has said so since 2023: rekkto helped
throughout, Slush0Puppy worked out the frame-rounding equation, and zromick came
up with the idea of a speedrun retimer in the first place.
