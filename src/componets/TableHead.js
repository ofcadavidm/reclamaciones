
export const TableHead = ({files,urls}) => {

    return(
        <>
            <h4>Lista de documentos</h4>
            <table className="table table-responsive table-bordered">
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
                                <td><a href={url} rel="noreferrer" target="_blank">Ver</a></td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )
}
