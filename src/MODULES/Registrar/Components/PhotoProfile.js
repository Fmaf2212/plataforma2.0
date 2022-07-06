import { useState } from 'react'

const PhotoProfile = () => {

  const [foto, setFoto] = useState('usuario-azul.png')
  
  const addPhoto = (e) => {
    // console.log("---------------------------------------")
    //estado foto antes de modificarlo
    // console.log(foto)
    //lo que recibe del input (e.target.files)
    // console.log(e)
    //tipo de dato del nombre del archivo (en este caso es string)
    // console.log(typeof e[0].name)
    //modificar el estado en donde se le coloca el nombre del archivo seleccionado 
    setFoto(e[0].name)
  }

  //estado foto después de haber sido modificada.
  // console.log(`foto: ${foto}`)
  //tipo de dato del nuevo estado.
  // console.log(`tipo de dato de foto: ${typeof foto}`)
  //El método "require()" toma un argumento, una ruta relativa válida a una imagen. 
  //Además, tenga en cuenta que debe acceder a la propiedad ".default" del objeto devuelto en algunos navegadores.
  const image = require(`../../../BASE/img/${foto}`).default
  //imprimir el contenido de la variable image.
  // console.log(`image: ${image}`);

  return (
    <div className="scrollflow -opacity formulario__photo">
      <div
        id="imagePreview"
        className="imagePreview"
        style={{ backgroundImage: `url(${image})` }}
      ></div>

      <input
        onChange={(e) => addPhoto(e.target.files)}
        className="inputAddPhoto"
        type={'file'}
        id="imageUpload"
        accept=".png, .jpg, .jpeg"
      />
      <label htmlFor="imageUpload">
        <img
          className="imgAddPhoto"
          src={require(`../../../BASE/img/add-photo.png`).default}
          alt="imgAddPhoto"
        />
      </label>
    </div>
  )
}

export default PhotoProfile
