const registerForm = document.getElementById('register-form')
const userList = JSON.parse(localStorage.getItem('userList')) || []

// for(let i = 0; i < userList.length; i++) {
//   const user = userList[i]
//   user.username === username.value
// }

// Xu ly khi nguoi dung bam nut Dang nhap
registerForm.onsubmit = function (event) {
  event.preventDefault()

  const username = document.getElementById('username')
  const password = document.getElementById('password')
  const confirmPassword = document.getElementById('confirm-password')

  const usernameError = document.getElementById('username-error')
  const passwordError = document.getElementById('password-error')
  const confirmPasswordError = document.getElementById('confirm-password-error')
  const registerError = document.getElementById('register-error')

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

  if (confirmPassword.value === '') {
    confirmPasswordError.innerHTML = 'Vui lòng nhập lại Mật khẩu'
  } else if (confirmPassword.value !== password.value) {
    confirmPasswordError.innerHTML = 'Mật khẩu không trùng'
  } else {
    confirmPasswordError.innerHTML = ''
  }

  const existingUser = userList.find(function (user) {
    return user.username === username.value
  })
  if (existingUser) {
    registerError.innerHTML = 'Tên đăng nhập đã được sử dụng'
  } else {
    // Dang ky thanh cong
    const newUser = {
      username: username.value,
      password: password.value,
    }
    userList.push(newUser)
    localStorage.setItem('userList', JSON.stringify(userList))
    registerError.innerHTML = ''
    window.location.href = '../login'
  }
}
