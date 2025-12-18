interface CardData{
    img:string,
    desc:string,
    title:string
}

export default function WorkCard({img,desc,title}:CardData) {
    return (
        <>
            <div className="card mb-3 shadow">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={img} className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">
                                {desc}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
