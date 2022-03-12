import { createSelector } from 'reselect'

const systemSelector = (state) => state.system

export const getUpdateRequesetStatus = createSelector(
    [systemSelector],
    (state) => state
)
