export const TableHead = ({files,urls,deleteFile}) => {
    
    return(
        <>
            <h4>Lista de documentos</h4>
            <table className="table table-responsive">
                <thead>
                    <tr>
                        <th>Archivo</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        urls.map((url, i) => (
                            <tr key={i}>
                                <td>{files[i].name}</td>
                                <td>
                                    <a  href={url} rel="noreferrer" target="_blank">Ver</a>
                                    <button className="btn btn-link btn-sm" onClick={()=>{deleteFile(files[i].name,i)}}>&nbsp;&nbsp;&nbsp;Eliminar</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
