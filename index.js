document.addEventListener('DOMContentLoaded', () => {
  const DIV_IS_NOT_DIV_IS_DIV = 'div[is]:not(div[is="div"])';
  let els = document.querySelectorAll(DIV_IS_NOT_DIV_IS_DIV);
  do {
    swapDivs(els);
    els = document.querySelectorAll(DIV_IS_NOT_DIV_IS_DIV);
  } while (els.length > 0);
});

const swapDivs = (els) => {
  console.log('Bye bye divs! 🎉');
  els.forEach(el => {
    try {
      const newEl = document.createElement(el.getAttribute('is'));
      [...el.attributes].forEach(at => newEl.setAttribute(at.name, at.value));
      newEl.innerHTML = el.innerHTML;
      el.replaceWith(newEl);
    } catch (error) {
      console.error(`Cannot convert element: ${el.outerHTML}`);
    }
  })
}
