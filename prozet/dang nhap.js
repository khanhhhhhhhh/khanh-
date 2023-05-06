const loginForm = document.getElementById("login-form");
loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const loginUsername = document.getElementById("login-username").value;
  const loginPassword = document.getElementById("login-password").value;
  // Lấy thông tin đăng ký từ local storage
  const user = JSON.parse(localStorage.getItem("user"));
  // Validate thông tin đăng nhập
  if (
    user === null ||
    loginUsername !== user.username ||
    loginPassword !== user.password
  ) {
    alert("Tên đăng nhập hoặc mật khẩu không đúng!");
    return;
  } else {
    alert("Đăng nhập thành công!");
    window.location.href = "http://127.0.0.1:5500/seson7-js/prozet/tr%20dang%20nhap.html";
  }
});
// Đăng xuất
// const logout = document.getElementById("logout");
// logout.addEventListener("click", function () 
// {
//     localStorage.removeItem("user");
//     window.location.href = "http://127.0.0.1:5500/seson7-js/prozet/tr%20dang%20nhap.html";
//   });
//   // Đăng nhập
//   const login = document.getElementById("login");
//   login.addEventListener("click", function ()
//   {
//       window.location.href = "http://127.0.0.1:5500/seson7-js/prozet/tr%20dang%20nhap.html";
//     });
//     // Đăng ký
//     const register = document.getElementById("register");
//     register.addEventListener("click", function ()
//     {
//         window.location.href = "http://127.0.0.1:5500/seson7-js/prozet/tr%20dang%20ky.html";
//       });
