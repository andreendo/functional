let obj = {
    pNome: "Joao",
    sNome: "Silva",
    score: 78,
    completion: true,
    questions: {
        q1: { success: true, value: 1 },
        q2: { success: false, value: 1 }
    }
};

let obj2 = Object.assign({}, obj);
obj2.score = 99;
obj2.questions.q1.value = 5;
// problem here: deep clone will fail as the object properties are copied by reference
console.log(obj);
console.log(obj2);



let obj3 = JSON.parse(JSON.stringify(obj));