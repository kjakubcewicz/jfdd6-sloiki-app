const MAPS = 'user-profile/MAPS'

export const maps = (value) => ({
  type: MAPS,
  value
})

const initialState = {
  gameMap: ''
}


export default (state = initialState, action = {}) => {
  switch (action.type) {
    case MAPS:
      return {
        ...state,
        gameMap: action.gameMap
      }
    default:
      return state
  }
}