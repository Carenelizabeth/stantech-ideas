function writeHeader(n){
    const dataText = ['water', 'spills', 'construction']
    let i = n
    if(i<dataText.length){
        typeWriter(dataText[i], 0)
        setTimeout(writeHeader.bind(null, i+1), 1500)
    }
}

function typeWriter(word, n){
    let i = n;
    if(i<word.length){
        let sliced = word.slice(0,i+1)
        let text = `<p>${sliced}</p>`
        $('.type-dynamic').html(text)
        setTimeout(typeWriter.bind(null, word, i+1), 100)
    }
    return;
}

function firstImage(){
    $('.image1').removeClass('hide')
    $('.image3').addClass('hide')
}

function secondImage(){
    $('.image2').removeClass('hide')
    $('.image1').addClass('hide')
}

function thirdImage(){
    $('.image3').removeClass('hide')
    $('.image2').addClass('hide')
}

function loopHeader(){
    writeHeader(0);
    firstImage();
    setTimeout(secondImage, 1500)
    setTimeout(thirdImage, 3000)
    setTimeout(loopHeader, 6000)
}


loopHeader(0)