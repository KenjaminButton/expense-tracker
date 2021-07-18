import {createSlice} from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = Object.fromEntries(CATEGORIES.map(category => [category, []]))

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState: initialState,
  reducers: {
    addTransaction: (state, action) => {
      // add the new transaction object (action.payload) to the correct category’s transaction list in the transactions state object.
      const category = action.payload.category;
      state[category].push(action.payload);
    },
    // Add a deleteTransaction property 
    deleteTransaction: (state, action) => {
      // In the deletedIndex in transactionsReducer, action.payload.category and action.payload.id are both used. 
      const id = action.payload.id;
      const category = action.payload.category;
      // It should delete the old transaction (action.payload) from the correct category’s transaction list in the transactions state object.
      // 1. Find the category in `state` that matches the `category` property on `action.payload`
      // 2.  Filter out the old transaction (the transaction with an `id` matching the `id` property on `action.payload`) from that category's transaction array.
      state[category] = state[category].filter(transaction => transaction.id !== id)
    }
  },
});

export const selectTransactions = (state) => state.transactions;
export const selectFlattenedTransactions = (state) => Object.values(state.transactions).reduce((a,b) => [...a, ...b], []);

export const { addTransaction, deleteTransaction } = transactionsSlice.actions;
export default transactionsSlice.reducer;