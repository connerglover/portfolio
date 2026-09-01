---
# Copy this file, rename it, and delete the underscore. The filename becomes
# the URL: my-cool-thing.md -> /projects/my-cool-thing/
#
# Files starting with "_" are ignored by the content loader, so this template
# never gets published.

title: 'Project name'
summary: 'One or two sentences. Shows up on cards and in search results.'
date: 2026-01-15
# updated: 2026-03-02          # optional
tech: ['Python', 'PostgreSQL'] # optional, shown as tags
# repo: 'https://github.com/you/repo'
# demo: 'https://example.com'
# cover:
#   src: '/images/projects/my-cool-thing/cover.png'
#   alt: 'Describe the image for screen readers'
#   width: 1600                # pixel size, so the page reserves the space
#   height: 900
featured: false                # true pins it to the home page
draft: true                    # true keeps it out of the build entirely
---

Open with the short version: what it is and who it's for. Two or three
sentences before the first heading.

## Why I built it

The problem, and why existing options didn't fit.

## How it works

The interesting technical parts. Code blocks get syntax highlighting:

```python
def example() -> None:
    ...
```

Images live in `public/images/projects/<slug>/` and are referenced from the
site root:

![Alt text that describes the image](/images/projects/my-cool-thing/screenshot.png)

## What I learned

The part admissions officers and hiring managers actually read.
