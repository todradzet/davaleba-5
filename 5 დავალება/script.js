let temperature = 25;

 console.log(temperature === 0)

if (temperature < 0) {
    console.log('ყინავს!')
}else if (temperature >= 0 && temperature <= 11) {
    console.log('ძალიან ცივა');

}else if (temperature >= 10 && temperature <= 21){
    console.log('ცივა');
}else if (temperature >= 21 && temperature <= 31){
    console.log('თბილა');
}else if (temperature > 30) {
    console.log('ცხელა!');

}
