// Đăng ký
const registerForm = document.getElementById("register-form");
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  // Validate thông tin đăng ký
  if (username === "" || email === "" || password === "") {
    alert("Vui lòng điền đầy đủ thông tin!");
    return;
  } else {
    // Lưu thông tin đăng ký vào local storage
    const user = [{ username, email, password }];
    localStorage.setItem("user", JSON.stringify(user));
    alert("Đăng ký thành công!");
    window.location.href = "dang nhap.html";
  }
});


