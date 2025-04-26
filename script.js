document.getElementById("akanForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const birthdate = document.getElementById("birthdate").value;
    const gender = document.querySelector('input[name="gender"]:checked'); // Get the
  
    if (!birthdate) {
      alert("Please enter your birth date.");
      return;
    }
  
    if (!gender) {
      alert("Please select your gender.");
      return;
    }
  
    const date = new Date(birthdate);
    const day = date.getDate(); // DD
    const month = date.getMonth() + 1; // MM (JavaScript months are 0-indexed)
    const year = date.getFullYear();
  
    const CC = parseInt(year.toString().slice(0, 2)); // First 2 digits of the year
    const YY = parseInt(year.toString().slice(2));    // Last 2 digits of the year
  
    // Apply the given formula
    const dayOfWeek = (
      ((4 * CC - 2 * CC - 1) + (45 * YY) + (1026 * (month + 1)) + day) % 7
    );
  
    const genderValue = gender.value;
    const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  
    const index = Math.floor(dayOfWeek);
  
    let akanName = "";
  
    if (genderValue = "male") {
      akanName = maleNames[index];
    } else if (genderValue = "female") {
      akanName = femaleNames[index];
    }
  
    document.getElementById("result").innerContent = `Your Akan name is: ${akanName};
})`;
      
     document.getElementById("result").style.display = "block";
      });
  document.getElementById("akanForm").reset(); // Reset the form after submission 