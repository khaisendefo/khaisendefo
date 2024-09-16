export const accordionSidebar = () => {
  document.addEventListener('DOMContentLoaded', function () {
    var accordionRows = document.querySelectorAll('.sidebar-menu__row');
    accordionRows.forEach(function (row) {
      row.addEventListener('click', function () {
        accordionRows.forEach(function (otherRow) {
          if (otherRow !== row) {
            var otherHiddenContent = otherRow.nextElementSibling;
            var otherArrowIcon = otherRow.querySelector(
              '.sidebar-menu__row-arrow',
            );
            if (otherHiddenContent.classList.contains('active')) {
              otherHiddenContent.classList.remove('active');
              otherHiddenContent.style.maxHeight = '0';
              if (otherArrowIcon.classList.contains('active')) {
                otherArrowIcon.classList.remove('active');
              }
              if (otherRow.classList.contains('active')) {
                otherRow.classList.remove('active');
              }
            }
          }
        });
        var hiddenContent = this.nextElementSibling;
        var arrowIcon = this.querySelector('.sidebar-menu__row-arrow');
        if (hiddenContent.classList.contains('active')) {
          hiddenContent.classList.remove('active');
          hiddenContent.style.maxHeight = '0';
        } else {
          hiddenContent.classList.add('active');
          hiddenContent.style.maxHeight = hiddenContent.scrollHeight + 'px';
        }
        if (arrowIcon.classList.contains('active')) {
          arrowIcon.classList.remove('active');
        } else {
          arrowIcon.classList.add('active');
        }
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          this.classList.add('active');
        }
      });
    });
  });
}
