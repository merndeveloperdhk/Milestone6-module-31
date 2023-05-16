document.getElementById('back-color').addEventListener('click', function(){
    const mobiles = document.getElementsByClassName('mobile');
    for(const mobile of mobiles){
        mobile.style.backgroundColor = 'green'
    }
})
document.getElementById('center').addEventListener('click', function(){
    const centerPlace = document.getElementById('third-center');
    centerPlace.style.textAlign = 'center'
})
document.getElementById('addNew').addEventListener('click',function(){
    const mobileContainer = document.getElementById('mobiles')
    const addNewMobile = document.createElement('div');
    addNewMobile.classList.add('mobile')
    addNewMobile.innerHTML =`
    <h3 class="mobielName">Mobile name -6</h3>
    <p>Itaque asperiores cumque amet deserunt.</p>
    `;
    mobileContainer.appendChild(addNewMobile)
})