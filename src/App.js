import { Button } from 'react-bootstrap';
import React from 'react';
import { Container , Stack} from 'react-bootstrap';
import BudgetCard from './components/BudgetCard';


function App() {
  return (
      <><Container className='my-4'>
      <Stack direction="horizontal" gap="2" className="nb-4">
        <h1 className='me-auto'>Budgets</h1>
        <Button variant='primary'>Add Budget</Button>
        <Button variant='outline-primary'>Add Expense</Button>
      </Stack>
      <div style={{
        display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px,1fr))",
        gap: "1rem", alignItems: "flex-start"
      }}></div>
      <BudgetCard></BudgetCard>
    </Container><Button className='margin-20px'>Click here</Button></>
  );
}

export default App;
