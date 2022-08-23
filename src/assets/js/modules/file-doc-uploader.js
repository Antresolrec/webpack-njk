import showTooltipMini from './tooltips-mini';

class FilesDocUploader {
  constructor(filesDocContainer) {
    this.filesDocContainer = filesDocContainer;
    this.previews = filesDocContainer.querySelector(
      '.files-doc-uploader__previews'
    );
    this.errorMessage =
      this.filesDocContainer.getAttribute('data-error-massage');
    this.maxFiles = this.filesDocContainer.getAttribute('data-max-files');
    this.input = filesDocContainer.querySelector('input');
    this.files = [];

    this.init();
  }

  getDocFilelist() {
    const docFileList =
      new ClipboardEvent('').clipboardData || new DataTransfer();

    this.files.forEach((file) => {
      docFileList.items.add(file);
    });

    return docFileList.files;
  }

  addDocEvents() {
    this.input.addEventListener('change', () => {
      this.files.push(...this.input.files);
      this.updateDocPreview();
      this.updateDocInputValue();
    });
  }

  updateDocInputValue() {
    this.input.value = '';
    this.input.files = this.getDocFilelist();
    this.input.customFiles = this.files;
    if (this.input.value === '') {
      this.input.closest('label').classList.remove('js-move-label--active');
    }
    if (this.maxFiles) {
      if (this.input.files.length >= this.maxFiles) {
        this.filesDocContainer.classList.add('max');
        showTooltipMini(`${this.errorMessage}`);
      } else {
        this.filesDocContainer.classList.remove('max');
      }
    }
  }

  updateDocPreview() {
    this.previews.innerHTML = '';

    this.files.forEach((file) => {
      this.previews.insertAdjacentHTML(
        'beforeend',
        `
            <div class="files-doc-uploader__preview">
                <div class="files-doc-uploader__preview-close">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="8" cy="8" r="8" fill="#AD0C10"/>
                    <path d="M8 7.11125L10.6669 4.44437C10.9123 4.19895 11.3102 4.19895 11.5556 4.44437C11.801 4.6898 11.801 5.0877 11.5556 5.33312L8.88875 8L11.5556 10.6669C11.801 10.9123 11.801 11.3102 11.5556 11.5556C11.3102 11.801 10.9123 11.801 10.6669 11.5556L8 8.88875L5.33312 11.5556C5.0877 11.801 4.6898 11.801 4.44437 11.5556C4.19895 11.3102 4.19895 10.9123 4.44437 10.6669L7.11125 8L4.44437 5.33312C4.19895 5.0877 4.19895 4.6898 4.44437 4.44437C4.6898 4.19895 5.0877 4.19895 5.33312 4.44437L8 7.11125Z" fill="white"/>
                  </svg>
                </div>
                <div class="files-doc-uploader__preview-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M21 8V20.993C21.0009 21.1243 20.976 21.2545 20.9266 21.3762C20.8772 21.4979 20.8043 21.6087 20.7121 21.7022C20.6199 21.7957 20.5101 21.8701 20.3892 21.9212C20.2682 21.9723 20.1383 21.9991 20.007 22H3.993C3.72981 22 3.47739 21.8955 3.2912 21.7095C3.105 21.5235 3.00027 21.2712 3 21.008V2.992C3 2.455 3.449 2 4.002 2H14.997L21 8ZM19 9H14V4H5V20H19V9ZM8 8C8 7.44772 8.44772 7 9 7H10C10.5523 7 11 7.44772 11 8C11 8.55228 10.5523 9 10 9H9C8.44772 9 8 8.55228 8 8ZM8 12C8 11.4477 8.44772 11 9 11H15C15.5523 11 16 11.4477 16 12C16 12.5523 15.5523 13 15 13H9C8.44772 13 8 12.5523 8 12ZM8 16C8 15.4477 8.44772 15 9 15H15C15.5523 15 16 15.4477 16 16C16 16.5523 15.5523 17 15 17H9C8.44772 17 8 16.5523 8 16Z" fill="black"/>
                  </svg>
                </div>
                <div class="files-doc-uploader__preview-name">
                  ${file.name}
                </div>
            </div>
        `
      );
    });

    const previewsDoc = this.previews.querySelectorAll(
      '.files-doc-uploader__preview'
    );
    previewsDoc.forEach((preview, index) => {
      this.addEventRemoveDocFile(preview, index);
    });
  }

  removeDocFile(index) {
    this.files.splice(index, 1);
    this.updateDocInputValue();
    this.updateDocPreview();
  }

  addEventRemoveDocFile(preview, index) {
    const closeDocButton = preview.querySelector(
      '.files-doc-uploader__preview-close'
    );

    closeDocButton.addEventListener('click', () => {
      this.removeDocFile(index);
    });
  }

  init() {
    this.addDocEvents();
  }
}

const filesDocUploaders = document.querySelectorAll('.files-doc-uploader');

filesDocUploaders.forEach((filesDocUploader) => {
  new FilesDocUploader(filesDocUploader);
});
