console.log('Código javascript')

var pessoas0 = localStorage.getItem('pessoas')
if (pessoas0 != null)
{
    var pessoas = JSON.parse(pessoas0);
}
else
{
    var pessoas = [];
}

/*let pessoas = 
[
    {
        nome: 'Pedro Beduschi',
        tel: '19123456789',
        xp: true
    },
    {
        nome: 'Julia Pereira',
        tel: '19123456789',
        xp: false
    },
    {
        nome: 'Donivete Irene',
        tel: '19123456789',
        xp: true
    },
    {
        nome: 'Cleide da Costa',
        tel: '19123456789',
        xp: true
    },
    {
        nome: 'João da Silva',
        tel: '19123456789',
        xp: false
    },
];*/

function desenhaTabela()
{
    linhasExistentes = [...document.querySelectorAll('table.lista tbody .conteudoDinamico')];
    linhasExistentes.forEach((element) =>
    {
        element.remove();
        console.log(element);
    })


    for (pessoa in pessoas)
    {
        document.querySelector('table.lista tbody').innerHTML +=
            `<tr class="conteudoDinamico">
                <td>
                    ` + pessoas[pessoa].nome + `
                </td>
                <td>
                    ${pessoas[pessoa].tel}
                </td>
                <td>
                    ${(pessoas[pessoa].xp ? `<strong style="color:green"> Sim </strong>` : `<strong style="color:red"> Não </strong>`)}
                </td>
                <td>
                    <button onclick="excluiUsuario(${pessoa})"> Excluir </button>
                    <a href="./form.html?pessoa=${pessoa}">Editar</a>
                </td>
            </tr>`    
    };
}

function excluiUsuario(p)
{
    pessoas.splice(p, 1);
    desenhaTabela();
    localStorage.setItem('pessoas', JSON.stringify(pessoas));
}

desenhaTabela();