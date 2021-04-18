
window.onload = () =>{
    let registerBtn = document.getElementById("registerBtn")
    registerBtn.onclick = () => {
        let name = document.getElementById("username").value;
        let pass = document.getElementById("password").value;
        let rePass = document.getElementById("rePassword").value;
        let sex = document.getElementById("sex").value;
        let birthday = document.getElementById("birthday").value;
        let email = document.getElementById("email").value;
        let remark = document.getElementById("remark").value;

        //判断非空
        if (name == null || name === "") {
            alert("用户名不能为空！！");
            return;
        }
        if(pass==null||pass==""){
            alert("密码不能为空 !!")
            return;
        }
        if (pass!==rePass){
            alert("两次输入的密码不一致！！");
            return;
        }
        if (sex ==null || sex===""){
            alert("请选择性别！！");
            return;
        }
        if(birthday==null|| birthday===""){
            alert("请选择生日")
            return;
        }

        alert("注册成功！！！")
        window.location.href="login.html"

    }

}



