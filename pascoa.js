const username = 'felipe';
const password = 'navio';
const url = 'http://10.100.0.102:8080/pascoa-sorte';

const headers = new Headers();
headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

fetch(url, {
    method: 'GET',
    headers: headers
})
    .then(response => {
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        document.title = "Dados Recebidos!";

        document.getElementById('titulo').textContent = "PASCOAAAAAA!!!";

        const resultado = `${data.usuario.toUpperCase()}, seu número da sorte é ${data.numeroSorte}`;
        document.getElementById('resultado').textContent = resultado;
        
        document.getElementById('resultado').classList.add('mostrar');
    })
    .catch(error => {
        document.getElementById('resultado').textContent = 'Erro ao carregar: ' + error;
        document.getElementById('resultado').classList.add('mostrar');
    });

