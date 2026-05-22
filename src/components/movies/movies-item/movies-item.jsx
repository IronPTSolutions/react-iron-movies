
function MoviesItem({ movie: { id, title, poster, rating }, onDelete }) {
  const handleDeletion = () => onDelete();
  return (
    <div className="card text-bg-dark" style={{ maxWidth: '200px'}}>
      <img src={poster} className="card-img" alt={title} />
        <div className="card-img-overlay d-flex gap-2 justify-content-between align-items-end">
        <h6 className="card-title m-0" onClick={handleDeletion}>{title}</h6>
          <span>{rating.toFixed(1)}</span>
        </div>
    </div>
  )
};

export default MoviesItem;