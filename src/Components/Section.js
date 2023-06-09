const Section = ({title, description}) => {
    return (
        <div id={title}> 
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}

export default Section;