document.getElementById('apply-bg').addEventListener('click', function () {
    const friends = document.getElementsByClassName('friend')
    for (const friend of friends) {
        friend.style.backgroundColor = 'green'
    }
})
document.getElementById('center-third').addEventListener('click', function () {
    const thirdFriend = document.getElementById('third-friend');
    thirdFriend.style.textAlign = 'center'
})

document.getElementById('right').addEventListener('click', function () {
    const fifthRight = document.getElementById('fifth-friend');
    fifthRight.style.textAlign = 'right';
    fifthRight.style.paddingRight = '100px'
})

document.getElementById('add-new-friend').addEventListener('click', function () {
    const friendContainer = document.getElementById('friends');
    const friend = document.createElement('div');
   friend.classList.add('friend')
    friend.innerHTML = `
    <h3 class="friend-name">Friend -6</h3>
    <p>Expedita magnam dolore quisquam explicabo.</p>
    `
    friendContainer.appendChild(friend)
})