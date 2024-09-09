import React from 'react';
import { createRoot } from 'react-dom/client';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

const nom = 'Isabelle';

function Welcome(props) {
  return <div>
    <h1>Bonjour {props.nom}</h1>
    <h2>Bienvenue dans la formation REACT</h2>
    <h3>{new Date().toLocaleDateString()}</h3>
    <button onClick={()=>alert('Cest parti!')}>GO</button>
  </div>;
}
root.render(<Welcome nom="Isabelle"></Welcome>);