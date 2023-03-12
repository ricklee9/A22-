//const content = document.querySelectorAll('.content')
//const title1 = document.querySelector('.title1')
//const title2 = document.querySelector('.title2')
//const title3 = document.querySelector('.title3')
//const title4 = document.querySelector('.title4')
//const btn1 = document.querySelector('.btn1')
//const btn2 = document.querySelector('.btn2')
//const btn3 = document.querySelector('.btn3')
//const btn4 = document.querySelector('.btn4')
//const btnControl = document.getElementById('btn-control')
//const btn = document.querySelectorAll('button')

//function btnclicked(e) {
//  if (e.target.matches('.btn1')) {
//    title1.style.display = 'block';
//    title2.style.display = 'none';
//    title3.style.display = 'none';
//    title4.style.display = 'none';
    //title2.classList.toggle('d-none')
    //title3.classList.toggle('d-none')
    //title4.classList.toggle('d-none')
//  } else if (e.target.matches('.btn2')) {
    //title2.style.display = 'block';
    //title1.style.display = 'none';
    //title3.style.display = 'none';
    //title4.style.display = 'none';
    //title1.classList.toggle('d-none')
    //title3.classList.toggle('d-none')
    //title4.classList.toggle('d-none')
//  } else if (e.target.matches('.btn3')) {
    //title3.style.display = 'block';
    //title1.style.display = 'none';
    //title2.style.display = 'none';
    //title4.style.display = 'none';
    //title1.classList.toggle('d-none')
    //title2.classList.toggle('d-none')
    //title4.classList.toggle('d-none')
//  } else if (e.target.matches('.btn4')) {
    //title1.classList.toggle('d-none')
    //title2.classList.toggle('d-none')
    //title3.classList.toggle('d-none')
    //title4.style.display = 'block';
    //title1.style.display = 'none';
    //title2.style.display = 'none';
    //title3.style.display = 'none';
//  }
//}

//btnControl.addEventListener('click', btnclicked)


const title1 = document.querySelector('.title1');
const title2 = document.querySelector('.title2');
const title3 = document.querySelector('.title3');
const title4 = document.querySelector('.title4');

// 選擇按鈕並綁定點擊事件
document.querySelector('.btn1').addEventListener('click', function () {
  event.preventDefault();
  // 顯示首頁內容，隱藏其他內容
  title1.classList.remove('d-none');
  title2.classList.add('d-none');
  title3.classList.add('d-none');
  title4.classList.add('d-none');

  // 更新網址為首頁路徑
  history.pushState(null, null, '/');
});

document.querySelector('.btn2').addEventListener('click', function () {
  event.preventDefault();
  // 顯示 About 內容，隱藏其他內容
  title1.classList.add('d-none');
  title2.classList.remove('d-none');
  title3.classList.add('d-none');
  title4.classList.add('d-none');

  // 更新網址為 About 路徑
  history.pushState(null, null, '/about');
});

document.querySelector('.btn3').addEventListener('click', function () {
  // 顯示 Portfolio 內容，隱藏其他內容
  title1.classList.add('d-none');
  title2.classList.add('d-none');
  title3.classList.remove('d-none');
  title4.classList.add('d-none');

  // 更新網址為 Portfolio 路徑
  history.pushState(null, null, '/portfolio');
});

document.querySelector('.btn4').addEventListener('click', function () {
  // 顯示 Contact 內容，隱藏其他內容
  title1.classList.add('d-none');
  title2.classList.add('d-none');
  title3.classList.add('d-none');
  title4.classList.remove('d-none');

  // 更新網址為 Contact 路徑
  history.pushState(null, null, '/contact');
});
