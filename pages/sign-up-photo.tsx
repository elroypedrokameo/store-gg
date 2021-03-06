/* eslint-disable import/extensions */
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { setSignUp } from '../services/auth';
import { getGameCategory } from '../services/player';

export default function SignUpPhoto() {
  const [categories, setcategories] = useState([]);
  const [favorite, setFavorite] = useState('');
  const [image, setImage] = useState('');
  const [imagePreview, setImagePreview] = useState(null);
  const [localForm, setLocalForm] = useState({
    name: '',
    email: '',
  });

  const getgameCategoryAPI = useCallback(async () => {
    const data = await getGameCategory();
    setcategories(data);
    setFavorite(data[0]._id);
  }, [getGameCategory]);

  useEffect(() => {
    getgameCategoryAPI();
  }, []);

  useEffect(() => {
    const getLocalForm = localStorage.getItem('user-form');
    setLocalForm(JSON.parse(getLocalForm));
  }, []);

  const onSubmit = async () => {
    const getLocalForm = await localStorage.getItem('user-form');
    const form = JSON.parse(getLocalForm);
    const data = new FormData();

    data.append('image', image);
    data.append('email', form.email);
    data.append('name', form.name);
    data.append('password', form.password);
    data.append('username', form.name);
    data.append('phoneNumber', '0821345678');
    data.append('role', 'user');
    data.append('status', 'Y');
    data.append('favorite', 'favorite');

    const result = await setSignUp(data);
    console.log('Result: ', result);
  };
  return (
    <section className="sign-up-photo mx-auto pt-50 pb-50">
      <div className="container mx-auto">
        <form action="">
          <div className="form-input d-md-block d-flex flex-column">
            <div>
              <div className="mb-20">
                <div className="image-upload text-center">
                  <label htmlFor="avatar">
                    {imagePreview
                      ? <img src={imagePreview} className="img-upload" alt="upload-image" />
                      : <Image src="/icon/upload.svg" width={120} height={120} alt="upload-image" />}
                  </label>
                  <input
                    id="avatar"
                    type="file"
                    name="avatar"
                    accept="image/png, image/jpeg"
                    onChange={(event) => {
                      // console.log(event.target.files);
                      const img = event.target.files[0];
                      setImagePreview(URL.createObjectURL(img));
                      return setImage(img);
                    }}
                  />
                </div>
              </div>
              <h2 className="fw-bold text-xl text-center color-palette-1 m-0">{localForm.name}</h2>
              <p className="text-lg text-center color-palette-1 m-0">{localForm.email}</p>
              <div className="pt-50 pb-50">
                <label htmlFor="category" className="form-label text-lg fw-medium color-palette-1 mb-10">
                  Favorite Game
                </label>
                <select
                  id="category"
                  name="category"
                  className="form-select d-block w-100 rounded-pill text-lg"
                  aria-label="Favorite Game"
                  value={favorite}
                  onChange={(event) => setFavorite(event.target.value)}
                >
                  {categories.map((category) => (
                    <option
                      key={category._id}
                      value={category._id}
                      selected
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="button-group d-flex flex-column mx-auto">
              <button
                type="button"
                className="btn btn-create fw-medium text-lg text-white rounded-pill mb-16"
                onClick={onSubmit}
              >
                Create My Account
              </button>
              <Link href="#">
                <a
                  className="btn btn-tnc text-lg color-palette-1 text-decoration-underline pt-15"
                  role="button"
                >
                  Terms & Conditions
                </a>
              </Link>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
