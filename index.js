
var twoSum = function(nums, target) {
    let result = []
     nums.map(num=>{
        console.log('1')
        nums.forEach((fNum, index)=>{
            // if(nums.indexOf(num) == nums.indexOf(fNum))
            // return;


            if(num + nums[index] === target){
                    result.push(num);
                    result.push(fNum)
                    target = 0;
            }
        })
    })

    return [nums.indexOf(result[0]), nums.indexOf(result[1])]
    
};

console.log(twoSum([3,3,3], 6));