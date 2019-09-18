import React from 'react';
import NameForm from './NameForm';
import KarmaButton from './KarmaButton';

const App = (props) => {

let formChanger = event =>{
    event.preventDefault()
    console.log('form submitted!!!')
}

let karmaAlert  = event =>{
    alert('youve leveled up')
}

  return (
    <div className="main-div">
      <NameForm formChangerProp={formChanger}/>
      <KarmaButton karmaAlertProp={karmaAlert} />
    </div>
  );
}

export default App;
