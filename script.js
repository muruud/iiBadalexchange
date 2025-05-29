alert("Script.js loaded ✅");// === Currency Conversion: USD ↔ SOS ===
document.addEventListener("DOMContentLoaded", () => {
  const API_KEY = "9dcf78fdc8eaa66ac754a954";

  const convertBtn = document.getElementById("convertBtn");
  const result = document.getElementById("result");

  convertBtn.addEventListener("click", async () => {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    if (!amount || amount <= 0) {
      result.innerText = "Fadlan geli lacag sax ah.";
      return;
    }

    try {
      const res = await fetch(https://v6.exchangerate-api.com/v6/${API_KEY}/latest/${fromCurrency});
      const data = await res.json();

      if (data.result === "success") {
        const rate = data.conversion_rates[toCurrency];
        const converted = (amount * rate).toFixed(2);
        result.innerText = ${amount} ${fromCurrency} = ${converted} ${toCurrency};
      } else {
        result.innerText = "Xog lama helin.";
      }
    } catch (error) {
      result.innerText = "Khalad ayaa dhacay marka la helayo xogta.";
    }
  });

  // === Mobile Money Exchange ===
  document.getElementById("exchangeBtn").addEventListener("click", () => {
    const from = document.getElementById("fromService").value;
    const to = document.getElementById("toService").value;
    const amount = document.getElementById("mobileAmount").value;
    const currency = document.getElementById("mobileCurrency").value;

    if (!amount || amount <= 0) {
      alert("Fadlan geli lacag sax ah.");
    } else {
      alert(Waa la wareejin doonaa ${amount} ${currency} laga bilaabo ${from} ilaa ${to}.);
    }
  });

  // === Send Money ===
  document.getElementById("sendBtn").addEventListener("click", () => {
    const recipient = document.getElementById("recipient").value;
    const amount = document.getElementById("transferAmount").value;
    const currency = document.getElementById("sendCurrency").value;

    if (recipient && amount > 0) {
      alert(Waxaad u dirtay ${amount} ${currency} lambarka ${recipient}.);
    } else {
      alert("Fadlan buuxi foomka dirista.");
    }
  });

  // === Receive Money ===
  document.getElementById("receiveBtn").addEventListener("click", () => {
    const number = document.getElementById("receiveNumber").value;
    const currency = document.getElementById("receiveCurrency").value;

    if (number) {
      alert(Waxaad lacag ku heli doontaa lambarka ${number} (${currency}).);
    } else {
      alert("Fadlan geli lambarkaaga.");
    }
  });

  // === Share Button ===
  document.getElementById("shareBtn").addEventListener("click", () => {
    alert("Waa lagu mahadsan yahay la wadaagista! Link-gaagu waa: iibadal.com/ref/12345");
  });

  // === Live Chat ===
  document.getElementById("chatBtn").addEventListener("click", () => {
    alert("Adeegga live chat wuxuu dhawaan soo socdaa. Mahadsanid.");
  });
});