let name = "Edwin Gustavo Ramírez navaz";
var  app = document.querySelector("#app");
let button = document.querySelector('#button');
let title = document.querySelector('#title');

button.addEventListener('click', function() {
    title.classList.toggle('active');
});

let team = [
    {name : 'Edwin', experience: 20},
    {name : 'Luis', experience: 6},
    {name : 'Pablo', experience: 3},
    {name : 'Ivan', experience: 5},
    {name : 'Bryan', experience: 8},
];

Array.prototype.max = function() {
    return Math.max(...this);
};

let max = team.map( member => member.experience);
//console.log(max.max());

function countDown(id) {
    countDown = document.getElementById(id);
    let count = countDown.textContent;
    setInterval(() => {
        if (count != 0) {
            count--;
            countDown.innerHTML = count;
        }
    }, 1000);
}

countDown('seconds');

/*let promedio = team.map(member => member.experience).reduce( (prev, current, index, array ) => {
    let total  = prev + current;
    return index == array.length - 1 ? total / array.length : total;
});*/

//console.log(promedio);
