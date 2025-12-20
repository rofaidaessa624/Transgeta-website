import style from './WorkCard.module.css'
interface CardData {
    img: string,
    desc: string,
    title: string,
    position: string
}

export default function WorkCard({ img, desc, title, position }: CardData) {
    return (
        <>
            {position === "top" ?
                <div className="card mb-3 border-0 align-items-center">
                    <img src={img} className={`${style['img-w']} w-auto card-img-top`} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                </div>
                :
                <div className="card mb-3 border-0 align-items-center">
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{desc}</p>
                    </div>
                    <img src={img} className={`${style['img-w']} card-img-bottom w-auto`} alt="..."/>
                </div>
            }
        </>
    )
}
