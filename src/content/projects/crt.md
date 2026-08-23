---
title: "CRT — Conner's Retime Tool"
summary: 'A cross-platform desktop app that lets speedrunners and moderators time a run frame-accurately, with and without load times, and paste the result straight into speedrun.com.'
date: 2024-10-14
updated: 2026-07-12
tech: ['Python', 'PySide6', 'PyInstaller', 'GitHub Actions']
repo: 'https://github.com/connerglover/crt'
cover:
  src: '/images/projects/crt/screenshot.png'
  alt: 'CRT running on Windows, showing a run timed at 1:57.000 without loads and 2:00.000 with loads, alongside frame inputs and a list of individual loads'
featured: true
draft: false
---

Speedruns submitted from video have to be retimed by hand. A moderator finds the
first and last frame of the run, works out the elapsed time at the video's
framerate, then finds every loading screen and subtracts it, because most
leaderboards rank on time without loads. Doing that with a calculator is slow and
easy to get wrong by a frame or two — which is enough to change a record.

CRT is the tool I built to do it properly. It is the successor to
[PyTime](/projects/pytime/), my first attempt at the same problem, rewritten from
scratch in Python and PySide6.

## What it does

- **Times a run three ways** — frame by frame, from a pasted timestamp, or from a
  YouTube debug string copied straight out of the player's "Stats for nerds"
- **Tracks loads individually**, keeping a running total and showing the run time
  with and without loads side by side
- **Copies a mod note** in a format you can configure, so the result pastes
  directly into a speedrun.com verification comment
- **Rebindable hotkeys** for every action, since retiming is repetitive and you
  want your hands on the keyboard
- **Session history**, so you can save a retime, come back, and pick it up again
- Always-on-top mode and automatic update checks

## Builds and platforms

Windows, macOS and Linux binaries are built by a GitHub Actions workflow and
attached to a release whenever a version tag is pushed. The macOS build needs an
extra step — the icon has to be converted from `.ico` into an `.iconset` and then
into `.icns` before PyInstaller will take it — and the Linux build is
additionally packaged as an AppImage.

## Translations

CRT ships in English, French, Polish and Spanish. I wrote the English; Menzo did
the French and Polish, and Cris did the Spanish.

## Around the code

The repository carries a contributing guide, a code of conduct, a governance
document explaining how project decisions get made, and a security policy for
reporting vulnerabilities privately rather than in a public issue. It is released
under the MIT license.
