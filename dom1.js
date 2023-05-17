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
document.getElementById('addImage').addEventListener('click',function(){
    const imageContainer = document.getElementById('mobiles');
    const addNewImage = document.createElement('div');

    addNewImage.innerHTML=`
    <div style="text-align:center" >
    <h1>This image from google</h1>
    <img style = " display: block; margin-left: auto; margin-right: auto;" src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1677571104137/afee365e27ec71ce13a2b6664ecde107.png" alt="">
    </div>
    `
    imageContainer.appendChild(addNewImage)
})
