import Image from "next/image";

export const ResumeCard = (props: any) => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><Image src={props.img} height="300" width="400" alt="Image" /></figure>
            <div className="card-body">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.desc}</p>
                <div className="card-actions justify-end">
                    <a href={props.file} download>
                        <button className="btn btn-primary">Download</button>
                    </a>
                </div>
            </div>
        </div>
    );
}