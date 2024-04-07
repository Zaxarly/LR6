let viewer;

function initViewer(imageUrl) {
  viewer = pannellum.viewer('panorama', {
    "default": {
      "firstScene": "scene1",
      "sceneFadeDuration": 1000,
      "autoRotate": -2,
      "autoRotateInactivityDelay": 5000
    },
    "scenes": {
      "scene1": {
        "type": "equirectangular",
        "panorama": imageUrl,
        "autoLoad": true
      }
    }
  });
}

function changePanorama(imageUrl) {
  viewer.addScene('scene2', {
    "type": "equirectangular",
    "panorama": imageUrl,
    "autoLoad": true,
    "autoRotate": -2,
    "autoRotateInactivityDelay": 5000
  });
  viewer.loadScene('scene2');
}

window.onload = function() {
  initViewer("img/panorama.jpeg");

  const imageUpload = document.getElementById('imageUpload');
  const uploadButton = document.getElementById('uploadButton');

  uploadButton.addEventListener('click', () => {
    const file = imageUpload.files[0]; // Вибираємо лише перший файл
    if (file.type === 'image/jpeg' && file.size <= 5 * 1024 * 1024) {
      const reader = new FileReader();
      reader.onload = () => {
        console.log('New image loaded:', reader.result);
        changePanorama(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      alert(`Файл ${file.name} не є зображенням JPEG або перевищує 5 МБ.`);
    }
  });
};
