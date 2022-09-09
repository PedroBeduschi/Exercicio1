function testaFormulario(e)
{
    e.preventDefault();
    
    for (i in e.target.elements['telefone'].value)
    {
        if ('0123456789'.indexOf(e.target.elements['telefone'].value[i]) == -1)
        {
            alert('Apenas números são permitidos no campo Telefone!');
            return false
        }
    }

    if (e.target.elements['telefone'].value.length < 11)
    {
        alert('Número inválido!');
        return false
    }

    var pessoas0 = localStorage.getItem('pessoas')
    if (pessoas0 != null)
    {
        var pessoas = JSON.parse(pessoas0);
    }
    else
    {
        var pessoas = [];
    }

    if (id !== null)
    {
        pessoas[id]= {
            nome: e.target.elements['nome'].value,
            telefone: e.target.elements['telefone'].value,
            xp: (e.target.elements['xp'].value == 'true')
        }
    }
    else
    {
        pessoas.push(
            {
                nome: e.target.elements['nome'].value,
                telefone: e.target.elements['telefone'].value,
                xp: (e.target.elements['xp'].value == 'true')
            }
        )
    }

    localStorage.setItem('pessoas', JSON.stringify(pessoas));

    document.getElementById('home').click();
}

var urlPrincipal = new URL(window.location.href);

var id = urlPrincipal.searchParams.get('pessoa');

if (id !== null)
{
    var pessoas0 = localStorage.getItem('pessoas')
    if (pessoas0 != null)
    {
        var pessoas = JSON.parse(pessoas0);
    }
    else
    {
        var pessoas = [];
    }
    console.log(pessoas[id]);

    document.getElementById('nome').value = pessoas[id].nome;
    document.getElementById('telefone').value = pessoas[id].telefone;
    if (pessoas[id].xp)
    {
        document.getElementById('experienciaSim').checked = true;
    }
    else
    {
        document.getElementById('experienciaNao').checked = true;
    }
}

function testaTelefone(t)
{
    t.preventDefault();
    console.log(t);
    
    if (t.target.value.length == 0)
    {
        t.target.value += '(';
    }

    if (t.target.value.length == 3)
    {
        t.target.value += ') ';
    }

    if (t.target.value.length == 10)
    {
        t.target.value += '-';
    }

    if ((/[0-9]/g).test(t.key) && t.target.value.length < 15)
    {
        t.target.value += t.key;
    }
    
}