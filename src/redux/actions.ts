export enum ActionTypes {
  SET_ITEMS = 0,
  TIC = 1,
  INIT = 2,
  RESET = 3,
  INIT_CHEAT = 4,
  INIT_SUPER_CHEAT = 5,
}

export const initGame = () => ({
  type: ActionTypes.INIT,
  payload: {}
});

export const resetScore = () => ({
  type: ActionTypes.RESET,
  payload: {}
});

export const setItems = (items:GameBoardItem[][]) => ({
  type: ActionTypes.SET_ITEMS,
  payload: {
    items
  }
});

export const tic = () => ({
  type: ActionTypes.TIC,
  payload: {}
});

export const initCheatGame = () => ({
  type: ActionTypes.INIT_CHEAT,
  payload: {}
});
export const initSuperCheatGame = () => ({
  type: ActionTypes.INIT_SUPER_CHEAT,
  payload: {}
});

