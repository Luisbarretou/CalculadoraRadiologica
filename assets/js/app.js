// addEventListener('DOMContentLoaded', () => {
//     var btnMenu = document.querySelector('.btn-menu');
//     if(btnMenu) {
//         btnMenu.addEventListener('click', () => {
//             const menuItems = document.querySelector('.menu-items');
//             menuItems.classList.toggle('show');
//         })
//     }
// })


// const btnSubMenu = document.querySelectorAll('.submenu-btn');
// for( let i= 0; i < btnSubMenu.length; i++){
//     btnSubMenu[i].addEventListener('click', function() {
//         const menuItems = document.querySelector('.submenu');
//             menuItems.classList.toggle('mostrar');
//     });
// }


const btnMenu = document.querySelector("#btnMenu");
const menu = document.querySelector("#menu");

btnMenu.addEventListener("click", function() {
    menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for(let i=0; i<subMenuBtn.length; i++) {
    subMenuBtn[i].addEventListener("click", function() {
        if(window.innerWidth < 1000) {
            const subMenu = subMenuBtn[i].nextElementSibling;
            const height = subMenu.scrollHeight;

            if(subMenu.classList.contains("desplegar")){
                subMenu.classList.remove("desplegar");
                subMenu.removeAttribute("style");
            }else {
                subMenu.classList.add("desplegar");
                subMenu.style.height = height + "px";
            }
        }
    });
};

//Search
// document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  this.parentNode.querySelector('input').focus();});

function animationCopyResult() {
    Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Texto copiado',
        showConfirmButton: false,
        timer: 1500,
        fontSize: '1px'
    })
};

function animationGenerateResult() {
    let timerInterval
    Swal.fire({
        title: 'Generando resultado!',
        html: 'Cargando <b></b> millisegundos.',
        timer: 800,
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading()
            const b = Swal.getHtmlContainer().querySelector('b')
            timerInterval = setInterval(() => {
                b.textContent = Swal.getTimerLeft()
            }, 100)
        },
        willClose: () => {
            clearInterval(timerInterval)
        }
        }).then((result) => {
        /* Read more about handling dismissals below */
        // if (result.dismiss === Swal.DismissReason.timer) {
        //     console.log('I was closed by the timer')
        // }
    })
};

function animationInformatioButton(titulo, texto , imagenUrl) {
    Swal.fire({
        title: titulo,
        text: texto,
        imageUrl: imagenUrl,
        imageAlt: 'Custom image',
        height: '500px',
        width: '500px'
    });
};

function animatioInformationImage(titulo, imagen, imagenAlt) {
    Swal.fire({
        title: titulo,
        imageUrl: imagen,
        imageHeight: '100%',
        imageAlt: imagenAlt,
        width: '800px',
        height: '500px'
    });
}

function animationErrorMessage(texto) {
    Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: texto
    });
}

// BTN INFORMACION
let btnInfoComposicion = document.getElementById("infoComposicion");
let btnInfoCalcificaciones = document.getElementById("infoCalcificaciones");
let btnInfoMargenes = document.getElementById("infoMargenes");
let btnInfoEcogenicidad = document.getElementById("infoEcogenicidad");
let btnInfoFormato = document.getElementById("infoFormato");
let btnInfoChammas = document.getElementById("infoChammas");
let btnInfoTirads = document.getElementById("infoTirads");

let showInformationComposicion = () => {
    animationInformatioButton("COMPOSICIÓN", "Espongiforme: Compuesto predominantemente (> 50%) por pequeños espacios quísticos. No se agregan puntos adicionales para otras categorías. Sólido quístico y mixto: asigna puntos al componente sólido predominante.", "https://radio.mirevistamedica.net/storage/images/4279_Clasificacion_TIRADS%2008.gif");
};

