export default function Card({post}) {
    return (
        <div className="card shadow bordr-0" >
            <div className="card-body">
            <div className="card-title">{post.title}</div>
            <div className="card-text">{post.body}</div>
            <a href="">Go to details</a>
            </div>
        </div>
    )
}