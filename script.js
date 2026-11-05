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
            }
        });
    }

});
