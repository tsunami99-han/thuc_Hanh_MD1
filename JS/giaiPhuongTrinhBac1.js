function  giaiPhuongTrinhBac1(a,b){
    if(a==0){
        if(b==0){
            alert("Phương trình vô số nghiệm!");
        }else {
         alert("Phương trình vô nghiệm!");
        }
    }else {
        let x=-b/a;
        return x;
    };
};