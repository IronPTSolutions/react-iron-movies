import { useSearchParams } from 'react-router';

function MoviesFinder() {
  const [searchParams, setSearchParams] = useSearchParams();
  const name = searchParams.get('name') ?? '';

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchParams({ name: value });
  }

  return (
    <>
      <div className="input-group">
        <span className="input-group-text"><i className="fa fa-search"></i></span>
        <input 
          type="text" 
          value={name} 
          className="form-control" 
          placeholder="Search movie by title..."
          onChange={handleSearchChange}
          />
      </div>
    </>
  )
};

export default MoviesFinder;