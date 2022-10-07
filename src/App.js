import React from 'react';
import { Main } from './components/Main';
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/style.css';

export default function App() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4-offset-4">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}
