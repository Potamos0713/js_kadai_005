let weight = 68;
console.log('入力された体重は' + weight + 'kgです。')

let height = 170;
console.log('入力された身長は' + height + 'cmです。')

let bmi = weight / ((height / 100) * (height / 100));
console.log('デバッグ：BMI = ' + bmi);

console.log('入力された体重と身長から導き出されたBMIは約' + ((Math.round(bmi * 10)) / 10) + 'です。');

// 10行目ではBMIを小数第一位まで表示するためMath.roundを利用しています。