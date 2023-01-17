const alumni = [
{name:'Jarrit', job:'TPT',language:'JavaScript', age:23}, 
{name:'Stephanie', job:'JPMorgan',language:'JavaScript', age:24}, 
{name:'Devonte', job:'WW',language:'JavaScript', age:23}, 
{name:'Enmanuel', job:'Asana',language:'JavaScript', age:23},
{name:'Shemar', job:'SquareSpace',language:'JavaScript', age:23},
{name:'Cielo', job:'NYT',language:'JavaScript', age:22},
{name:'Carmen', job:'Marcy Lab School',language:'JavaScript', age:21},
{name:'Itzel', job:'Marcy Lab School',language:'JavaScript', age:22},
{name:'Ray', job:'Square Space',language:'JavaScript', age:21},
{name:'Jan', job:'Square Space',language:'JavaScript', age:22},
{name:'Uzma', job:'Thyme Care',language:'JavaScript', age:22}
];

const averageAge = array => {
    let sum = array.reduce((a, c) => a + c.age, 0);
    return Math.round(sum / array.length);
}

console.log(averageAge(alumni))

const orderedAlumni = array => array.sort((a, b) => b.age - a.age);

// console.log(orderedAlumni(alumni))

const allUseJavaScript = array => array.every(alum => alum.language === 'JavaScript');

console.log(allUseJavaScript(alumni));