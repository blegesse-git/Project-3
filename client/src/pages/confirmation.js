import React from 'react';
import { useParams, useHistory } from 'react-router-dom';

import EventsService from '../services/events';

function Confirmation(){
    const { id } = useParams();
    const history = useHistory();

    const confirmToApi = async () => {
        await EventsService.confirmGuestAttendance(id);
        history.push('/');
    };

    React.useEffect(
        () => {
            confirmToApi();
        },
        [],
    );
    return(
        <h1>confirming</h1>
    )
}
export default Confirmation