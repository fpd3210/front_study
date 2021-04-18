
window.onload = () =>{


    let loginBtn = document.getElementById("loginBtn")
    loginBtn.onclick =  () => {
        let name = document.getElementById("username").value;
        let pass = document.getElementById("password").value;

        console.log(name)
        console.log(pass)
        //判断非空
        if ((name == null || name === "") || (pass == null || pass === "")) {
            alert("用户名或密码不能为空！！");
        }
        else {
            if (name === "zhangsan" && pass === "123") {
                alert("登录成功！");
                window.location.href = "index.html";
            } else {
                alert("用户名或密码错误！！");
                return
            }
        }
    }

}

