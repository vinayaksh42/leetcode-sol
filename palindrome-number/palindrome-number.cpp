class Solution {
public:
    bool isPalindrome(int x) {
        stringstream ss;  
        ss<<x;  
        string s;  
        ss>>s;  
        for(int i=0;i<(s.size()/2);i++){
            if(s[i]==s[s.size()-i-1]){
                continue;
            }else {
                return false;
            }
        }
        return true;
    }
};