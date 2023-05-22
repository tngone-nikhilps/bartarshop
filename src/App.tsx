import React from 'react';
import { HomePage } from './components/HomePage/homePage';
import { LoginPage } from './components/LoginPage/loginPage';
import { SignUpPage } from './components/signUpPage/signUppage';
import { CreateBAccount } from './components/createBaccount/createBaccount';
import { ViewAccount } from './components/viewAccount/viewAccount';

function App() {
  return (
    <div className="App">
      {/* <HomePage/> */}
      {/* <LoginPage/> */}
      {/* <SignUpPage/> */}
      {/* <CreateBAccount/> */}
      <ViewAccount/>
    </div>
  );
}

export default App;
