/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var values = {
        'I' :            1,
        'V' :            5,
        'X' :            10,
        'L' :            50,
        'C' :            100,
        'D' :            500,
        'M' :            1000
    }
    var ans = 0;
    for(var i = 0;i<s.length;i++){
        var a = s[i]
        var b = s[i+1]
        if(values[a]<values[b]){
            ans += values[b] - values[a]
            i++;
        }else{
            ans+=values[a]
        }
    }
    return ans;
};