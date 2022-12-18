async function merge(bars,l,m,r){
    let temp = new Array(r-l+1);
    let k = 0;
    let i = l;
    let j = m+1;

    for(let x=l;x<=m;x++) { 
        await waitforme(delay); 
        bars[x].style.background = 'yellow';
    }
    for(let x=m+1;x<=r;x++) { 
        await waitforme(delay);
        bars[x].style.background = 'orange';
    } // two halves to be merged, highlighted in yellow and orange

    //merge algorithm
    while(i<=m && j<=r){
        if( parseInt(bars[i].style.height) <= parseInt(bars[j].style.height) ){
            temp[k] = bars[i].style.height;
            k++;
            i++;
        }
        else{
            temp[k] = bars[j].style.height;
            k++;
            j++;
        }
    }
    while(i<=m){
        temp[k] = bars[i].style.height;
        k++;
        i++;
    }
    while(j<=r){
        temp[k] = bars[j].style.height;
        k++;
        j++;
    }

    //mark it sorted
    k = 0;
    for(let x=l;x<=r;x++){
        bars[x].style.height = temp[k];
        
        await waitforme(delay);
        await waitforme(delay);

        if(l==0 && r==bars.length-1){
            bars[x].style.background = 'green';
        }
        else{
           bars[x].style.background = '#80ff80'; 
        } 

        k++;
    }
} //merge algo

async function mergeSort(bars, l, r){
    if(l>=r) return;

    let m = Math.floor((l+r)/2);
    await mergeSort(bars,l,m);
    await mergeSort(bars,m+1,r);
    await merge(bars,l,m,r);
}  //recursion  


const mergeSortButton = document.querySelector('.mergeSort');
mergeSortButton.addEventListener('click', async()=>{
    disableNewArray();
    disableSizeSlider();
    disableSortingButtons();

    const bars = document.querySelectorAll('.bar');
    await mergeSort(bars, 0, bars.length-1);

    enableNewArray();
    enableSizeSlider();
    enableSortingButtons();
});