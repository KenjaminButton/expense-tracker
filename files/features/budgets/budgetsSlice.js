import { createSlice } from '@reduxjs/toolkit';

export const CATEGORIES = ['housing', 'food', 'transportation', 'utilities', 'clothing', 'healthcare', 'personal', 'education', 'entertainment'];
const initialState = CATEGORIES.map(category => ({ category: category, amount: 0 }))

const budgetsSlice = createSlice({
  name: 'budgets',
  initialState: initialState,
  reducers: {
    // Set editBudget equal to a case reducer that receives two arguments—state and action
    editBudget: (state, action) => {
      // action.payload will have a category and amount property.
      const category = action.payload.category;
      const amount = action.payload.amount;
      // Update the state by "finding" the budget object
      // Note: the variables category and action, implemented below, are each assigned action.payload (referenced in the above const). 
      // The budget object whose .category value matches action.payload.category and changing with the .amount value to action.payload.amount.
      state.find(budget => budget.category === category).amount = amount 
    }
  },
});

export const selectBudgets = (state) => state.budgets;
export const { editBudget } = budgetsSlice.actions
export default budgetsSlice.reducer;