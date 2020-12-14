import React from 'react';
import Link from '@material-ui/core/Link';



 function EventLinks() {
  return (
    <Link
      component="button"
      variant="body2"
      onClick={() => {
        console.info("I'm a button.");
      }}
      style={{color: 'black'}}
    >
      BootCamp Graduation
    </Link>
  );
}

export default EventLinks