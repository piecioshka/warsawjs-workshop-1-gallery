const PHOTOS_CONTAINER_SELECTOR = '.gallery';
const ZOOM_CONTAINER_SELECTOR = '.magnifier';

const ESCAPE_CODE = 27;
const LEFT_CODE = 37;
const RIGHT_CODE = 39;

function buildImage(url) {
    let $image = document.createElement('img');
    $image.setAttribute('src', url);
    return $image;
}

class PhotoAlbum {
    constructor(magnifier) {
        this.$gallery = document.querySelector(PHOTOS_CONTAINER_SELECTOR);
        this._setupMagnifier(magnifier);
        this._setupKeyboardShortcuts(magnifier);
    }

    _setupMagnifier(magnifier) {
        this.$gallery.addEventListener('click', (evt) => {
            let $image = evt.target;
            magnifier.zoomIn($image);
            evt.preventDefault();
        });
    }

    _setupKeyboardShortcuts(magnifier) {
        document.addEventListener('keydown', (evt) => {
            switch (evt.keyCode) {
                case ESCAPE_CODE:
                    magnifier.zoomOut();
                    break;

                case LEFT_CODE:
                    magnifier.displayPrevPicture();
                    break;

                case RIGHT_CODE:
                    magnifier.displayNextPicture();
                    break;
            }
        });
    }
}

class Magnifier {
    constructor() {
        this.$area = document.querySelector(ZOOM_CONTAINER_SELECTOR);
        this.$main = this.$area.parentNode;
        this.$current = null;
        this._setupArrows();
        this._setupCloseZoom();
    }

    zoomIn($thumb) {
        this.$current = $thumb;

        let $link = $thumb.parentNode;
        let fullSource = $link.getAttribute('href');
        let $image = buildImage(fullSource);

        this.$main.classList.remove('hide');
        this._clearContainer();
        this.$area.appendChild($image);
    }

    displayPrevPicture() {
        let $prevImage = this._getPreviousImage();
        this.zoomIn($prevImage);
    }

    _getPreviousImage() {
        let $link = this.$current.parentNode;
        let $li = $link.parentNode;
        let $prevLi = $li.previousElementSibling;

        if (!$prevLi) {
            $prevLi = $li.parentNode.lastElementChild;
        }

        return $prevLi.querySelector('img');
    }

    displayNextPicture() {
        let $nextImage = this._getNextImage();
        this.zoomIn($nextImage);
    }

    _getNextImage() {
        let $link = this.$current.parentNode;
        let $li = $link.parentNode;
        let $nextLi = $li.nextElementSibling;

        if (!$nextLi) {
            $nextLi = $li.parentNode.firstElementChild;
        }

        return $nextLi.querySelector('img');
    }

    zoomOut() {
        this.$main.classList.add('hide');
        this._clearContainer();
    }

    _clearContainer() {
        this.$area.innerHTML = '';
    }

    _setupCloseZoom() {
        let $closeButton = this.$main.querySelector('.close-button');
        $closeButton.addEventListener('click', (evt) => {
            this.zoomOut();
            evt.preventDefault();
        });
    }

    _setupArrows() {
        let $leftArrow = this.$main.querySelector('.left-arrow');
        let $rightArrow = this.$main.querySelector('.right-arrow');

        $leftArrow.addEventListener('click', (evt) => {
            this.displayPrevPicture();
            evt.preventDefault();
        });

        $rightArrow.addEventListener('click', (evt) => {
            this.displayNextPicture();
            evt.preventDefault();
        });
    }
}

function bootstrap() {
    let magnifier = new Magnifier();

    new PhotoAlbum(magnifier);
}

window.addEventListener('DOMContentLoaded', bootstrap);
