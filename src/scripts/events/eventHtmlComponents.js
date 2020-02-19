const eventHtmlComponents = {
    createEventContainerWithCreateEventButton() {
        return `
        <h1 class="sectionHeader">Your Events:</h1>

        <article class="createFormContainer" id="createFormContainer--events">

        <button class="createFormButton" id="createFormButton--events">Create Event</button>
            
        </article>
        `
    },
    createEventForm() {
        return `
        <input type="hidden" id="event_id" value=""/>

        <input type="hidden" id="event_userId" value=""/>

        <fieldset>
            <input type="text" id="event_name" class="form_input" placeholder="Event Name"/>
        </fieldset>

        <fieldset>
            <input type="datetime-local" id="event_date" class="form_input" placeholder="Event Date"/>
        </fieldset>

        <fieldset>
            <input type="text" id="event_location" class="form_input" placeholder="Event Location"/>
        </fieldset>

        <button class="saveFormButton" id="saveFormButton--events">Save Event</button>

        <button class="nevermindFormButton" id="nevermindFormButton--events">Nevermind</button>
        `
    },
    createEventCardsContainer() {
        return `
        <article class="objCards" id="objCards--events">

        </article>
        `
    },
    createNoEventsMessage() {
        return `
            <h3 class="noCards">You have no saved events. Please create an event above!</h3>
        `
    },
    createEventCard(event) {
        return `
            <div class="cards eventCards otherCards" id="cards--${event.id}">
        
                <h3>${event.name}</h3>
                <h4>${event.location}</h4>
                <p>${this.convertDateAndTime(event.date)}</p>
                <button class="editFormButton" id="editFormButton--${event.id}">Edit Event</button>
                <button class="deleteFormButton" id="deleteFormButton--${event.id}">Delete Event</button>

            </div>
        `
    },
    createFirstEventCard(event) {
        return `
            <div class="cards eventCards firstCard" id="cards--${event.id}">
        
                <h2>${event.name}</h2>
                <h3>${event.location}</h3>
                <p><strong>${this.convertDateAndTime(event.date)}</strong></p>
                <button class="editFormButton" id="editFormButton--${event.id}">Edit Event</button>
                <button class="deleteFormButton" id="deleteFormButton--${event.id}">Delete Event</button>

            </div>
        `
    },
    createEditEventForm(event) {

        return `
        <input type="hidden" id="event_id" value="${event.id}"/>

        <input type="hidden" id="event_userId" value="${event.userId}"/>

        <fieldset>
            <input type="text" id="event_name" class="form_input" value="${event.name}"/>
        </fieldset>

        <fieldset>
            <input type="datetime-local" id="event_date" class="form_input" value="${event.date}"/>
        </fieldset>

        <fieldset>
            <input type="text" id="event_location" class="form_input" value="${event.location}"/>
        </fieldset>

        <button class="saveFormButton" id="saveFormButton--${event.id}">Save Event</button>
        `
    },
    convertDateAndTime(date) {
        const dateTimeArr = date.split('T');
        const time = dateTimeArr[1]
        const oldDate = dateTimeArr[0]
        const dateArr = oldDate.split('-')
        return `${dateArr[1]}/${dateArr[2]}/${dateArr[0]} @ ${time}`
    }
}

export default eventHtmlComponents;