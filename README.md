# Zoomies

The missing address book for Zoom.

Rooms can be added by creating Markdown files in `src/content/rooms`. Each room file needs to include the following frontmatter:

```md
---
title: 'Room title'
roomId: 12345678
password: 'password'
---
```

> :warning: Currently this is only working on macOS

## Setup

1. `git clone`
2. `pnpm install`
3. Set your desired username in `src/config.json`
4. `pnpm dev`
