import { mkdirSync, writeFileSync } from 'node:fs'

// Entrant's own make.fun username, sent as one word and nothing else.
// The rules require the entry to be the entrant's own handle, so this
// value is fixed: no input, no network, no randomness.
const USERNAME = 'hsnmbrk07'

mkdirSync('/output', { recursive: true })
writeFileSync('/output/entry.txt', USERNAME, 'utf8')
