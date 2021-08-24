
export const AccordionItem = (props) => {
    const {heading,databstarget,databsparent,botontitle,databody}=props
    return(
        <div className="accordion-item">
            <h2 className="accordion-header" id={heading}>
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#${databstarget}`} aria-expanded="false" aria-controls={databstarget}>
                {botontitle}
            </button>
            </h2>
            <div id={databstarget} className="accordion-collapse collapse " aria-labelledby={heading} data-bs-parent={`#${databsparent}`}>
                {databody}
            </div>
        </div>
    )
}
