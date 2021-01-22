// 01.kilometerToMeter
function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    return meter;
}
// 02.budgetcalculator
function budgetcalculator(watN, mobiN, lapN){
    var watprice = watN * 50;
    var mobiprice = mobiN * 100;
    var lapprice = lapN * 500;
    var total = watprice + mobiprice + lapprice;
    return total;
}
// 03.hotelCost
function hotelCost(day){
    if(day <= 10){
        var taka = day * 100;
    }
    else if(day <= 20){
        var  fistslap = 10 * 100;
        var remaing = day - 10;
        var secondslap = remaing * 80;
        var  taka = fistslap + secondslap;
    }
    else{
        var remaing = day - 20;
        var thirdslap = remaing * 50;
        var  fistslap = 10 * 100;
        var secondslap = 10 * 80;
        var taka = fistslap + secondslap + thirdslap;
    }
    return taka;
}
// 04.megaFriend
function megaFriend(bigfriend) {
    var friend = "";
  
    bigfriend.forEach(function(word) {
      if(word.length > friend.length) {
        friend = word;
      }
    });
  
    return friend;
  }