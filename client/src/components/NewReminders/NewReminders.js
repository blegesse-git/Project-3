
import RemindersList from "../Reminders/RemindersList"




function NewReminders({reminders}){

return(
    <div>
        {reminders.map(reminder =>(
<RemindersList key ={reminder.id} title ={reminder.title}/>
        ))}
       
    </div>
)

}


export default NewReminders;