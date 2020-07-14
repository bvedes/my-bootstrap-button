import React from 'react';
import Button from './components/Button'
import './Main.css'

function Main() {
  return (
    <div className="view">
      <Button
        color="primary"
        size="lg"
        onClick={() => console.log('click')}
      />
      <Button
        color="secondary"
        size="sm"
        onClick={() => console.log('click click')}
      />
    </div>
  );
}

export default Main;
