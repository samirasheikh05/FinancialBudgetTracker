# FinancialBudgetTracker

A web application for tracking personal finances by recording income and expense transactions. The application stores data locally in the browser and provides real-time calculations of total income, expenses, and remaining budget.

## Features

- Starting money input with local storage persistence
- Transaction creation with description, amount, and type fields (Income or Expense)
- Transaction list displayed in a sortable table format
- Individual transaction deletion
- Summary dashboard showing:
  - Total income
  - Total expense
  - Balance (income minus expense)
  - Money left (starting money plus balance)
- Data retention across page refreshes using localStorage
- Input validation for empty fields, negative values, and invalid data types
- Responsive layout supporting mobile, tablet, and desktop viewports

## How to Run the Project

Option 1: Direct Browser Execution

1. Download or clone the repository to your local machine.
2. Navigate to the project folder.
3. Double-click the index.html file to open it in your default web browser.

Option 2: Local Development Server

1. Clone the repository:
   git clone https://github.com/your-username/budget-planner.git
2. Navigate to the project directory:
   cd budget-planner
3. Start a local server. For example, using Python:
   python -m http.server 8000
4. Open a browser and go to http://localhost:8000

Option 3: GitHub Pages Deployment

1. Push the project to a GitHub repository.
2. Go to repository Settings > Pages.
3. Select the main branch as the source.
4. Access the application at [https://your-username.github.io/budget-planner/](https://samirasheikh05.github.io/FinancialBudgetTracker/)

## Project Structure

budget-planner/
├── index.html
├── README.md
├── .gitignore
├── css/
│   └── style.css
├── js/
│   └── app.js
└── assets/

## Testing Coverage

The application has been tested for the following scenarios:

- Adding income and expense transactions with valid inputs
- Deleting transactions from the list
- Verifying data persistence after page refresh
- Empty input handling with validation messages
- Negative amount handling
- Large numeric value processing

## Browser Compatibility

The application works on all modern browsers including:
- Google Chrome
- Mozilla Firefox
- Safari
- Microsoft Edge

## License

MIT License
