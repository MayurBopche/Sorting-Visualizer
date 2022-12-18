async function partition(bars,l,r){
    for(let i=l;i<=r;i++){
        bars[i].style.background = 'yellow';
    }
    
    let i = l;
    let pivot = r;
    bars[r].style.background = 'red';

    for(let j=l;j<=r-1;j++){
        if(parseInt(bars[j].style.height) <= parseInt(bars[pivot].style.height)){
            await waitforme(delay);
            swap(bars[i],bars[j]);
            bars[i].style.background = 'orange';
            i++;
        }
    }
    
    swap(bars[i], bars[pivot]);
    bars[pivot].style.background = 'orange';
    return i;
}

async function quickSort(bars,l,r){
    if(l>=r) return;
    let q = await partition(bars,l,r);

    await quickSort(bars,l,q-1);
    await quickSort(bars,q-1,r);
    
    for(let i=l;i<=r;i++){
        await waitforme(delay);
        bars[i].style.background = 'green';
    }
}

const quickSortButton = document.querySelector('.quickSort');
quickSortButton.addEventListener('click',async()=>{
    disableNewArray();
    disableSizeSlider();
    disableSortingButtons();

    const bars = document.querySelectorAll('.bar');
    await quickSort(bars, 0, bars.length-1);

    enableNewArray();
    enableSizeSlider();
    enableSortingButtons();
});