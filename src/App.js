import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

//Code to import Budget.js
import { AppProvider } from './context/AppContext';
import Budget from './components/Budget';
import Remaining from './components/Remaining';
import ExpenseTotal from './components/ExpenseTotal';
import ExpenseList from './components/ExpenseList';
import AllocationForm from './components/AllocationForm';
import RemainingBudget from './components/Remaining';

// Add code to import the other components here under            
const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {/* Add Budget component here under */} 
                    <div className='col-sm'>
                        <Budget />
                    </div>
                        {/* Add Remaining component here under */}
                    <div className='col-sm'>
                        <Remaining />
                    </div>      

                        {/* Add ExpenseTotal component here under */}        
                    <div className='col-sm'>
                        <ExpenseTotal />
                    </div>
                        {/* Add ExpenseList component here under */} 
                    <div className='col-sm'>
                        <ExpenseList />
                    </div>        

                        {/* Add ExpenseItem component here under */}        

                        {/* Add AllocationForm component here under */}        
                    <div className='col-sm'>
                        <AllocationForm/>
                    </div>
                    <div className='col-sm'>
                        <RemainingBudget />
                    </div>
                </div>
            </div>
        </AppProvider>
    );
};
export default App;
