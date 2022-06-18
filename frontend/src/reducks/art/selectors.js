import { createSelector } from 'reselect'

const artsSelector = (state) => state.art

export const allArts = createSelector([artsSelector], (state) => state.arts)
