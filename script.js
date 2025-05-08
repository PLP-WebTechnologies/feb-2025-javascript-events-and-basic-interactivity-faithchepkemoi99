// Button Click
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  
  // Hover Box Color Change
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseover", () => {
    hoverBox.style.backgroundColor = "lightblue";
  });
  hoverBox.addEventListener("mouseout", () => {
    hoverBox.style.backgroundColor = "lightgray";
  });
  
  // Keypress Detection
  document.addEventListener("keydown", (e) => {
    document.getElementById("keyOutput").textContent = `You pressed: ${e.key}`;
  });
  
  // Double-Click Secret
  document.getElementById("secretBtn").addEventListener("dblclick", () => {
    alert("🎉 Secret action triggered!");
  });
  
  // Change Button Text & Color
  const changeBtn = document.getElementById("changeBtn");
  changeBtn.addEventListener("click", () => {
    changeBtn.textContent = "Changed!";
    changeBtn.style.backgroundColor = "greenyellow";
  });
  
  // Image Gallery
  const images = [
    "https://placekitten.com/300/200",
    "https://placekitten.com/301/200",
    "https://placekitten.com/302/200"
  ];
  let currentImage = 0;
  
  function showImage(index) {
    document.getElementById("galleryImg").src = images[index];
  }
  
  function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    showImage(currentImage);
  }
  
  function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    showImage(currentImage);
  }
  
  // Tabs
  function showTab(tabId) {
    document.querySelectorAll(".tabContent").forEach(tab => tab.style.display = "none");
    document.getElementById(tabId).style.display = "block";
  }
  
  // Form Validation
  document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
  
    const emailValid = /\S+@\S+\.\S+/.test(email);
    const passwordValid = password.length >= 8;
  
    if (!emailValid) {
      alert("❌ Invalid email format.");
    } else if (!passwordValid) {
      alert("❌ Password must be at least 8 characters.");
    } else {
      alert("✅ Form submitted successfully!");
    }
  });
  
  // Real-time Feedback
  document.getElementById("password").addEventListener("input", (e) => {
    const feedback = document.getElementById("feedback");
    if (e.target.value.length < 8) {
      feedback.textContent = "Password too short.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Strong password!";
      feedback.style.color = "green";
    }
  });
  