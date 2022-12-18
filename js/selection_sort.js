async function selectionSort(){
    const bars = document.querySelectorAll(".bar"); 

    for(let i=0;i<bars.length;i++){
        
        bars[i].style.background = '#0033cc';//highlight current place (blue)

        let minBar = bars[i];
        for(let j=i+1;j<bars.length;j++){
            
            bars[j].style.background = 'red';
            await waitforme(delay);
            if(parseInt(bars[j].style.height) < parseInt(minBar.style.height)){
                
                if(minBar!= bars[i]) minBar.style.background = '#ffddcc';
                minBar = bars[j];
                continue;
            }

            bars[j].style.background = '#ffddcc';
        }

        await waitforme(delay);
        swap(bars[i],minBar);
        minBar.style.background = '#ffddcc';
        bars[i].style.background = 'green';//after replacing with min element
        
    }
    
}


const selectionSortButton = document.querySelector('.selectionSort');
selectionSortButton.addEventListener('click',async()=>{
    disableNewArray();
    disableSizeSlider();
    disableSortingButtons();

    await selectionSort();

    enableNewArray();
    enableSizeSlider();
    enableSortingButtons();
});