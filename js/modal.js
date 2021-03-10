(() => {
    const refs = {
      openModalBtn: document.querySelector('[data-modal-open]'),
      closeModalBtn: document.querySelector('[data-modal-close]'),
      modal: document.querySelector('[data-modal]'),
    };
  
    if (refs.openModalBtn && refs.closeModalBtn) {
      refs.openModalBtn.addEventListener('click', toggleModal);
      refs.closeModalBtn.addEventListener('click', toggleModal);
    }
  
    function toggleModal() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();

  $(function () {
    $('#nav-mobile-btn').click(function () {
      if ($(this).attr('data-status') == 'off') {
        $('.nav-mobile').fadeIn();
        $('body, html').css('overflow-y','hidden');
        $(this).attr('data-status', "on");
      } else {
        $('.nav-mobile').fadeOut();
        $('body, html').css('overflow-y','auto');
        $(this).attr('data-status', "off");
      }
    });
  });