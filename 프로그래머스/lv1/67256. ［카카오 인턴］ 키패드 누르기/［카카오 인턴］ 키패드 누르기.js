function solution(numbers, hand) {
    let result = "";
    const numLength = numbers.length;
    let leftLoc = 10, rightLoc = 12;
    let num;
    
    for (let i = 0; i < numLength; i++) {
        if (numbers[i] === 0) num = 11;
        else num = numbers[i];
        
        result += getHand(num, leftLoc, rightLoc, hand);
        
        if (result[i] === "L") leftLoc = num;
        else rightLoc = num;
    }
    
    return result;
}

function getHand(num, leftLoc, rightLoc, hand) {
    let nowHand;
    
    if (num === 1 || num === 4 || num === 7) {
        nowHand = "L";
    } else if (num === 3 || num === 6 || num === 9) {
        nowHand = "R";
    } else {
        const leftDistance = getDistance(num, leftLoc);
        const rightDistance = getDistance(num, rightLoc);

        if (leftDistance === rightDistance) {
            nowHand = hand[0].toUpperCase();
        } else if (leftDistance < rightDistance) {
            nowHand = "L";
        } else {
            nowHand = "R";
        }
    }
    
    return nowHand;
}

// *은 10, 0은 11, #은 12로 계산
function getDistance(num1, num2) {
    const coord = [null, // 인덱스 0은 비우기
                   [0, 0], [1, 0], [2, 0],
                   [0, 1], [1, 1], [2, 1],
                   [0, 2], [1, 2], [2, 2],
                   [0, 3], [1, 3], [2, 3]];
    const X = 0, Y = 1;
    const distance = Math.abs(coord[num1][X] - coord[num2][X])
                    + Math.abs(coord[num1][Y] - coord[num2][Y]);
    
    return distance;
}