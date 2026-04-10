let transactions = [];
let startingMoney = 0;
let currentFilter = "all";

function setStartingMoney() {
    startingMoney = parseFloat(document.getElementById('startingMoney').value);
    if (isNaN(startingMoney)) startingMoney = 0;
    document.getElementById('currentMoney').innerText = startingMoney;
    updateSummary();
}

function addTransaction() {
    let desc = document.getElementById('desc').value;
    let amount = parseFloat(document.getElementById('amount').value);
    let type = document.getElementById('type').value;
    let category = document.getElementById('category').value;
    
    if (!desc || isNaN(amount)) {
        alert('Please fill all fields');
        return;
    }
    
    transactions.push({ 
        id: Date.now(), 
        desc: desc, 
        amount: amount, 
        type: type, 
        category: category 
    });
    
    saveAndRender();
    
    document.getElementById('desc').value = '';
    document.getElementById('amount').value = '';
}

function deleteTransaction(id) {
    transactions = transactions.filter(t => t.id !== id);
    saveAndRender();
}

function filterAll() {
    currentFilter = "all";
    renderTransactions();
}

function filterIncome() {
    currentFilter = "income";
    renderTransactions();
}

function filterExpense() {
    currentFilter = "expense";
    renderTransactions();
}

function saveAndRender() {
    localStorage.setItem('transactions', JSON.stringify(transactions));
    renderTransactions();
    updateSummary();
}

function renderTransactions() {
    let filtered = transactions;
    if (currentFilter === "income") {
        filtered = transactions.filter(t => t.type === "income");
    } else if (currentFilter === "expense") {
        filtered = transactions.filter(t => t.type === "expense");
    }
    
    let html = '';
    filtered.forEach(t => {
        html += `<tr>
            <td>${t.desc}</td>
            <td>${t.category}</td>
            <td>$${t.amount}</td>
            <td>${t.type}</td>
            <td><button class="delete-btn" onclick="deleteTransaction(${t.id})">Delete</button></td>
        </tr>`;
    });
    
    document.getElementById('transactionList').innerHTML = html || '<tr><td colspan="5">No transactions yet</td></tr>';
}

function updateSummary() {
    let income = 0;
    let expense = 0;
    
    transactions.forEach(t => {
        if (t.type === 'income') {
            income += t.amount;
        } else {
            expense += t.amount;
        }
    });
    
    let balance = income - expense;
    
    document.getElementById('totalIncome').innerText = income;
    document.getElementById('totalExpense').innerText = expense;
    document.getElementById('balance').innerText = balance;
    document.getElementById('moneyLeft').innerText = startingMoney + balance;
}

// Load saved data when page loads
let saved = localStorage.getItem('transactions');
if (saved) {
    transactions = JSON.parse(saved);
}
renderTransactions();
updateSummary();
