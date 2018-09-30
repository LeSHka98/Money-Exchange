// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    var exchange = {};
    if(currency == 0){return exchange;}
    else if(currency > 10000)
    {
        exchange = {error:"You are rich, my friend! We don't have so much coins for exchange"};
        return exchange ;
    }
    else
    {
        var mas =[0,0,0,0,0],znach = [50,25,10,5,1];
        for(var i = 0; i <= 4; i++)
        {
            while(currency >= znach[i])
            {
                currency-=znach[i];
                mas[i]+=1;
            }
        }
        if(mas[0]>0)exchange.H = mas[0];
        if(mas[1]>0)exchange.Q = mas[1];
        if(mas[2]>0)exchange.D = mas[2];
        if(mas[3]>0)exchange.N = mas[3];
        if(mas[4]>0)exchange.P = mas[4];
      
        return exchange;
    }
}
