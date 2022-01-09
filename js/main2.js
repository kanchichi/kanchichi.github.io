'use strict';
{
  // const options ={
  //   root: document.querySelector('.root'),
  //   rootMargin:'100px',
  //    threshold:0.2,
  //  };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => console.log(entry));
  });
  
  // 監視したい要素をobserve
  observer.observe(document.querySelector('.content'));
 
 

  const callback = (entries,obs) => {
    entries.forEach((entry) => {
      console.log({ entry });
      if (!entry.isIntersecting) {
      return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });
  };
  const option = {
    // rootMargin: "-100px",
    threshold:0.2,
  };
  const io = new IntersectionObserver(callback, option);
// //監視したい複数要素をターゲットにした
const targets = document.querySelectorAll(".content");
console.log({ targets });
targets.forEach((target) => {
//監視したい対象をobserve
  io.observe(target);
});
}