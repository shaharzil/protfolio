testCreateTodo();
testRemoveTodo();
testUpdateTodo();
testPrintTodos();
testPrintTodo();
// function printTodos() {
//     console.log('Here are your todos:');
//     for (var i = 0; i < gTodos.length; i++) {
//         var todo = gTodos[i];
//         printTodo(todo);
//     }
// }

function testUpdateTodo() {
    console.log('------- Tests for updateTodo ------ ');
    var val = 0

    var keepPrompt = prompt;
    prompt = function () { return val }
    updateTodo();


    console.assert(gTodos[val].isCompleted === true,
        'Expected is completed to be true', gTodos[val].isCompleted, gTodos);

    updateTodo();
    prompt = keepPrompt;
    console.assert(gTodos[val].isCompleted === false,
        'Expected is completed to be false', gTodos[val].isCompleted, gTodos);
}
function testRemoveTodo() {
    console.log('------- Tests for removeTodo ------ ');

    var val = 0;

    // Mocking
    var keepPrompt = prompt;
    prompt = function () { return val }
    removeTodo();
    prompt = keepPrompt;

    console.assert(gTodos.length === 1,
        'Expected a one less Todo in the todos', gTodos);

    console.assert(gTodos[1] === undefined,
        'Expected the old Todo in the todos to be', undefined, gTodos);

}


function testCreateTodo() {
    console.log('------- Tests for createTodo ------ ');
    var val = 'abc';
    var todo = createTodo(val);

    console.assert(todo.txt === 'abc',
        'Todo text not set correctly', todo);
    console.assert(todo.isCompleted === false,
        'Todo isCompleted not set correctly', todo);
}
function testCreateTodos() {
    console.log('------- Tests for createTodos ------ ');
    var todos = createTodos();

    console.assert(todos.length === 2,
        'Expected 2 todos', todos);
    console.assert(typeof todos[0].txt === 'string',
        'Expected todos in the arrasy', todos);

}
function testAddTodo() {
    console.log('------- Tests for addTodo ------ ');

    var val = 'NEW TODO';

    // Mocking
    var keepPrompt = prompt;
    prompt = function () { return val }
    addTodo();
    prompt = keepPrompt;

    console.assert(gTodos.length === 3,
        'Expected a new Todo in the todos', gTodos);

    console.assert(gTodos[2].txt === val,
        'Expected the new Todo in the todos to be', val, gTodos);
}
function testPrintTodo() {
    console.log('------- Tests for printTodo ------ ');
    var todo = { txt: 'Test', isCompleted: false }

    function mockConsoleLog(strTodo) {
        console.assert(strTodo[0] === 'v' && todo.isCompleted ||
            strTodo[0] === 'x' && !todo.isCompleted,
            'Expected valid output for printTodo', strTodo);
    }

    // Mocking
    var keepConsoleLog = console.log;
    console.log = mockConsoleLog;
    printTodo(todo);
    todo = { txt: 'Test', isCompleted: true };
    printTodo(todo);
    console.log = keepConsoleLog;

}


