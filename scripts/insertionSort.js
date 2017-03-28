// const insertionSort = array => {
//
// }

const insert = (array, rightIndex, value) => {
    for(var j = rightIndex; j >= 0 && array[j] > value; j--) {
        array[j + 1] = array[j];
    }
    array[j + 1] = value;
    return array;
};


////insertionSort hint////
for(var blue  = 1; blue  < ; ) {
    insert(, , );
}







export default insert
