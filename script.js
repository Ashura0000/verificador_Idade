 function ver() {
    var d = new Date()
    var a = d.getFullYear()
    var ano = document.getElementById('ano')
    var res = document.querySelector('div#res')

    if (ano.value.length == 0 || ano.value > a) {
        window.alert('Erro. Tente novamente')
    } else {
        var sex = document.getElementsByName('sex')
        var idade = a - Number(ano.value)
        var gen = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        //res.innerHTML= `Idade calculada: ${idade}`
        if (sex[0].checked) {
            gen = 'um Homem'

            if (idade >=0 && idade <10) {
                //baby
                img.setAttribute('src', 'img/baby man.png')      
            } else if (idade<20) {
                //young
                img.setAttribute('src', 'img/young man.png')
            } else if(idade < 50) {
                //adult
                img.setAttribute('src', 'img/adultMan.png')
            } else {
                //older
                img.setAttribute('src', 'img/Older man.png')
            }

        } else if (sex[1].checked) {
            gen = 'uma Mulher'
            if (idade >=0 && idade <10) {
                //baby
                img.setAttribute('src', 'img/babygirl.png')      
            } else if (idade<20) {
                //young
                img.setAttribute('src', 'img/young girl.png')
            } else if(idade < 50) {
                //adult
                img.setAttribute('src', 'img/Adult Girl.png')
            } else {
                //older
                img.setAttribute('src', 'img/Older girl.png')
            }
        }
        
        //res.style.textAlign = 'center'
        res.innerHTML = `Verificado ${gen} com ${idade} anos.`
        res.appendChild(img)
        
        }
 }