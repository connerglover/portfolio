---
title: 'Flangoo Helper'
summary: "A userscript that reads Flangoo's incoming network traffic to work out the answers to its multiple-choice questions, fills them in, and keeps the activity timer running."
date: 2025-12-03
updated: 2026-07-10
tech: ['JavaScript', 'Userscript']
repo: 'https://github.com/connerglover/flangoo-helper'
featured: false
draft: false
---

Flangoo is a language-learning platform. It sends the client more than it shows
you — the packets that deliver a multiple-choice question also carry which answer
is correct. This userscript listens to that traffic and acts on it.

It was a reverse-engineering exercise: watch what a web app sends, work out the
shape of the payload, and write something that reads it in real time.

## What it does

- **Collects answers from incoming packets** as questions arrive, rather than
  guessing at the page
- **Fills the answer in automatically** once it has been determined
- **Bypasses the activity check** by manipulating local variables, so the
  platform keeps counting time without continuous input

## Installing it

It needs a userscript manager — Violentmonkey or Tampermonkey on Chromium and
Firefox, or Userscripts on Safari — and then the script installs from the repo.
Chrome's Manifest V3 changes have made userscript managers awkward there, so the
README points at Brave or Helium instead.

## A disclaimer, kept from the repo

> This project is strictly for educational purposes. By using "Flangoo Helper",
> you acknowledge that the developers are not responsible for any academic
> penalties, failing grades, or disciplinary actions incurred if this tool is used
> to violate your school's academic integrity policies. Use at your own risk.
