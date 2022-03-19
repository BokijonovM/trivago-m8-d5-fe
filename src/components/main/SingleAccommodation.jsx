import placeholder from './paceholder.png'
function SingleAccommodation({acc}) {
    return ( 
        <div classNameName="card mb-3" style={{maxWidth: '640px'}}>
        <div className="row no-gutters">
          <div className="col-md-4" >
            <img src={acc.image|| placeholder} alt="apartment" className='w-100'/>
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">{acc.name}</h5>
              <p className="card-text">{acc.description} natural lead-in to additional content. This content is a little bit longer.</p>
              <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
            </div>
          </div>
        </div>
      </div>
     );
}

export default SingleAccommodation;