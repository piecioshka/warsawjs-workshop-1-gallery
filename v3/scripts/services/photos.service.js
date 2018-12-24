(function () {

    window.gallery = window.gallery || {};

    class PhotosService {
        fetchPhotos() {
            return window.fetch('backend/db.json')
                .then((response) => response.json());
        }

        async fetchPhotosAsync() {
            const response = await window.fetch('backend/db.json');
            const data = await response.json();
            return data;
        }
    }

    window.gallery.PhotosService = new PhotosService();

}());
