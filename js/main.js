let start = document.getElementById('start'),
  budget = document.getElementsByClassName('budget-value'),
  daybudget = document.getElementsByClassName('daybudget-value'),
  level = document.getElementsByClassName('level-value'),
  expenses = document.getElementsByClassName('expenses-value'),
  optionalexpenses = document.getElementsByClassName('optionalexpenses-value'),
  income = document.getElementsByClassName('income-value'),
  monthsavings = document.getElementsByClassName('budget-value'),
  yearsavings = document.getElementsByClassName('yearsavings-value'),

  expensesInput = document.getElementsByClassName('expenses-item'),
  expensesBtn = document.getElementsByTagName('button')[0],
  optionalExpensesBtn = document.getElementsByTagName('button')[1],
  countBudgetBtn = document.getElementsByTagName('button')[2],
  
  optionalexpensesItem = document.querySelectorAll('optionalexpenses-item'),
  chooseIncome = document.querySelector('#income'),
  saving = document.querySelector('#saving'),
  sum = document.querySelector('#sum'),
  precent = document.querySelector('#precent'),

  yearValue = document.querySelector('.year-value'),
  monthValue = document.querySelector('.month-value'),
  dayValue = document.querySelector('.day-value');

console.log(countBudgetBtn);
  