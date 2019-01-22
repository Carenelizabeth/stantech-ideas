function loopHeader(){
    setInterval(advanceType('type3', 'type1'), 4000);
}

function advanceType(last, current){
    console.log(last)
    console.log(current)
    $(`.${last}`).removeClass('type').addClass('hide');
    $(`.${current}`).addClass('type').removeClass('hide');
}

loopHeader()