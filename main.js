function search() {
    const query = document.getElementById('search').value.toLowerCase();
    const sections = document.querySelectorAll('body *');
    let found = false;

    sections.forEach(section => {
        const text = section.textContent.toLowerCase().trim();
        if (text.includes(query)) {
            const offset = 84; // 84px bo'sh joy yaratish
            const elementPosition = section.getBoundingClientRect().top + window.pageYOffset;
            const offsetPosition = elementPosition - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            found = true;
        }
    });

    if (!found) {
        alert("Kechirasiz kiritgan so'zingiz topilmadi!");
    }
}

// Enter tugmasi bosilganda search funksiyasini chaqirish
document.getElementById('search').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        search();
    }
});


let box = document.querySelectorAll('.hide')
let btn = document.querySelector('#hide_box')

btn.addEventListener('click', function () {
    box.forEach(function (boxes) {
        if (boxes.style.display === "none" || boxes.style.display === "") {
            boxes.style.display = "block";
            btn.innerHTML = "Yashirish"
        }
        else {
            boxes.style.display = "none";
            btn.innerHTML = "Ko'proq kurslar..."
        }
    })
})
