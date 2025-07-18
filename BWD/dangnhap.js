function  signup(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var lienHe = document.getElementById("lienHe").value;
    var password = document.getElementById("password").value;
    var cfpassword = document.getElementById("cfpassword").value;
  
    if(password != cfpassword){
      alert("Mật khẩu không trùng khớp");
      return;
    }else{
      var user = {
        username : username,
        lienHe : lienHe,
        password : password,
      };
      var json = JSON.stringify(user);
      localStorage.setItem(username, json);
      alert("Đăng ký thành công");
    }
  }
  
  function login(e){
    event.preventDefault();
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var user = localStorage.getItem(username);
    var data = JSON.parse(user);
    if(!user){
      alert("Không tìm thấy tài khoản nào. Vui lòng đăng ký.");
    }else if(username == data.username && password == data.password){
      alert("Đăng nhập thành công!");
      window.location.href="Trangchu.html";
    }else{
      alert("Tên đăng nhập hoặc mật khẩu không chính xác!");
    }
  
  }
  