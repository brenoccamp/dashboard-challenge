import React from 'react';
import '../styles/Filters.css';

function Fitlers() {
  const months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
    'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

  return (
    <div className="month-filters">
      <div className="month-labels-container">
        {months.map((month, index) => (
          <label
            className="month-checkbox-label"
            htmlFor={ `checkbox-${index}` }
            key={ index }
          >
            <p value={ month }>{month}</p>
            <input
              type="checkbox"
              value={ month }
              name={ month }
              id={ `checkbox-${index}` }
              onClick={ (e) => console.log(e.target.value) }
            />
          </label>
        ))}
      </div>
    </div>
  );
}

export default Fitlers;
