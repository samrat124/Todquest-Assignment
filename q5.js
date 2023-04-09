let n=6;

for(let i=n;i>0;i--){
    let bag='';
    for(let j=0;j<i;j++){
        if(i==n||i==2||i==1){
            bag+='*';
        }
        else{
            if(j==0||j==i-1){
                bag+='*';
            }
            else{
                bag+=' ';
            }
        }
    }
    console.log(bag);
}