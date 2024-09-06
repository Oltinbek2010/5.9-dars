const intervalId = setInterval(() => {
    console.log('Bu xabar har 2 soniyada chiqariladi.');
  }, 2000);
  
  // Intervalni to'xtatish uchun
  setTimeout(() => {
    clearInterval(intervalId);
    console.log('Interval to\'xtatildi.');
  }, 10000); // 10 soniyadan so'ng interval to'xtatiladi
  