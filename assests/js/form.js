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

    pessoas.push(
        {
            nome: e.target.elements['nome'].value,
            tel: e.target.elements['telefone'].value,
            xp: (e.target.elements['xp'].value == 'true')
        }
    )

    localStorage.setItem('pessoas', JSON.stringify(pessoas));

    document.getElementById('home').click();
}

var urlPrincipal = new URL(window.location.href);

var id = urlPrincipal.searchParams.get('pessoa');

if (id !== null)
{
    console.log(id);
}
