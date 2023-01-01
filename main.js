let userName = localStorage.getItem('userName');

if (userName) {
    let start = document.getElementById('start');
    start.style.display = 'block';
    document.querySelector('h1').innerText = `Welcome ${userName}`
}
else{
    window.location.href = "./pages/register/index.html";
}