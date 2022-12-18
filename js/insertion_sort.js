async function insertionSort(){
    const bars = document.querySelectorAll('.bar');

    for(let i=0;i<bars.length;i++){
        bars[i].style.background = '#0033cc';
        let j = i;
        
        while(j>0 && parseInt(bars[j].style.height)<parseInt(bars[j-1].style.height)){
            if(j!=i) bars[j].style.background = 'red';
            await waitforme(delay);
            swap(bars[j],bars[j-1]);
            if(j!=i) bars[j].style.background = 'green'
            j--;
        }

        bars[i].style.background = 'green';
    }
}


const insertionSortButton = document.querySelector('.insertionSort');
insertionSortButton.addEventListener('click',async()=>{
    disableNewArray();
    disableSizeSlider();
    disableSortingButtons();

    await insertionSort();

    enableNewArray();
    enableSizeSlider();
    enableSortingButtons();
});