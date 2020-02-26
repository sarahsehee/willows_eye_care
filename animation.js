

inView('.section1')
  .on('enter', section => { 
    document.querySelector('.glass1').classList.add('show')
    document.querySelector('.glass2').classList.remove('show')
    document.querySelector('.glass3').classList.remove('show')
  })
  .on('exit', section => {
    document.querySelector('.glass1').classList.remove('show')
  });

  inView('.section2')
  .on('enter', section => { 
    document.querySelector('.glass2').classList.add('show')
    document.querySelector('.glass1').classList.remove('show')
    document.querySelector('.glass3').classList.remove('show')
  })
  .on('exit', section => {
    document.querySelector('.glass2').classList.remove('show')
  });


  inView('.section3')
  .on('enter', section => { 
    document.querySelector('.glass3').classList.add('show')
    document.querySelector('.glass1').classList.remove('show')
    document.querySelector('.glass2').classList.remove('show')
  })
  .on('exit', section => {
    document.querySelector('.glass3').classList.remove('show')
  });


  inView.threshold(0.1);
