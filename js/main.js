'use strict';
{
  // const targets = document.querySelectorAll('img');
  const targets=document.getElementsByClassName('content');
  // const target = document.getElementById("lessson");
  console.log(targets);
  //  console.log(targets);
  //  function callback(entries,obs){
  //    console.log(entries);
  //    entries.forEach(entry=>{
       
  //     if(!entry.isIntersecting){
  //       return;
  //     }
  //     entry.target.classList.add('appear');
  //     obs.unobserve(entry.target);
  //   });
  // }
  const options ={
    threshold:0.2,
  };
  // let options = {
  //   root: null,
  //   rootMargin: '0px',
  //   threshold: [0, 0.25, 0.5, 0.75, 1]
  // };
  function callback(entries){
    console.log(entries);
    let element;
    entries.forEach(entry=>{
      element=entry.targets;
    });
    if(element.isIntersecting){
      element.targets.classList.add('appear');
    }else{
      element.targets.classList.remove('appear');
    }
    
  }
  const observer = new IntersectionObserver(callback, options);
  // observer.observe(targets[0]);
  for (let i = 0; i < targets.length; i++) {
    // 同じインスタンスにターゲットとなる要素を渡す
    observer.observe(targets[i]);
  }
  // targets.forEach(target => {
  //   console.log(target);
  // });
}