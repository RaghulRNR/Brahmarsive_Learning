import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<h1>Hello, world!</h1>);

function formatName(user)
{
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Rahul',
  lastName: 'Rnr',
};

const element = (
  <h1>
    Hello, {formatName(user)}!
  </h1>
);
root.render(element)

function tick() {
  const element1 = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
root.render(element1);
}

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

const root1 = ReactDOM.createRoot(document.getElementById('root'));
const element2= <Welcome name="Sara" />;
root1.render(element2);