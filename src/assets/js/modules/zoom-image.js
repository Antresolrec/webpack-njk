const zoomContainers = document.querySelectorAll('.js-zoom-container');

function zoomInit() {
  zoomContainers.forEach((el) => {
    if (window.innerWidth < 1024) {
      el.classList.add('js-zoom-disabled');
    } else if (el.classList.contains('js-zoom-disabled')) {
      el.classList.remove('js-zoom-disabled');
    }
    const zoomItem = el.querySelectorAll('.js-zoom-item');
    zoomItem.forEach((zoom) => {
      const zoomPreview = zoom.querySelector('img');
      const zoomPath = zoomPreview.getAttribute('data-zoom-big');
      const zoomSize = zoomPreview.getAttribute('data-zoom-size');
      const zoomedImage = zoom.querySelector('.js-zoom-image');

      zoom.addEventListener('mouseenter', () => {
        if (zoomPath) {
          zoomedImage.style.backgroundImage = `url(${zoomPath})`;
        } else {
          zoomedImage.style.backgroundImage = `url(${zoomPreview.getAttribute(
            'src'
          )})`;
        }
        if (zoomSize) {
          zoomedImage.style.backgroundSize = zoomSize;
        } else {
          zoomedImage.style.backgroundSize = '250%';
        }
        zoomedImage.style.opacity = '1';
      });

      zoomedImage.addEventListener('mousemove', function (e) {
        const dimentions = this.getBoundingClientRect();
        const x = e.clientX - dimentions.left;
        const y = e.clientY - dimentions.top;
        const xpercent = Math.round(100 / (dimentions.width / x));
        const ypercent = Math.round(100 / (dimentions.height / y));

        this.style.backgroundPosition = `${xpercent}% ${ypercent}%`;
      });

      zoom.addEventListener('mouseleave', () => {
        zoomedImage.style.backgroundSize = 'cover';
        zoomedImage.style.backgroundPosition = 'center';
        zoomedImage.style.opacity = '0';
      });
    });
  });
}

window.addEventListener('DOMContentLoaded', () => {
  if (zoomContainers) {
    zoomInit();
  }
});

window.addEventListener('resize', () => {
  if (zoomContainers) {
    zoomInit();
  }
});