let showInformationCalcificaciones = () => {
    animationInformatioButton("CALCIFICAIONES", "Grandes artefactos de cola de cometa: V.> 1 mm, en componentes quísticos. Macrocalcificaciones: provocan sombra acústica. Calcificaciones periféricas: completas o incompletas a lo largo del margen. Focos ecogénicos punciformes: Sin sombra acústica, pueden tener pequeños artefactos de cola de cometa.", "https://www.researchgate.net/publication/265170268/figure/fig20/AS:667943453081607@1536261537312/Figura-3-TI-RADS-2-nodulo-solido-con-quiste-central_Q320.jpg");
};

let showInformationMargenes = () => {
    animationInformatioButton("MÁRGENES", "Lobuladas: protuberancias en el parénquima adyacente. Irregular: ángulos irregulares, espiculados o agudos. Extensión extratiroidea: invasión evidente de tejidos blandos adyacentes o estructuras vasculares.", "https://radio.mirevistamedica.net/storage/images/4279_Clasificacion_TIRADS%2020.gif");
};

let showInformationEcogenicidad = () => {
    animationInformatioButton("ECOGENICIDAD", "Anecoico: se aplica a los nódulos quísticos o casi enteramente quísticos. Hiperalcohólico / isoecócico / hipoalcohólico: comparado con el parénquima adyacente. Muy hipoecoico: más hipoalcohólico que los músculos infrahioides.", "https://radio.mirevistamedica.net/storage/images/4279_Clasificacion_TIRADS%2012.gif");
};

