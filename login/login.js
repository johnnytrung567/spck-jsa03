const loginForm = document.getElementById('login-form')
const userList = JSON.parse(localStorage.getItem('userList')) || []

// Xu ly khi nguoi dung bam nut Dang nhap
loginForm.onsubmit = function (event) {
  event.preventDefault()
  const username = document.getElementById('username')
  const password = document.getElementById('password')

  const usernameError = document.getElementById('username-error')
  const passwordError = document.getElementById('password-error')
  const loginError = document.getElementById('login-error')

  // Kiểm tra
  if (username.value === '') {
    usernameError.innerHTML = 'Vui lòng nhập Tên đăng nhập'
  } else {
    usernameError.innerHTML = ''
  }

  if (password.value === '') {
    passwordError.innerHTML = 'Vui lòng nhập Mật khẩu'
  } else {
    passwordError.innerHTML = ''
  }

  const existingUser = userList.find(function (user) {
    return user.username === username.value && user.password === password.value
  })

  if (!existingUser) {
    loginError.innerHTML = 'Sai Tên đăng nhập hoặc Mật khẩu'
  } else {
    loginError.innerHTML = ''
    const user = {
      username: username.value,
      password: password.value,
    }
    localStorage.setItem('user', JSON.stringify(user))
    window.location.href = '../index.html'
  }
}
