// Zaad ↔ eDahab Exchange
document.getElementById('exchangeBtn').addEventListener('click', () => {
  const from = document.getElementById('fromService').value;
  const to = document.getElementById('toService').value;
  const amount = document.getElementById('mobileAmount').value;
  const currency = document.getElementById('mobileCurrency').value;

  if (!amount) {
    alert("Fadlan geli lacagta la dirayo.");
    return;
  }

  alert(Waxaad diraysaa ${amount} ${currency} laga bilaabo ${from} ilaa ${to}.);
});

// Currency Conversion
document.getElementById('convertBtn').addEventListener('click', () => {
  const amount = parseFloat(document.getElementById('amount').value);
  const from = document.getElementById('fromCurrency').value;
  const to = document.getElementById('toCurrency').value;
  const result = document.getElementById('result');

  if (isNaN(amount)) {
    result.textContent = "Fadlan geli lacag sax ah.";
    return;
  }

  const rates = {
    USD: { SOS: 570, USD: 1 },
    SOS: { USD: 0.00175, SOS: 1 }
  };

  const converted = amount * rates[from][to];
  result.textContent = ${amount} ${from} = ${converted.toFixed(2)} ${to};
});

// Send Money
document.getElementById('sendBtn').addEventListener('click', () => {
  const to = document.getElementById('recipient').value;
  const amount = document.getElementById('transferAmount').value;
  const currency = document.getElementById('sendCurrency').value;

  if (!to || !amount) {
    alert("Fadlan buuxi labada meelood.");
    return;
  }

  alert(Lacag dhan ${amount} ${currency} ayaa loo diray ${to}.);
});

// Receive Money
document.getElementById('receiveBtn').addEventListener('click', () => {
  const number = document.getElementById('receiveNumber').value;
  const currency = document.getElementById('receiveCurrency').value;

  if (!number) {
    alert("Fadlan geli numberkaaga.");
    return;
  }

  alert(Numberka ${number} diyaar buu u yahay inuu helo lacag (${currency}).);
});

// Share
document.getElementById('shareBtn').addEventListener('click', () => {
  alert("La wadaag link-ga: https://iibadal.app/friend si aad u hesho $1!");
});

// Live Chat
document.getElementById('chatBtn').addEventListener('click', () => {
  alert("Live chat waa la shaqayn doonaa dhawaan. Mahadsanid.");
});function toggleForm() {
  document.getElementById('loginForm').style.display =
    document.getElementById('loginForm').style.display === 'none' ? 'block' : 'none';
  document.getElementById('registerForm').style.display =
    document.getElementById('registerForm').style.display === 'block' ? 'none' : 'block';
}

function register() {
  const user = document.getElementById('regUser').value;
  const pass = document.getElementById('regPass').value;

  if (user && pass) {
    localStorage.setItem(user, pass);
    alert("Diiwaan gelin guul ah!");
    toggleForm();
  } else {
    alert("Fadlan buuxi foomka.");
  }
}

function login() {
  const user = document.getElementById('loginUser').value;
  const pass = document.getElementById('loginPass').value;

  const savedPass = localStorage.getItem(user);
  if (pass === savedPass) {
    alert("Soo galid guul ah!");
    window.location.href = "index.html";
  } else {
    alert("Magaca isticmaalaha ama erayga sirta ah waa qalad.");
  }
}