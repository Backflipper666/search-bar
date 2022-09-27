const searchWrapper = document.querySelector('.search-input');
const inputBox = document.querySelector('input');
const suggBox = document.querySelector('.autocom-box');



let containerArray = []
let arr;
inputBox.onkeyup = (e) => {
    
    let userData = e.target.value;
    url3 = `https://api.github.com/search/repositories?q=${userData}`
    fetch(url3).then((res) => {
        if(res.ok){
            res.json().then((res) => {
                arr=res.items.name
                for(let i = 0; i < res.items.length; i++){
                    const current = res.items[i]
                    containerArray.push(current.name)
                }
                console.log('containerArray: ', containerArray)
                console.log('res.items: ',res.items)
                res.items.forEach((user) => {
                    console.log(user)
                })
            })
        }
    })

    let emptyArray = []
    if(userData){
        emptyArray = containerArray.filter((data) => {
            return data.toLocaleLowerCase().startsWith(userData.toLocaleLowerCase());
        })
        emptyArray = emptyArray.map((data) => {
            console.log('suggBox length',suggBox.children.length)
            return data = '<li>'+ data +'</li>';
        })
        console.log(emptyArray)
        searchWrapper.classList.add('active')
        
        // suggBox.children[0].classList.remove('active')
        
        showSuggestions(emptyArray);
        let allList = suggBox.querySelectorAll('li');
        for(let i = 0; i < allList.length; i++){
            allList[i].setAttribute("onclick", "select(this)")
        }
        for(let i = 5; i < allList.length; i++){
            allList[i].setAttribute('style', 'display:none;visibility:hidden;')
        }
    }else {
        searchWrapper.classList.remove('active');
        
    }
}

function select(element){
    let selectUserData = element.textContent;
    inputBox.value = selectUserData;
    searchWrapper.classList.remove('active');

}

function showSuggestions(list){
    let listData;
    if(!list.length){
       
        userValue = inputBox.value;
        listData = '<li>'+userValue+'</li>';
        
    }else{
        listData = list.join('')
    }
    suggBox.innerHTML = listData;
}
