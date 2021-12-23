import { Button, Input } from 'reactstrap';

export default function GlobalFilter({ filter, setFilter }) {
  return (
    <>
      <div className="input-group input-group-sm" style={{ width: 150 }}>
        <Input
          type="search"
          placeholder="Search"
          className="form-control float-right"
          value={filter || ''}
          onChange={(e) => setFilter(e.target.value)}
        />
        <div className="input-group-append">
          <Button type="submit" size="sm" outline>
            <i className="fas fa-search" />
          </Button>
        </div>
      </div>
    </>
  );
}
