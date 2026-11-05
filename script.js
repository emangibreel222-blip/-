// تشغيل الموقع
document.addEventListener("DOMContentLoaded", function() {

    // رسالة ترحيب
    let welcome = document.getElementById("welcomeMessage");

    if (welcome) {
        welcome.innerHTML = "أهلاً بكِ في عالم الجمال والعناية 🌸";
    }

    // تحديد الصفحة الحالية في القائمة
    let links = document.querySelectorAll("nav a");

    links.forEach(function(link) {
        if (link.href === window.location.href) {
            link.style.color = "red";
            link.style.fontWeight = "bold";
        }
    });

    // التحقق من تسجيل الدخول
    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            if (email === "" || password === "") {
                alert("الرجاء إدخال البريد الإلكتروني وكلمة المرور");
            }
            else if (password.length < 6) {
                alert("كلمة المرور يجب أن تكون 6 أحرف على الأقل");
            }
            else {
                alert("تم إدخال البيانات بنجاح ❤️");
            }
        });
    }

    // التحقق من نموذج التواصل
    let contactForm = document.getElementById("contactForm");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();

            let name = document.getElementById("name").value;
            let message = document.getElementById("message").value;

            if (name === "" || message === "") {
                alert("الرجاء ملء جميع البيانات");
            }
            else {
                alert("شكراً لتواصلك معنا 🌸");
                contactForm.reset();
           /* تنسيق صفحة تسجيل الدخول */
.login-box {
    width: 85%;
    max-width: 400px;
    margin: 40px auto;
    padding: 25px;
    background-color: #fff0f5;
    border-radius: 20px;
    text-align: center;
    box-shadow: 0 4px 12px #d8a0b0;
}

.login-box h2 {
    color: #d63384;
}

.login-box label {
    display: block;
    margin: 15px;
    color: #8b2455;
}

.login-box input {
    width: 90%;
    padding: 12px;
    border: 1px solid pink;
    border-radius: 10px;
    margin-bottom: 15px;
}

.login-box button {
    width: 95%;
    padding: 12px;
    margin: 8px;
    background-color: #d63384;
    color: white;
    border: none;
    border-radius: 12px;
    font-size: 17px;
    cursor: pointer;
}

.login-box button:hover {
    background-color: #a82060;
}
            } 
        });
    }
alert("مرحباً بك في موقع جمالك سر جمالك 🌸");
});
