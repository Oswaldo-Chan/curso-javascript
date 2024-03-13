const aprendiendo1 = function(tecnologia){
    console.log(`aprendiendo ${tecnologia}`);
}

aprendiendo1('javascript');

const aprendiendo2 = (tecnologia1, tecnologia2) => (`aprendiendo ${tecnologia1} y ${tecnologia2}`);
console.log(aprendiendo2('javascript', 'js'));

const aprendiendo3 = tecnologia => (`aprendiendo ${tecnologia}`);
console.log(aprendiendo3('javascript'));
