function setup() {

    const gallery = window.gallery;
    const zoom = new gallery.Zoom();

    const thumbList = new gallery.ThumbList();

    thumbList.on('click:thumb', ({ image }) => {
        zoom.render(image);
    });

    gallery.PhotosService.fetchPhotosAsync()
        .then(({ photos }) => {
            thumbList.render(photos);
        });
}

window.addEventListener('DOMContentLoaded', setup);
