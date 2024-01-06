
const gallery  = document.querySelectorAll(".image"),
previewBox = document.querySelector(".preview-box"),
previewImg = previewBox.querySelector("img"),
closeIcon = previewBox.querySelector(".icon"),
currentImg = previewBox.querySelector(".current-img"),
totalImg = previewBox.querySelector(".total-img"), 
shadow = document.querySelector(".shadow");


window.onload = () => {
    
    for (let i = 0; i < gallery.length; i++) {
        totalImg.textContent = gallery.length;
        let newIndex = i;
        let clickedImgIndex;

        gallery[i].onclick = () => {
            clickedImgIndex = i;

            function preview() {
                currentImg.textContent = newIndex + 1;
                let imageURL = gallery[newIndex].querySelector("img").src;
                previewImg.src = imageURL;
            }

            preview();

            const prevBtn = document.querySelector(".prev");
            const nextBtn = document.querySelector(".next");

            if (newIndex === 0) {
                prevBtn.style.display = "none";
            } else {
                prevBtn.style.display = "block";
            }

            if (newIndex >= gallery.length - 1) {
                nextBtn.style.display = "none";
            } else {
                nextBtn.style.display = "block";
            }

            prevBtn.onclick = () => {
                newIndex--;
                if (newIndex < 0) {
                    newIndex = gallery.length - 1;
                }
                preview();
            };

            nextBtn.onclick = () => {
                newIndex++;
                if (newIndex >= gallery.length) {
                    newIndex = 0;
                }
                preview();
            };

            document.querySelector("body").style.overflow = "hidden";
            previewBox.classList.add("show");
            shadow.style.display = "block";

            // Variable para almacenar la posición inicial del mouse
            let startX;

            // Controlador de evento para el inicio del desplazamiento
            previewImg.addEventListener("mousedown", (e) => {
                startX = e.clientX;
            });

            // Controlador de evento para el desplazamiento
            previewImg.addEventListener("mousemove", (e) => {
                // Verificar si el botón izquierdo del mouse está presionado
                if (e.buttons === 1) {
                    const deltaX = e.clientX - startX;

                    // Cambiar la imagen solo si el desplazamiento es significativo
                    if (Math.abs(deltaX) > 10) {
                        if (deltaX > 0) {
                            // Desplazarse a la imagen anterior
                            newIndex = (newIndex === 0) ? gallery.length - 1 : newIndex - 1;
                        } else {
                            // Desplazarse a la siguiente imagen
                            newIndex = (newIndex === gallery.length - 1) ? 0 : newIndex + 1;
                        }

                        // Actualizar la vista previa con la nueva imagen
                        preview();
                        startX = e.clientX;
                    }
                }
            });
            function updateNavigationButtons() {
                if (newIndex === 0) {
                    prevBtn.style.display = "none";
                } else {
                    prevBtn.style.display = "block";
                }

                if (newIndex >= gallery.length - 1) {
                    nextBtn.style.display = "none";
                } else {
                    nextBtn.style.display = "block";
                }
            }

            updateNavigationButtons();

            prevBtn.onclick = () => {
                newIndex--;
                if (newIndex < 0) {
                    newIndex = gallery.length - 1;
                }
                preview();
                updateNavigationButtons();
            };

            nextBtn.onclick = () => {
                newIndex++;
                if (newIndex >= gallery.length) {
                    newIndex = 0;
                }
                preview();
                updateNavigationButtons();
            };

            closeIcon.onclick = () => {
                newIndex = clickedImgIndex;
                prevBtn.style.display = "block";
                nextBtn.style.display = "block";
                previewBox.classList.remove("show");
                shadow.style.display = "none";
                document.querySelector("body").style.overflow = "scroll";
            };

            const closeButton = document.getElementById("closeButton");

    closeButton.onclick = () => {
        previewBox.classList.remove("show");
        shadow.style.display = "none";
        document.querySelector("body").style.overflow = "scroll";
    };
        };
    }
};


document.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) { //27 es el código ASCII para la tecla Esc
        document.querySelector("body").style.overflow = "scroll";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
    }
});




document.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) { //27 es el código ASCII para la tecla Esc
        document.querySelector("body").style.overflow = "scroll";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
    }
});

document.addEventListener("keydown", function(event) {
    if (event.keyCode === 27) { //27 es el código ASCII para la tecla Esc
        document.querySelector("body").style.overflow = "scroll";
        previewBox.classList.remove("show");
        shadow.style.display = "none";
    }
});

