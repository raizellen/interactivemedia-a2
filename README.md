# Interactive Media Assignment 2

Sari-Sari(li) - a data self-portrait about my connection to Filipino culture, shown as a sari-sari store.

To run:
1. Install dependencies: `npm install`
2. Run the server: `npm start`
3. Open localhost: `http://localhost:3000`

## Controls
- Click "PABILI PO" to start
- Scroll to open and close the store
- Click the sign, a poster or a bottom packet to see more
- `a` answers the questions again (store must be open)
- `k` karaoke, `s` sweeping, `r` rooster, `y` kids playing toggle the sounds

## Folders
- `js/config` - shared variables, colours and the survey questions
- `js/interactions` - buttons, mouse, keyboard, dialogue, saving answers
- `js/drawing` - everything that draws to the canvas
- `assets` - fonts, sounds and `data.json` (the saved answers)
- `server.js` - small express server that serves the page and saves the answers