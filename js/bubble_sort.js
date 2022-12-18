//bubble sort function
async function bubble(){
    
    const bars = document.querySelectorAll(".bar"); //nodelist of bars

    //loop
    for(let i=0;i<bars.length;i++){

        for(let j=0;j<bars.length-i-1;j++){
            
            //highlighting the current pair of bars
            bars[j].style.background = 'red';
            bars[j+1].style.background = 'red';

            //swapping if left bar is longer than right
            if(parseInt(bars[j].style.height) > parseInt(bars[j+1].style.height)){
                await waitforme(delay); //delays the code below (giving speed effect)
                swap(bars[j],bars[j+1]); //swaps the height value of bars
            }

            //back to original bar color
            bars[j].style.background = '#ffddcc';
            bars[j+1].style.background = '#ffddcc';
        }

        //last element after every iteration is sorted, mark it green
        bars[bars.length-i-1].style.background = 'green';
    }
}

const bubbleSortButton = document.querySelector('.bubbleSort'); //target button
bubbleSortButton.addEventListener('click', async()=>{
    // disable every input , wait for sorting to happen, then enable it
    disableSortingButtons();
    disableSizeSlider(); //only speed slider is enabled during sorting
    disableNewArray();

    await bubble(); 

    enableSortingButtons();
    enableSizeSlider();
    enableNewArray();
});