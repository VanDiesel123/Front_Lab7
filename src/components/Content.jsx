import React from "react";
import Image from "./Image.jsx";

// Класовий компонент Content (вимога методички).
export default class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      element6Active: false,
      element7Active: false,
      photos: [{ id: 1, width: 400 }]
    };

    this.nextPhotoId = 2;
  }

  toggleElement6 = () => {
    this.setState((previous) => ({
      element6Active: !previous.element6Active
    }));
  };

  toggleElement7 = () => {
    this.setState((previous) => ({
      element7Active: !previous.element7Active
    }));
  };

  addPhoto = () => {
    const newPhoto = { id: this.nextPhotoId++, width: 400 };
    this.setState((previous) => ({
      photos: [...previous.photos, newPhoto]
    }));
  };

  resizeLastPhoto = (change) => {
    this.setState((previous) => {
      if (previous.photos.length === 0) return null;

      const lastIndex = previous.photos.length - 1;
      const photos = previous.photos.map((photo, index) => {
        if (index !== lastIndex) return photo;

        const width = Math.max(160, Math.min(800, photo.width + change));
        return { ...photo, width };
      });

      return { photos };
    });
  };

  removePhoto = () => {
    this.setState((previous) => ({
      photos: previous.photos.slice(0, -1)
    }));
  };

  render() {
    const { element6Active, element7Active, photos } = this.state;
    const photoSrc = `${import.meta.env.BASE_URL}images/Photo.png`;
    const hasPhotos = photos.length > 0;

    return (
      <div className="personal-page">
        <h3>Білий Іван Сергійович</h3>
        <p>Народився 12.07.2007 у м. Полтава.</p>
        <p>Навчаюся в Київському політехнічному інституті імені Ігоря Сікорського.</p>
        <p>Навчався в Полтавській загальноосвітній школі №29.</p>

        <h4>Мої захоплення</h4>
        <ul>
          <li
            id="element6"
            className={`interactive-item ${element6Active ? "active-six" : ""}`}
            onClick={this.toggleElement6}
            title="Натисніть, щоб змінити кольори"
          >
            Навчався в музичній школі, граю на різних інструментах
          </li>
          <li
            className={`element7 interactive-item ${element7Active ? "active-seven" : ""}`}
            onClick={this.toggleElement7}
            title="Натисніть, щоб змінити кольори"
          >
            Займався бальними танцями
          </li>
          <li>Ходжу в спортзал</li>
        </ul>

        <h4>Улюблені книги та фільми</h4>
        <ol>
          <li>Володар перснів</li>
          <li>Зоряні війни</li>
          <li>Хобіт</li>
        </ol>

        <h4>Моє улюблене місто</h4>
        <p>
          Одне з моїх улюблених міст — Львів. Мені подобається його
          старовинна архітектура, затишні кав'ярні та атмосфера старого міста.
        </p>

        <div className="photo-gallery">
          {photos.map((photo) => (
            <Image key={photo.id} src={photoSrc} width={photo.width} />
          ))}
        </div>

        <div className="photo-controls">
          <button type="button" onClick={this.addPhoto}>Додати</button>
          <button
            type="button"
            onClick={() => this.resizeLastPhoto(40)}
            disabled={!hasPhotos}
          >
            Збільшити
          </button>
          <button
            type="button"
            onClick={() => this.resizeLastPhoto(-40)}
            disabled={!hasPhotos}
          >
            Зменшити
          </button>
          <button type="button" onClick={this.removePhoto} disabled={!hasPhotos}>
            Видалити
          </button>
        </div>
      </div>
    );
  }
}
