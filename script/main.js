document.getElementById('btn').onclick = function(){
    let str = document.getElementById('str').value;

    let step1 = str.split('');
    let step2 = step1.reverse();
    let step3 = step2.join('');

    document.getElementById('res').innerHTML = step3 ;
}