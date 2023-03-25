// write an algorithm such that if an element in an NxN matrix is 0,
// it's entire row and column are set to 0


    //      4   1   3               4   1   0
    // [    2  -4   0   ]  -->  [   0   0   0   ]
    //      5   9   2               5   9   0



    //      5   2   0               0   0   0
    // [    9   0   1   ]  -->  [   0   0   0   ]
    //      2   9   3               2   0   0    

const _matrix = [[4,   1,   3 ],[2,  -4,   0],[5,   9,   2]];

const zeroMatrix = (matrix, n) => {
    for(let r=0; r<n; r++) {

        for(let c=0; c<n; c++){
            if(matrix[r][c]===0) matrix[r][c]=true;
        }
    }

    for (let r = 0; r < n; r++) {
        for(let c = 0; c < n; c++) {
            if(matrix[r][c]===true){
                // zero row
                for (let i = 0; i < n; i++) {
                    matrix[r][i] = 0;

                for (let i = 0; i < n; i++) {
                    matrix[i][c] = 0;
                    
                }
                    
                }
            }
        }
        
    }
    return matrix
}

console.log(zeroMatrix(_matrix, 3))