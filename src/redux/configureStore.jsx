import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';
import { registration } from './ducks/registration';
import { debtors } from './ducks/debtors';
import { individualdebtor } from './ducks/individualdebtor';

const logger = createLogger({
  collapsed: true,
  diff: true,
});

export const store = createStore(
  combineReducers({ registration, debtors, individualdebtor }),
  applyMiddleware(thunk, logger)
);
