import React from 'react';
import FormInput from './components/FormInput/FormInput'
import ListTable from './components/ListTable/ListTable'
import Clock from './components/Clock/Clock';

function App() {
  return (
    <div className="App">
      {/* <FormInput name="ABC" />
      <ListTable name={""} age={20} height={"1.5m"}/> */}
      <Clock />
    </div>
  );
}

export default App;
