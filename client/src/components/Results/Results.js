import React from 'react';
import Article from '../Event'

const Results = props =>

<div className='container'>
   <div className='row'>
    <div className='col-lg-12'>
      <div className='panel panel-primary'>
        <div className='panel-heading'>
          <h3 className='panel-title'>
            <strong>
              Results
            </strong>
          </h3>
        </div>
        <div className='panel-body'>
        {props.venues.map((venue, index) =>(
          <Article 
            venueId = {venue.id}
            name = {venue.venues[index].name}
            type = {venue.categories[0].name}
            address = {venue.formattedAddress}
            url = {venue.url}
            checkins = {venue.stats.checkinsCount}
            users = {venue.stats.usersCount}
            busy = {venue.hereNow.count}
            key = {index}
            saved = {false}
          />
          ))
        }
        </div>
      </div>
    </div>
  </div>
</div>

export default Results;