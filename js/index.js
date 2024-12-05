var siteName=document.getElementById("siteName");
var siteURL=document.getElementById("siteURL");
var bookModel= document.getElementById("bookmodel")
var btnClose= document.getElementById("closeBtn")
var bookMarkList=[]




if(localStorage.getItem("listBook")){
    bookMarkList=JSON.parse(localStorage.getItem("listBook"))
}

function submit(){

    if(siteName.classList.contains("is-valid")&& siteURL.classList.contains("is-valid")){
        var bookMark={
            siteName: siteName.value,
            siteURL: siteURL.value
        }
        bookMarkList.push(bookMark)
        // console.log(bookMarkList);
        clear()
        displayData()
        localStorage.setItem("listBook",JSON.stringify(bookMarkList));
    }else{
        bookModel.classList.remove("d-none")
    }
    

    }
    
   
    

function clear(){
    siteName.value=null;
    siteURL.value=null
}


function displayData(){

var cartona="";
for(var i=0;i<bookMarkList.length;i++){
    cartona+=`<thead>
    <tr>
        <th class="text-capitalize">index</th>
        <th class="text-capitalize">websiteName</th>
        <th class="text-capitalize">Visit</th>
        <th class="text-capitalize">Delete</th>
    </tr>
</thead>

<tbody>

<tr>

<td>${i}</td>
<td>${bookMarkList[i].siteName}</td>
<td>
    <button class="btn btn-visit" onclick="visit(${i})">
        <i class="fa-solid fa-eye pe-2"></i>
        Visit
    </button>
</td>
<td>
    <button class="btn btn-delet" onclick="deletItem(${i})">
        <i class="fa-solid fa-trash-can"  ></i>
        Delete
    </button>
</td>
</tr>

</tbody>`
}

document.getElementById("table").innerHTML=cartona


}



function deletItem(index){
bookMarkList.splice(index,1);
localStorage.setItem("listBook",JSON.stringify(bookMarkList));
displayData()
}


var updateIndex=undefined;


function visit(index){
 updateIndex=index;   
 var httpsRegex = /^https?:\/\//;
 if(httpsRegex.test(bookMarkList[updateIndex].siteURL)){
    open(bookMarkList[updateIndex].siteName)
 }else{
    open(`https://${bookMarkList[updateIndex].siteURL}`);
 }

}





function validateInput(element){
var regex={
    siteName : /^\w{3,}(\s+\w+)*$/,
    siteURL: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
}

if(regex[element.id].test(element.value)==true){
  
    element.classList.add("is-valid")
    element.classList.remove("is-invalid")
    
}else{
    
    element.classList.add("is-invalid")
    element.classList.remove("is-valid")
    
}


}

function closeBtn(){
    bookModel.classList.add("d-none")
    console.log("hi");
    
}