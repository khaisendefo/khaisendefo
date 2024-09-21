// import js library
import Inputmask from 'inputmask';

export const customSelect = () => {
  var x, i, j, l, ll, selElmnt, a, b, c;
  x = document.getElementsByClassName('custom-select');
  l = x.length;
  for (i = 0; i < l; i++) {
    selElmnt = x[i].getElementsByTagName('select')[0];
    ll = selElmnt.length;
    a = document.createElement('DIV');
    a.setAttribute('class', 'select-selected');
    a.innerHTML = selElmnt.options[selElmnt.selectedIndex].innerHTML;
    x[i].appendChild(a);
    b = document.createElement('DIV');
    b.setAttribute('class', 'select-items select-hide');
    for (j = 1; j < ll; j++) {
      c = document.createElement('DIV');
      c.innerHTML = selElmnt.options[j].innerHTML;
      c.addEventListener('click', function (e) {
        var y, i, k, s, h, sl, yl;
        s = this.parentNode.parentNode.getElementsByTagName('select')[0];
        sl = s.length;
        h = this.parentNode.previousSibling;
        for (i = 0; i < sl; i++) {
          if (s.options[i].innerHTML == this.innerHTML) {
            s.selectedIndex = i;
            h.innerHTML = this.innerHTML;
            y = this.parentNode.getElementsByClassName('same-as-selected');
            yl = y.length;
            for (k = 0; k < yl; k++) {
              y[k].removeAttribute('class');
            }
            this.setAttribute('class', 'same-as-selected');
            break;
          }
        }
        h.click();
      });
      b.appendChild(c);
    }
    x[i].appendChild(b);
    a.addEventListener('click', function (e) {
      e.stopPropagation();
      closeAllSelect(this);
      this.nextSibling.classList.toggle('select-hide');
      this.classList.toggle('select-arrow-active');
    });
  }
  
  function closeAllSelect(elmnt) {
    var x,
      y,
      i,
      xl,
      yl,
      arrNo = [];
    x = document.getElementsByClassName('select-items');
    y = document.getElementsByClassName('select-selected');
    xl = x.length;
    yl = y.length;
    for (i = 0; i < yl; i++) {
      if (elmnt == y[i]) {
        arrNo.push(i);
      } else {
        y[i].classList.remove('select-arrow-active');
      }
    }
    for (i = 0; i < xl; i++) {
      if (arrNo.indexOf(i) === -1) { // Исправлено условие
        x[i].classList.add('select-hide');
      }
    }
  }
  document.addEventListener('click', closeAllSelect);
};

export const mainForm = () => {
  let inputs = document.querySelectorAll('input[type="tel"]');
  let im = new Inputmask('+7(999) 999-99-99');
  im.mask(inputs);

  document.querySelector('.input-name').addEventListener('input', function () {
    this.value = this.value.charAt(0).toUpperCase() + this.value.slice(1);
  });

  document.querySelector('.form-reset').addEventListener('click', function () {
    let customSelects = document.querySelectorAll('.custom-select select');
    customSelects.forEach((select) => {
      select.selectedIndex = 0;
      let selectedDiv = select.parentElement.querySelector('.select-selected');
      selectedDiv.innerHTML = select.options[0].innerHTML; 
    });
  });

  var forms = document.querySelectorAll('.form');
  forms.forEach(function(form) {
    form.addEventListener("submit", function(event) {
      event.preventDefault();
      var formData = new FormData(this);
      fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      })
      .then(response => {
        if (!response.ok) {
          throw new Error("Ошибка отправки данных: " + response.status);
        }
        return response.json();
      })
      .then(data => {
        document.querySelector('.modal__window').classList.remove('active');
        document.querySelector('.modal__thanks').style.display = 'block';

        alert("Данные успешно отправлены!");
        console.log(data);
        this.reset();
      })
      
      .catch(error => {
        alert("Ошибка отправки данных: " + error.message);
        console.error(error);
      });
    });
  });
};

