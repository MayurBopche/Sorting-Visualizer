// disable all inputs

    // a. disable all sort buttons during sorting 
    //  (to restrict use of another algo in between)
    function disableSortingButtons(){
        document.querySelector('.bubbleSort').disabled = true;
        document.querySelector('.selectionSort').disabled = true;
        document.querySelector('.insertionSort').disabled = true;
        document.querySelector('.quickSort').disabled = true;
        document.querySelector('.mergeSort').disabled = true;
    }

    // b. disable new array button
    function disableNewArray(){
        document.querySelector('.newArray').disabled = true;
    }

    // c. disable array size slider
    function disableSizeSlider(){
        document.querySelector('#arr_size').disabled = true;
    }

// enable all inputs

    // a. enable all sort buttons after sorting
    function enableSortingButtons(){
        document.querySelector('.bubbleSort').disabled = false;
        document.querySelector('.selectionSort').disabled = false;
        document.querySelector('.insertionSort').disabled = false;
        document.querySelector('.quickSort').disabled = false;
        document.querySelector('.mergeSort').disabled = false;
    }

    // b. enable new array button
    function enableNewArray(){
        document.querySelector('.newArray').disabled = false;
    }

    // c. enable array size slider
    function enableSizeSlider(){
        document.querySelector('#arr_size').disabled = false;
    }

//utility function to swap bars height
function swap(x,y){
    [x.style.height, y.style.height] = [y.style.height, x.style.height];
}

//utility function to delay swaps (to give speed effect)
function waitforme(delay){
    return new Promise(resolve => {
        setTimeout(() => {resolve('')},delay);
    })
}

//handling speed slider, getting the delay from slider input
    let delay = 260;
    let speedSlider = document.querySelector('#speed_input');
    speedSlider.addEventListener('input', ()=>{
        delay = 320 - parseInt(speedSlider.value);
    })

// creating a new random array of bars

    //function to create new bars
    function createNewArray(arr_size=60){
        const bars = document.querySelector('#bars'); //container
        bars.innerHTML = ''; //deletes the previous bars
        array = [];

        for(let i=0;i<arr_size;i++){
            array.push(Math.floor(Math.random()*500+1));//gives random height values (between 1 to 501)

            //create a bar  
            const bar = document.createElement('div');
            // style the bar
            bar.style.height = String(array[i]) + "px";
            bar.classList.add('bar');
            bar.classList.add('flex-item'); 
            bar.classList.add('barNo'+String(i));
            //add it inside container
            bars.appendChild(bar);
        }
    }

    //creating array for default case (eg. when the page loads)
    let array = [];
    createNewArray();

    //creating array of size decided by size input   
    const sizeSlider = document.querySelector('#arr_size');
    sizeSlider.addEventListener('input', ()=>{
        createNewArray(parseInt(sizeSlider.value));
    });

    //add event listener to newArray button
    const newArray = document.querySelector('.newArray');
    newArray.addEventListener('click',()=>{
        createNewArray(parseInt(sizeSlider.value));
    });

