

inView('.section2')
  .on('enter', glasses => {
    const glass = document.getElementById("image1");
    glasses.glass.classList.add('in-viewport')
  })