let showInformationFormato = () => {
    animationInformatioButton("FORMATO", "La forma debe evaluarse en una imagen transversal con medidas paralelas al transductor para la altura y  perpendiculares al transductor para el ancho.", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRshz3yuuBmkaFgzhiqIn9bgAOsFaV_P93Kl7EczfR2nTa7rZ4DKpaxECc8pHPLjdFYKgY&usqp=CAU");
};

let showInformationChammas = () => {
    animationInformatioButton("CHAMMAS", "La clasificación propuesta por Chammas et al. (3) tamiza los nódulos en cinco patrones: patrón I (ausencia de vascularización), patrón II (vascularización periférica solamente), patrón III (vascularización periférica mayor o igual que central), patrón IV (vascularización central mayor que periférica) y estándar V (vascularización central solamente)", "https://media.springernature.com/full/springer-static/image/art%3A10.1007%2Fs12020-019-01843-x/MediaObjects/12020_2019_1843_Fig1_HTML.png");
};

let showInformationTirads = () => {
    animatioInformationImage("Información TIRADS",'assets/images/tirads.jpg',"Tirads Information");
};

btnInfoComposicion?.addEventListener('click', showInformationComposicion);
btnInfoCalcificaciones?.addEventListener('click', showInformationCalcificaciones);
btnInfoMargenes?.addEventListener('click', showInformationMargenes);
btnInfoEcogenicidad?.addEventListener('click', showInformationEcogenicidad);
btnInfoFormato?.addEventListener('click', showInformationFormato);
btnInfoChammas?.addEventListener('click', showInformationChammas);
btnInfoTirads?.addEventListener('click', showInformationTirads);


// CALCULO RADIO BUTTON
let composicionPuntos = document.getElementById("composicionPuntos");
let calcificacionPuntos = document.getElementById("calcificacionPuntos");
let margenesPuntos = document.getElementById("margenesPuntos");
let ecogenicidadPuntos = document.getElementById("ecogenicidadPuntos");
let formatoPuntos = document.getElementById("formatoPuntos");

let btnResult = document.querySelector("#btnResult");
let btnCopy = document.querySelector("#btnCopy");
let resultadoTirads = document.querySelector("#resultadoTirads");

let resultSelected = () => {
    let composicion = document.querySelector("input[name='radioComposicion']:checked").value;
    let calcificacion = document.querySelector("input[name='radioCalcificaciones']:checked").value;
    let margenes = document.querySelector("input[name='radioMargenes']:checked").value;
    let ecogenicidad = document.querySelector("input[name='radioEcogenicidad']:checked").value;
    let formato = document.querySelector("input[name='radioFormato']:checked").value;
    let chammas = document.querySelector("input[name='radioChammas']:checked").value;
    let localizacion = document.querySelector("input[name='radioUbicacion']:checked").value;

    let longitud = document.querySelector("#longitud");
    let alto = document.querySelector("#alto");
    let ancho = document.querySelector("#ancho");

    resultadoTirads.innerHTML = composicion + ", " + ecogenicidad + ", " + margenes + ", " + formato + " " + calcificacion + ", " + localizacion + " midiendo " + longitud.value + " cm de longitud x " + alto.value + " cm de alto x " + ancho.value + " cm de ancho. " + chammas;
};

let resultPuntos = () => {
    composicionPuntos.placeholder = document.querySelector("input[name='radioComposicion']:checked").id;
    calcificacionPuntos.placeholder = document.querySelector("input[name='radioCalcificaciones']:checked").id;
    margenesPuntos.placeholder = document.querySelector("input[name='radioMargenes']:checked").id;
    ecogenicidadPuntos.placeholder = document.querySelector("input[name='radioEcogenicidad']:checked").id;
    formatoPuntos.placeholder = document.querySelector("input[name='radioFormato']:checked").id;
    
    let puntos = parseInt(composicionPuntos.placeholder) + parseInt(calcificacionPuntos.placeholder) + parseInt(margenesPuntos.placeholder) + parseInt(ecogenicidadPuntos.placeholder) + parseInt(formatoPuntos.placeholder);

    if(puntos >= 0 && puntos < 2) {
        document.getElementById("caracteristicasACR").innerHTML = "BENIGNO. No se recomienda BAAF";
        return 1;
    } else if (puntos == 2) {
        document.getElementById("caracteristicasACR").innerHTML = "NO SOSPECHOSO. No se recomienda BAAF";
        return 2;
    } else if (puntos == 3) {
        document.getElementById("caracteristicasACR").innerHTML = "POCO SOSPECHOSO. BAAF si >=2.5cm. Seguimiento si >=3.5 cm ";
        return 3;
    } else if (puntos >= 4 && puntos < 7) {
        document.getElementById("caracteristicasACR").innerHTML = "MODERADAMENTE SOSPECHOSO. BAAF si >=1.5cm. Seguimiento si >=1 cm ";
        return 4;
    } else {
        document.getElementById("caracteristicasACR").innerHTML = "MUY SOSPECHOSO. BAAF si >=1cm. Seguimiento si >=0.5 cm ";
        return 5;
    }
};

let resultCopy = () => {
    let result = document.getElementById("resultadoTirads");
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
};

btnResult?.addEventListener('click', () => {
    document.getElementById("resultadoACR").innerHTML = resultPuntos();
    setTimeout(resultSelected,900);
    animationGenerateResult();
    // console.log(acr);
});

btnCopy?.addEventListener('click', () => {
    animationCopyResult();
    resultCopy();
});


//PIRADS
function uncheckPeriferica () {
    let radioPeriferica = document.querySelectorAll("input[name='radioDWI']");
    radioPeriferica.forEach(btn => {
        btn.checked = false;
    });
};

function uncheckTransicion () {
    let radioTransicion = document.querySelectorAll("input[name='radioT2WI']");
    radioTransicion.forEach(btn => {
        btn.checked = false;
    });
};

function uncheckContraste () {
    let radiocontraste = document.querySelectorAll("input[name='radioContraste']");
    radiocontraste.forEach(btn => {
        btn.checked = false;
    });
};

function zonaPeriferica() {
    uncheckTransicion();
    uncheckContraste();
    document.getElementById('dwi').style.display = 'block';
    document.getElementById('t2wi').style.display = 'none';
    document.getElementById('contrasteDinamico').style.display = 'none';
};

function zonaTransicion() {
    uncheckPeriferica();
    uncheckContraste();
    document.getElementById('t2wi').style.display = 'block';
    document.getElementById('dwi').style.display = 'none';
    document.getElementById('contrasteDinamico').style.display = 'none';
};

function dwiAusente() {
    uncheckContraste();
    document.getElementById('t2wi').style.display = 'block';
    document.getElementById('contrasteDinamico').style.display = 'none';
};

function contrasteDinamicoDwi() {
    uncheckTransicion();
    uncheckContraste();
    document.getElementById('contrasteDinamico').style.display = 'block';
    document.getElementById('t2wi').style.display = 'none';
};

function contrasteDinamicoT2wi() {
    document.getElementById('contrasteDinamico').style.display = 'block';
};

/*CÁLCULO PIRADS */
let btnResultPirads = document.querySelector("#btnResultPirads");
let lblDwiPuntos = document.getElementById("DWIPuntos");
let lblT2wiPuntos = document.getElementById("T2WIPuntos");
let lblContrastePuntos = document.getElementById("contrastePuntos");
let txtResultadoPirads = document.querySelector("#resultadoPirads");
let btnCopyPirads = document.querySelector("#btnCopyPirads");

let resultPuntosPirads = () => {
    let radioUbicacionLesion = document.querySelector("input[name='radioLocalizacion']:checked");
    let radioDwi = document.querySelector("input[name='radioDWI']:checked");
    let radioT2wi = document.querySelector("input[name='radioT2WI']:checked");
    let radioContraste = document.querySelector("input[name='radioContraste']:checked");
    let puntos;
    let result;

    if(radioUbicacionLesion) {
        animationGenerateResult();
        result = "Lesión ubicada en la " + radioUbicacionLesion.value;
        if(radioDwi) {
            puntos = parseInt(radioDwi.id);
            lblDwiPuntos.placeholder = parseInt(radioDwi.id);
            result += " " + radioDwi.value;
        } else {
            puntos = 0;
        }
    
        if(radioT2wi) {
            puntos += parseInt(radioT2wi.id);
            lblT2wiPuntos.placeholder = parseInt(radioT2wi.id);
            result += " " + radioT2wi.value;
        } else {
            puntos += 0;
        }
    
        if(radioContraste) {
            puntos += parseInt(radioContraste.id);
            lblContrastePuntos.placeholder = parseInt(radioContraste.id);
            result += " " + radioContraste.value;
        } else {
            puntos += 0;
            lblContrastePuntos.placeholder = 0;
        }
    } else {
        animationErrorMessage('Seleccione la ubicación de la lesión');
        result = 'Ninguna opción seleccionada';
    }
    txtResultadoPirads.innerHTML = result;
    return puntos;    
};


//Suggested result

btnResultPirads?.addEventListener('click', () => {
    document.getElementById("resultadoPI").innerHTML = resultPuntosPirads();
});

let btnInfoDWI = document.getElementById("infoDWI");
let btnInfoT2WI = document.getElementById("infoT2WI");
let btnInfoContraste = document.getElementById("infoContraste");
let btnInfoPirads = document.getElementById("infoPirads");

//Popups Information
let showInformationDWI = () => {
    animationInformatioButton("Apariencia DWI", "", 'assets/images/dwi.jpg');
};

let showInformationT2WWI = () => {
    animationInformatioButton("Apariencia T2WI", "", 'assets/images/t2wi.jpg');
};

let showInformationContraste = () => {
    animationInformatioButton("Apariencia DCE", "", 'assets/images/dce.jpg');
};

let showInformationPirads = () => {
    animatioInformationImage("Información PIRADS",'assets/images/piradsInfo.jpg',"Pirads Information");
};

btnInfoDWI?.addEventListener('click', showInformationDWI);
btnInfoT2WI?.addEventListener('click', showInformationT2WWI);
btnInfoContraste?.addEventListener('click', showInformationContraste);
btnInfoPirads?.addEventListener('click', showInformationPirads);

//Copy Result
let resultCopyPirads = () => {
    let result = document.getElementById("resultadoPirads");
    result.select();
    result.setSelectionRange(0, 99999);
    document.execCommand("copy");
};

btnCopyPirads?.addEventListener('click', () => {
    animationCopyResult();
    resultCopyPirads();
});