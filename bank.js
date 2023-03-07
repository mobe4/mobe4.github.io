// Define an Account class
class Account {
    constructor(name, deposit) {
      this.name = name;
      this.balance = deposit;
    }
  }
  
  // Define an array to store account information
  let accountList = [];
  
  // Add some initial accounts for testing
  accountList.push(new Account("John Doe", 1000));
  accountList.push(new Account("Jane Smith", 2000));
  
  // Display account information
  updateAccountInfo();
  // Define functions to handle user actions
  function createAccount() {
    // Get input values
    let name = document.getElementById("accountNameInput").value;
    let deposit = parseInt(document.getElementById("depositInput").value);
  
    // Create a new account
    let account = new Account(name, deposit);
  
    // Add the account to the list
    accountList.push(account);
  
    // Update account information
    updateAccountInfo();
  }
  
  function showDepositPage() {
    // Show the deposit page and hide the other pages
    document.getElementById("depositPage").style.display = "block";
    document.getElementById("debitPage").style.display = "none";
  
    // Populate the account select dropdown
    let accountSelect = document.getElementById("accountSelect");
    accountSelect.innerHTML = "";
    for (let i = 0; i < accountList.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = accountList[i].name;
      accountSelect.add(option);
    }
  
    // Disable the submit button until an account is selected
    document.getElementById("depositButton").disabled = true;
  }
  
  function showDebitPage() {
    // Show the debit page and hide the other pages
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "block";
  
    // Populate the account select dropdown
    let accountSelect = document.getElementById("accountSelect");
    accountSelect.innerHTML = "";
    for (let i = 0; i < accountList.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = accountList[i].name;
      accountSelect.add(option);
    }
  
    // Disable the submit button until an account is selected
    document.getElementById("debitButton").disabled = true;
  }

  function deposit() {
    // Get input values
    let accountIndex = document.getElementById("accountSelect").value;
    let amount = parseInt(document.getElementById("depositAmountInput").value);
  
    // Deposit the amount to the account
    accountList[accountIndex].balance += amount;
  
    // Update account information
    updateAccountInfo();
  
    // Hide the deposit page and show the account information page
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "none";
  }
  
  function debit() {
    // Get input values
    let accountIndex = document.getElementById("accountSelect").value;
    let amount = parseInt(document.getElementById("debitAmountInput").value);
  
    // Debit the amount from the account
    accountList[accountIndex].balance -= amount;
  
    // Update account information
    updateAccountInfo();
  
    // Hide the debit page and show the account information page
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "none";
  }
  function updateAccountInfo() {
    // Clear the account info textarea
    document.getElementById("accountInfo").value = "";
  
    // Loop through the account list and append the account info to the textarea
    for (let i = 0; i < accountList.length; i++) {
      let account = accountList[i];
      let info = account.name + " - " + account.balance;
      document.getElementById("accountInfo").value += info + "\n";
    }
  }
  
  function showDepositPage() {
    // Show the deposit page and hide the other pages
    document.getElementById("depositPage").style.display = "block";
    document.getElementById("debitPage").style.display = "none";
  
    // Populate the account select dropdown
    let accountSelect = document.getElementById("accountSelect");
    accountSelect.innerHTML = "";
    for (let i = 0; i < accountList.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = accountList[i].name;
      accountSelect.add(option);
    }
  
    // Disable the submit button until an account is selected
    document.getElementById("depositButton").disabled = true;
  }
  
  function showDebitPage() {
    // Show the debit page and hide the other pages
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "block";
  
    // Populate the account select dropdown
    let accountSelect = document.getElementById("accountSelect");
    accountSelect.innerHTML = "";
    for (let i = 0; i < accountList.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = accountList[i].name;
      accountSelect.add(option);
    }
  
    // Disable the submit button until an account is selected
    document.getElementById("debitButton").disabled = true;
  }
  
  function deposit() {
    // Get input values
    let accountIndex = document.getElementById("accountSelect").value;
    let amount = parseInt(document.getElementById("depositAmountInput").value);
  
    // Deposit the amount to the account
    accountList[accountIndex].balance += amount;
  
    // Update account information
    updateAccountInfo();
  
    // Hide the deposit page and show the account information page
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "none";
  }
  
  function debit() {
    // Get input values
    let accountIndex = document.getElementById("accountSelect").value;
    let amount = parseInt(document.getElementById("debitAmountInput").value);
  
    // Debit the amount from the account
    accountList[accountIndex].balance -= amount;
  
    // Update account information
    updateAccountInfo();
  
    // Hide the debit page and show the account information page
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "none";
  }
  
  function updateAccountInfo() {
    // Clear the account info textarea
    document.getElementById("accountInfo").value = "";
  
    // Loop through the account list and append the account info to the textarea
    for (let i = 0; i < accountList.length; i++) {
      let account = accountList[i];
      let info = account.name + " - " + account.balance;
      document.getElementById("accountInfo").value += info + "\n";
    }
  }
  
  function showDepositPage() {
    // Show the deposit page and hide the other pages
   
    document.getElementById("debitPage").style.display = "none";

    // Populate the account select dropdown
    let accountSelect = document.getElementById("accountSelect");
    accountSelect.innerHTML = "";
    for (let i = 0; i < accountList.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = accountList[i].name;
      accountSelect.add(option);
    }

    // Disable the submit button until an account is selected
    document.getElementById("depositButton").disabled = true;
}

function showDebitPage() {
    // Show the debit page and hide the other pages
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "block";

    // Populate the account select dropdown
    let accountSelect = document.getElementById("accountSelect");
    accountSelect.innerHTML = "";
    for (let i = 0; i < accountList.length; i++) {
      let option = document.createElement("option");
      option.value = i;
      option.text = accountList[i].name;
      accountSelect.add(option);
    }

    // Disable the submit button until an account is selected
    document.getElementById("debitButton").disabled = true;
}

function deposit() {
    // Get input values
    let accountIndex = document.getElementById("accountSelect").value;
    let amount = parseInt(document.getElementById("depositAmountInput").value);

    // Deposit the amount to the account
    accountList[accountIndex].balance += amount;

    // Update account information
    updateAccountInfo();

    // Hide the deposit page and show the account information page
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "none";
}

function debit() {
    // Get input values
    let accountIndex = document.getElementById("accountSelect").value;
    let amount = parseInt(document.getElementById("debitAmountInput").value);

    // Debit the amount from the account
    accountList[accountIndex].balance -= amount;

    // Update account information
    updateAccountInfo();

    // Hide the debit page and show the account information page
    document.getElementById("depositPage").style.display = "none";
    document.getElementById("debitPage").style.display = "none";
}

function updateAccountInfo() {
    // Clear the account info textarea
    document.getElementById("accountInfo").value = "";

    // Loop through the account list and append the account info to the textarea
    for (let i = 0; i < accountList.length; i++) {
      let account = accountList[i];
      let info = account.name + " - " + account.balance;
      document.getElementById("accountInfo").value += info + "\n";
    }
}


