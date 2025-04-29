document.getElementById('akan-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent page refresh

  const birthdate = document.getElementById('birthdate').value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;

  if (!birthdate || !gender) {
    alert("Please enter your birthdate and select your gender.");
    return;
  }

  const date = new Date(birthdate);
  const day = date.getDate();
  const month = date.getMonth() + 1; // JavaScript months are 0-11
  const year = date.getFullYear();

  // Input validation
  if (month < 1 || month > 12 || day < 1 || day > 31) {
    alert("Please enter a valid date.");
    return;
  }

  // Akan name logic
  const CC = Math.floor(year / 100);
  const YY = year % 100;
  const MM = month;
  const DD = day;

  // Formula to calculate day of week
  const dayOfWeek = Math.floor(
    ( ( (CC/4) - 2*CC - 1 ) + (5*YY/4) + (26*(MM+1)/10) + DD ) % 7
  );

  // Adjust for negative modulus in JavaScript
  const adjustedDay = (dayOfWeek + 7) % 7;

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

  const akanName = gender === "male" ? maleNames[adjustedDay] : femaleNames[adjustedDay];

  document.getElementById('result').textContent = `Your Akan name is: ${akanName}`;
});
