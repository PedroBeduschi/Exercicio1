function testaFormulario(e)
{
    e.preventDefault();
    
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
            tel: e.target.elements['telefone'].value,
            xp: (e.target.elements['xp'].value == 'true')
        }
    }
    else
    {
        pessoas.push(
            {
                nome: e.target.elements['nome'].value,
                tel: e.target.elements['telefone'].value,
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
    document.getElementById('telefone').value = pessoas[id].tel;
    if (pessoas[id].xp)
    {
        document.getElementById('experienciaSim').checked = true;
    }
    else
    {
        document.getElementById('experienciaNao').checked = true;
    }
}
