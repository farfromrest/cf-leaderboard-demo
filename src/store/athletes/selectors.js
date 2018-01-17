export function athletesSelector (state) {
  return state.athletes.result.map(id => state.athletes.entities[id])
}
