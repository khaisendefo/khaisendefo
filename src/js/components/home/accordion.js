export function useAccordion() {
  document.addEventListener('DOMContentLoaded', function () {
    const accordionRows = document.querySelectorAll('.questions__accordion');

    accordionRows.forEach((row) => {
      row.addEventListener('click', function () {
        // Закрываем все другие строки аккордеона
        accordionRows.forEach((otherRow) => {
          if (otherRow !== row) {
            closeAccordionRow(otherRow);
          }
        });

        // Открываем/закрываем текущую строку аккордеона
        toggleAccordionRow(row);
      });
    });

    function closeAccordionRow(row) {
      const hiddenContent = row.querySelector('.questions__accordion-content');
      const arrowIcon = row.querySelector('.questions__accordion-arrow');
      
      if (hiddenContent && hiddenContent.classList.contains('active')) {
        hiddenContent.classList.remove('active');
        hiddenContent.style.maxHeight = '0';
        arrowIcon.classList.remove('active');
        row.classList.remove('active');
      }
    }

    function toggleAccordionRow(row) {
      const hiddenContent = row.querySelector('.questions__accordion-content');
      const arrowIcon = row.querySelector('.questions__accordion-arrow');
      
      if (hiddenContent.classList.contains('active')) {
        hiddenContent.classList.remove('active');
        hiddenContent.style.maxHeight = '0';
      } else {
        hiddenContent.classList.add('active');
        hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
      }

      arrowIcon.classList.toggle('active');
      row.classList.toggle('active');
    }
  });
}
