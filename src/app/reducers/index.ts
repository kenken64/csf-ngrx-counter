import { isDevMode } from "@angular/core";

import {
    ActionReducer,
    ActionReducerMap,
    MetaReducer,
    createFeatureSelector,
    createSelector

} from '@ngrx/store';
import { counterReducer } from "./counter.reducer";

export interface State {

}

export const reducers: ActionReducerMap<State> = {
    counter : counterReducer,
};

export const metaReducers: MetaReducer<State>[] = !isDevMode ? [] : [];