var hours = ["9AM", "10AM", "11AM", "12PM", "1PM", "2PM", "3PM", "4PM", "5PM"];

function makeTimeBlocks(hour, existingTodo = "") {
    console.log("i ran")
    var currentHour = new Date().getHours();
    var presentPastOrFuture = "future";
    if (currentHour > hour + 9) presentPastOrFuture = "past";
    if (currentHour === hour + 9) presentPastOrFuture = "present";
    var hourName = hours[hour];
    var existingTodo = localStorage.getItem(hourName);
    // console.log("SAVED TODO for ", hourName, existingTodo);
    $(".container").append(
        $(`
        <div class="row time-block">
             <div class="hour col-1">${hourName}</div>
             <textarea name="" id="${hourName}" cols="30" rows="3" class="desription col-9 ${presentPastOrFuture}">${existingTodo || ""}
             </textarea>
            <button class="btn saveBtn col-2">Save</button> 
        </div>`)
    );
}


for (var i = 0; i < 9; i = i + 1) {
    makeTimeBlocks(i);
}

// add click event listeners 
var btns = document.querySelectorAll(".saveBtn");
// console.log(btns[0]);

for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", functionToHandleClickOnSaveBtn);
}

function functionToHandleClickOnSaveBtn(event) {
    var todoValue = event.target.parentNode.children[1].value;
    var todoKey = event.target.parentNode.children[1].id;

    // console.log("key values ", todoKey, todoValue);
    localStorage.setItem(todoKey, todoValue);
}


// function add(num1, num2){
//     var total = num1 + num1
//     return total
// } 
// console.log(add(5 , 2000))