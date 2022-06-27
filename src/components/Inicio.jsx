import React from 'react';
import { TodoProvider } from '../TodoContext';
import { AppUI } from '../App/AppUI';

// import Home from '../App/index'

const Inicio = () => {
  return (
    <div style={{marginTop: '73px'}}>
      <TodoProvider>
        <AppUI />
      </TodoProvider>
    </div>
  )
}

export default Inicio