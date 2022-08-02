const service1 = document.getElementById("service1");
const service2 = document.getElementById("service2");
const service3 = document.getElementById("service3");
const details1 = document.getElementById("details1");
const details2 = document.getElementById("details2");
const details3 = document.getElementById("details3");
const details4 = document.getElementById("details4");
const details5 = document.getElementById("details5");
const details6 = document.getElementById("details6");
const details7 = document.getElementById("details7");
const details8 = document.getElementById("details8");
const details9 = document.getElementById("details9");
 //document.getElementById("block1").style.display = "none";


 function displayBlock(start,end){
    for(let i=start;i<=end;i++){
    let value=`block${i}`;
    document.getElementById(value).style.display = "none";
    }
    }
    function displayShow(start,end){
        for(let i=start;i<=end;i++){
            let value=`block${i}`;
            document.getElementById(value).style.display = "block";
        }
        }

        function blockImage(start,end){
            for(let i=start;i<=end;i++){
            let value=`image${i}`;
            document.getElementById(value).style.display = "none";
            }
            }
            function showImage(start,end){
                for(let i=start;i<=end;i++){
                    let value=`image${i}`;
                    document.getElementById(value).style.display = "block";
                }
                }

        displayBlock(4,9);
        displayShow(1,3);
        blockImage(4,27);
        showImage(1,3);

service1.addEventListener("click", () => {
	// document.getElementById("block1").style.display = "block";
    displayBlock(4,9);
    displayShow(1,3);
    blockImage(4,27);
    showImage(1,3);
});


service2.addEventListener("click", () => {
	displayBlock(1,3);
    displayBlock(7,9);
    displayShow(4,6);
    blockImage(1,9);
    blockImage(13,27);
    showImage(10,12);
});


service3.addEventListener("click", () => {
    displayBlock(1,6);
    //displayBlock(7,9);
    displayShow(7,9);
    blockImage(1,18);
    blockImage(22,27);
    showImage(19,21);
});


details1.addEventListener("click", () => {
    blockImage(4,27);
    showImage(1,3);
});

details2.addEventListener("click", () => {
    blockImage(1,3);
    blockImage(7,27);
    showImage(4,6);
});
details3.addEventListener("click", () => {
	blockImage(1,6);
    blockImage(10,27);
    showImage(7,9);
});
details4.addEventListener("click", () => {
	blockImage(1,9);
    blockImage(13,27);
    showImage(10,12);
});
details5.addEventListener("click", () => {
	blockImage(1,12);
    blockImage(16,27);
    showImage(13,15);
});
details6.addEventListener("click", () => {
	blockImage(1,15);
    blockImage(19,27);
    showImage(16,18);
});
details7.addEventListener("click", () => {
	blockImage(1,18);
    blockImage(22,27);
    showImage(19,21);
});
details8.addEventListener("click", () => {
	blockImage(1,21);
    blockImage(24,27);
    showImage(22,24);
});
details9.addEventListener("click", () => {
	blockImage(1,24);
    showImage(25,27);
});





//document.getElementById("service1").innerHTML = "hello world";