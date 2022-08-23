import showTooltipMini from './tooltips-mini';

class FilesUploader {
  constructor(filesContainer) {
    this.filesContainer = filesContainer;
    this.previews = filesContainer.querySelector(
      '.files-img-uploader__previews'
    );
    this.errorMessage = this.filesContainer.getAttribute('data-error-massage');
    this.maxFiles = this.filesContainer.getAttribute('data-max-files');
    this.input = filesContainer.querySelector('input');
    this.placeholder = filesContainer.querySelector(
      '.form-input__placeholder span'
    );
    this.files = [];

    this.init();
  }

  getFilelist() {
    const fileList = new ClipboardEvent('').clipboardData || new DataTransfer();

    this.files.forEach((file) => {
      fileList.items.add(file);
    });

    return fileList.files;
  }

  addEvents() {
    this.input.addEventListener('change', () => {
      this.files.push(...this.input.files);
      this.updatePreview();
      this.updateInputValue();
    });
  }

  updateInputValue() {
    this.input.value = '';
    this.input.files = this.getFilelist();
    this.input.customFiles = this.files;
    if (this.input.value === '') {
      this.input.closest('label').classList.remove('js-move-label--active');
    }
    if (this.maxFiles) {
      if (this.input.files.length >= this.maxFiles) {
        this.filesContainer.classList.add('max');
        showTooltipMini(`${this.errorMessage}`);
      } else {
        this.filesContainer.classList.remove('max');
      }
    }
  }

  updatePreview() {
    this.previews.innerHTML = '';

    this.files.forEach((file) => {
      const url = URL.createObjectURL(file);

      this.previews.insertAdjacentHTML(
        'beforeend',
        `
              <div class="files-img-uploader__preview">
                <div class="files-img-uploader__preview-close">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#AD0C10"/>
                    <path d="M8 7.11125L10.6669 4.44437C10.9123 4.19895 11.3102 4.19895 11.5556 4.44437C11.801 4.6898 11.801 5.0877 11.5556 5.33312L8.88875 8L11.5556 10.6669C11.801 10.9123 11.801 11.3102 11.5556 11.5556C11.3102 11.801 10.9123 11.801 10.6669 11.5556L8 8.88875L5.33312 11.5556C5.0877 11.801 4.6898 11.801 4.44437 11.5556C4.19895 11.3102 4.19895 10.9123 4.44437 10.6669L7.11125 8L4.44437 5.33312C4.19895 5.0877 4.19895 4.6898 4.44437 4.44437C4.6898 4.19895 5.0877 4.19895 5.33312 4.44437L8 7.11125Z" fill="white"/>
                  </svg>
                </div>
                <img src="${url}" alt="">
              </div>
            `
      );
    });

    const previews = this.previews.querySelectorAll(
      '.files-img-uploader__preview'
    );
    previews.forEach((preview, index) => {
      this.addEventRemoveFile(preview, index);
    });
  }

  removeFile(index) {
    this.files.splice(index, 1);
    this.updateInputValue();
    this.updatePreview();
  }

  addEventRemoveFile(preview, index) {
    const closeButton = preview.querySelector(
      '.files-img-uploader__preview-close'
    );

    closeButton.addEventListener('click', () => {
      this.removeFile(index);
    });
  }

  init() {
    this.addEvents();
  }
}

const filesUploaders = document.querySelectorAll('.files-img-uploader');

filesUploaders.forEach((filesUploader) => {
  new FilesUploader(filesUploader);
});
