const textosDigitados = [
    document.querySelector('.digitar'),
    document.querySelector('.titulo1'),
]

const conteudo = [
    {
        linkId: '#livro-onde-habitam',
        modalId: '#modal-livro-onde-habitam',
        modalcloseId: '#modalclose-livro-onde-habitam'
    },
    {
        linkId: '#livro-crimes-grindelwald',
        modalId: '#modal-livro-crimes-grindelwald',
        modalcloseId: '#modalclose-livro-crimes-grindelwald'
    },
    {
        linkId: '#livro-segredos-dumbledore',
        modalId: '#modal-livro-segredos-dumbledore',
        modalcloseId: '#modalclose-livro-segredos-dumbledore'
    },
    {
        linkId: '#livro-pedra-filosofal',
        modalId: '#modal-livro-pedra-filosofal',
        modalcloseId: '#modalclose-livro-pedra-filosofal'
    },
    {
        linkId: '#livro-camera-secreta',
        modalId: '#modal-livro-camera-secreta',
        modalcloseId: '#modalclose-livro-camera-secreta'
    },
    {
        linkId: '#livro-prisioneiro-azkabam',
        modalId: '#modal-livro-prisioneiro-azkabam',
        modalcloseId: '#modalclose-livro-prisioneiro-azkabam'
    },
    {
        linkId: '#livro-calice-fogo',
        modalId: '#modal-livro-calice-fogo',
        modalcloseId: '#modalclose-livro-calice-fogo'
    },
    {
        linkId: '#livro-ordem-fenix',
        modalId: '#modal-livro-ordem-fenix',
        modalcloseId: '#modalclose-livro-ordem-fenix'
    },
    {
        linkId: '#livro-enigma-principe',
        modalId: '#modal-livro-enigma-principe',
        modalcloseId: '#modalclose-livro-enigma-principe'
    },
    {
        linkId: '#livro-reliquias-morte',
        modalId: '#modal-livro-reliquias-morte',
        modalcloseId: '#modalclose-livro-reliquias-morte'
    },
    {
        linkId: '#livro-crianca-amaldicoada',
        modalId: '#modal-livro-crianca-amaldicoada',
        modalcloseId: '#modalclose-livro-crianca-amaldicoada'
    },
    {
        linkId: '#filme-onde-habitam',
        modalId: '#modal-filme-onde-habitam',
        modalcloseId: '#modalclose-filme-onde-habitam'
    },
    {
        linkId: '#filme-crimes-grindelwald',
        modalId: '#modal-crimes-grindelwald',
        modalcloseId: '#modalclose-crimes-grindelwald'
    },
    {
        linkId: '#filme-segredos-dumbledore',
        modalId: '#modal-segredos-dumbledore',
        modalcloseId: '#modalclose-segredos-dumbledore'
    },
    {
        linkId: '#filme-pedra-filosofal',
        modalId: '#modal-pedra-filosofal',
        modalcloseId: '#modalclose-pedra-filosofal'
    },
    {
        linkId: '#filme-camera-secreta',
        modalId: '#modal-camera-secreta',
        modalcloseId: '#modalclose-camera-secreta'
    },
    {
        linkId: '#filme-prisioneiro-azkaban',
        modalId: '#modal-prisioneiro-azkaban',
        modalcloseId: '#modalclose-prisioneiro-azkaban'
    },
    {
        linkId: '#filme-calice-fogo',
        modalId: '#modal-calice-fogo',
        modalcloseId: '#modalclose-calice-fogo'
    },
    {
        linkId: '#filme-ordem-fenix',
        modalId: '#modal-ordem-fenix',
        modalcloseId: '#modalclose-ordem-fenix'
    },
    {
        linkId: '#filme-enigma-principe',
        modalId: '#modal-enigma-principe',
        modalcloseId: '#modalclose-enigma-principe'
    },
    {
        linkId: '#filme-reliquias-morte-1',
        modalId: '#modal-reliquias-morte-1',
        modalcloseId: '#modalclose-reliquias-morte-1'
    },
    {
        linkId: '#filme-reliquias-morte-2',
        modalId: '#modal-reliquias-morte-2',
        modalcloseId: '#modalclose-reliquias-morte-2'
    },
    {
        linkId: '#documentario-volta-hogwarts',
        modalId: '#modal-documentario-volta-hogwarts',
        modalcloseId: '#modalclose-documentario-volta-hogwarts'
    }    
]

function ativaLetra(elemento) {
    const arrayTexto = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    elemento.style.setProperty('--finishTime', ((75 * arrayTexto.length) + 5000) + 'ms')
    arrayTexto.forEach((letra, i) => {
        setTimeout(() => {
            elemento.innerHTML += letra;
        }, 75 * i);
    });
}

function modal(linkId, modalId, modalCloseId) {
    var modalLink = document.querySelector(linkId);
    var modal = document.querySelector(modalId);

    var modalClose = document.querySelector(modalCloseId);
    modalLink.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'flex';
        ajustarModal(modal);
    });
    modalClose.addEventListener('click', (event) => {
        event.preventDefault();
        modal.style.display = 'none';
    });

    function ajustarModal(modal) {
        const modalContent = modal.querySelector('.modal-content');
        const windowHeight = window.innerHeight;
        const contentHeight = modalContent.offsetHeight;

        if (contentHeight < windowHeight) {
            const topOffset = (windowHeight - contentHeight) / 2;
            modalContent.style.top = topOffset + 'px';
        } else {
            modalContent.style.top = '0';
        }
    }
}

for (let j = 0; j < conteudo.length; j++) {
    modal(conteudo[j].linkId, conteudo[j].modalId, conteudo[j].modalcloseId);
}

for (let k = 0; k < textosDigitados.length; k++) {
    ativaLetra(textosDigitados[k]);
};