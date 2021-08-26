import { useState  } from 'react'
import { storage } from "../firebase";
import { TableHead } from './TableHead';


export const FileUpload = () => {
   
    const [files, setFiles] = useState([]);
    const [urls, setUrls] = useState([]);
    const [progress, setProgress] = useState(0);
    const [message, setMessage] = useState("");

    const deleteFile = (deleteFile,index) =>{
        const storageRef = storage.ref(`documentos/${deleteFile}`)
        storageRef.delete().then(function() {
           console.log(`${deleteFile}  File deleted successfully`)
           const arrayFiltradoUrls = urls.filter( (item,i) => (i !==index))
           setUrls(arrayFiltradoUrls)
           const arrayFiltradoFiles = files.filter( item => (item.name !== deleteFile) )
           setFiles(arrayFiltradoFiles)
           setMessage('Archivo Eliminado!!')
        }).catch(function(error) {
            console.log(`Ha ocurrido un error al eliminar el archivo ${deleteFile}: ${error.message}`)
        });
    }
  
    const handleChange = (event) => {
        setMessage("")
        const file = event.target.files[0]
        if (file){
            const storageRef = storage.ref(`documentos/${file.name}`)
            const task = storageRef.put(file)
            setFiles([ ...files,file])
            task.on('state_changed', (snapshot) => {
            let progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100 );
            setProgress(progress);
            }, (error) => {
            console.error(error.message)
            setMessage(`Ha ocurrido un error: ${error.message}`)
            switch (error.code) {
                case 'storage/unauthorized':
                    setMessage(`No tienes permisos para accesar el archivo: ${error.message}`)
                break;
                case 'storage/canceled':
                    setMessage(`Proceso Canelado: ${error.message}`)
                break;
                case 'storage/unknown':
                    setMessage(`Error de servidor: ${error.message}`)
                break;
                default:
                    setMessage(`Error : ${error.message}`)
            }

            }, async () => {
                console.log("File uploaded")
                await storageRef.getDownloadURL().then((url) => {
                    setMessage('Archivo Subido!!')
                    setUrls([ ...urls,url ])
                    setProgress(0);
                }).catch(function(error) {
                    console.log("error")
                    setMessage(`Ha ocurrido un error; ${error.message}`)
                });
            })
        }
    }

    return (
        <div className="my-3">
            <progress value={progress} max="100">{progress} %</progress>
            <div className="input-group">
                <input 
                    type="file" 
                    className="form-control" 
                    id="inputGroupFile04" 
                    aria-describedby="inputGroupFileAddon04" 
                    aria-label="Upload"
                    onChange={handleChange} 
                />
            </div>
            <div>{message}</div>
            <TableHead files={files} urls={urls} deleteFile={deleteFile} />
        </div>
    );
  };
  