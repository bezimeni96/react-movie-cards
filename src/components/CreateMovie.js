import React, { useState } from 'react'

const CreateMovie = ({ addMovie }) => {
  const [movie, setMovie] = useState({
    title: '',
    subtitle: '',
    description: '',
    year: '',
    imageUrl: '',
  });

  const [errors, setErrors] = useState([]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setMovie({ ...movie, [name]: value });
  }

  
  const formControl = () => {
    const newErrors = [];
    for (const [key, value] of Object.entries(movie)) {
      if (!value) {
        newErrors.push(key);
      }
    }
    setErrors(newErrors);
    return (newErrors.length === 0 ? true : false)
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formControl()) {
      addMovie({
        ...movie,
        year: parseInt(movie.year),
      });
      setErrors([]);
      setMovie({
        title: '',
        subtitle: '',
        description: '',
        year: '',
        imageUrl: ''
      })
    }
  }

  return (
    <div>
      <h4>Add new movie</h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title: </label>
        <input type="text" name="title" id="title" value={movie.title} onChange={handleChange} />
        {errors.includes('title') && <p>This field is required!</p>}
        <br/>
        

        <label htmlFor="subtitle">Subtitle: </label>
        <input type="text" name="subtitle" id="subtitle" value={movie.subtitle} onChange={handleChange} />
        {errors.includes('subtitle') && <p>This field is required!</p>}
        <br/>

        <label htmlFor="description">Description: </label>
        <input type="text" name="description" id="description" value={movie.description} onChange={handleChange} />
        {errors.includes('description') && <p>This field is required!</p>}
        <br/>

        <label htmlFor="year">Year: </label>
        <input type="number" name="year" id="year" value={movie.year} onChange={handleChange} />
        {errors.includes('year') && <p>This field is required!</p>}
        <br/>

        <label htmlFor="imageUrl">Image url: </label>
        <input type="text" name="imageUrl" id="imageUrl" value={movie.imageUrl} onChange={handleChange} />
        {errors.includes('imageUrl') && <p>This field is required!</p>}
        <br/>

        <button type="submit">Add movie</button>

      </form>
      

    </div>
  )
}

export default CreateMovie;