## Finished Tasks
- Get very high level understanding of the implementation of the game
- Figure out what the key files are
- make new SuperPacman.ts file
- swap PacmanStore to point to an instance of SuperPacman instead of Pacman, test behavior
- make new "Cheat" button
- add new initCheatGame action so regular functionality remains intact
- make adjustable tic by moving functionality to Controls with setInterval, clearInterval inside useEffect along with local useState hook
- make cheatMode Redux state
- make Tic action call INIT_CHEAT if game if finished automatically if iteration is less than 100
- adjust superpacman behavior to avoid ghosts when dangerous and find biscuits
- make superduper pacman

## Things I learned

1. set / clearInterval inside useEffect of controls to change tic speed for different game modes 
2. TS object undefined error when using iteration state - type guard
3. Proper implementation of TS with redux and react


## Issues

Controls.tsx - calls dispatch directly from the store and reducer instead of mapping state and dispatch to props? 



