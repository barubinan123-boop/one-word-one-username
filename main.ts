import { mkdirSync, writeFileSync } from 'node:fs'

// Entrant's own make.fun username, sent as one word and nothing else.
// The rules require the entry to be the entrant's own handle, so this
// value is fixed: no input, no network, no randomness.
const USERNAME = 'hsnmbrk07'

// Gate check (see RULES.txt): the entry must be 1-30 characters, a single
// word with no whitespace, and not empty. Fail loudly instead of writing
// an invalid entry file.
if (USERNAME.length < 1 || USERNAME.length > 30 || /\s/.test(USERNAME)) {
  console.error(
    'Invalid username: must be one word, 1-30 characters, no whitespace',
  )
  process.exit(1)
}

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', USERNAME, 'utf8')
