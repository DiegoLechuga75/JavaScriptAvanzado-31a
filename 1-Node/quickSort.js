function Partition (array, low, high) {

    let pivot = array[high];
    let i = low - 1;

    for(let j = low; j < high; j++){
        if (array[j] <= pivot) {
            
            i++

            let aux = array[i];
            array[i] = array[j];
            array[j] = aux;
        }
    }

    let aux = array[i + 1];
    array[i + 1] = array[high];
    array[high] = aux;

    return (i + 1);
}

function QuickSort (array, low, high) {
    if(low < high) {
        let pi = Partition(array, low, high);

        QuickSort(array, low, pi - 1);

        QuickSort(array, pi + 1, high);
    }
}

let array = [8,7,2,1,0,9,6];

console.log(`Arrelgo no ordenado: ${array}`);

let sizeArray = array.length;

QuickSort(array, 0, sizeArray - 1);

console.log(`Arreglo ordenado: ${array}`);
