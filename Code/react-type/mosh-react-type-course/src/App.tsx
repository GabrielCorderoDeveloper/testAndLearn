import { useState } from 'react'
import ExpenseList from './expense-tracker/components/ExpenseList'
import ExpenseFilter from './expense-tracker/components/ExpenseFilter';
import ExpenseForm from './expense-tracker/components/ExpenseForm';
import categories from './expense-tracker/categories';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('')
  const [expenses, setExpenses] = useState([
    {id: 1, description: 'aaa', amount: 10, category: 'Utilities'},
    {id: 2, description: 'aajha', amount: 32, category: 'Utilities'},
    {id: 3, description: 'wgu', amount: 94, category: 'Utilities'},
    {id: 4, description: 'a78aa', amount: 12, category: 'Utilities'},
  ]);

  const visibleExpesnses = selectedCategory ? expenses.filter(e => e.category === selectedCategory) : expenses;

  return (
    <div>
      <div className='mb-5'>
        <ExpenseForm onSubmit={expense => setExpenses([...expenses, {...expense, id: expenses.length + 1}])}/>
      </div>
      <div className='mb-3'>
      <ExpenseFilter onSelectCategory={category => setSelectedCategory(category)}/>
      </div>
      <ExpenseList expenses={visibleExpesnses} onDelete={(id) => setExpenses(expenses.filter(e => e.id !== id))}/>
    </div>
  )
}

export default App
