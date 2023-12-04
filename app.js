const Tosh = document.querySelector('.tosh')
const Qaychi = document.querySelector('.qaychi')
const Qogoz = document.querySelector('.qogoz')
const Result = document.querySelector('.result')
const Compyuter = document.querySelector('.compyuter')

let data = [
    {
        tosh:"./img/tosh.png"
    },
    {
        qaychi:"./img/Qaychi.png"
    },
    {
        qogoz:`./img/Qogoz.png`
    },
]

Tosh.addEventListener("click", () => {
    let random = Math.round(Math.random() * (data.length - 1))
    if (data[random].tosh) {
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/tosh.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].tosh}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>Draw</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].tosh}" alt=""></span>
        `
    } else if (data[random].qaychi) {
        console.log(data[random].tosh);
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/tosh.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].qaychi}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>You Win</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].qaychi}" alt=""></span>
        `
    } else {
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/tosh.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].qogoz}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>Game Over</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].qogoz}" alt=""></span>
        `
    }
})
Qaychi.addEventListener("click", () => {
    let random = Math.round(Math.random() * (data.length - 1))
    if (data[random].tosh) {
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/Qaychi.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].tosh}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>Game Over</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].tosh}" alt=""></span>
        `
    } else if (data[random].qaychi) {
        console.log(data[random].tosh);
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/Qaychi.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].qaychi}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>Draw</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].qaychi}" alt=""></span>
        `
    } else {
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/Qaychi.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].qogoz}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>You Win☺</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].qogoz}" alt=""></span>
        `
    }
})
Qogoz.addEventListener("click", () => {
    let random = Math.round(Math.random() * (data.length - 1))
    if (data[random].tosh) {
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/Qogoz.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].tosh}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>You Win</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].tosh}" alt=""></span>
        `
    } else if (data[random].qaychi) {
        console.log(data[random].tosh);
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/Qogoz.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].qaychi}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>Game Ower</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].qaychi}" alt=""></span>
        `
    } else {
        Result.innerHTML = `
     <div class="top">
                <span><img src="./img/Qogoz.png" alt=""></span>
                <h1 style="font-family: sans-serif; text-shadow: 0 0 5px #fff;">VS</h1>
                <span><img src="${data[random].qogoz}" alt=""></span>
               </div>
               <div class="bottom">
                <h1>Draw</h1>
               </div>
    `
        Compyuter.innerHTML = `
        <span><img src="${data[random].qogoz}" alt=""></span>
        `
    }
})