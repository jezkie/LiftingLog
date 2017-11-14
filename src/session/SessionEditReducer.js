const initialState = {
    session: {}
}

function sessionEditReducer(state = initialState, action) {

    switch (action.type) {
        case 'GET_SELECTED_SESSION':
            const sessions = [{
                id: 1,
                imgUrl: "https://i2.wp.com/casinofitness.com/wp-content/uploads/2017/06/how-to-bench-press-for-beginners.jpg?resize=225%2C225&ssl=1",
                workout: "Chest Day",
                description: "Bench etc..."
            },
            {
                id: 2,
                imgUrl: "http://cdn-mf1.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_thumb_desktop/public/30-best-back-workouts-yates-row.jpg?itok=OyZm0NAW",
                workout: "Back Day",
                description: "Row, Pullups"
            },
            {
                id: 3,
                imgUrl: "http://cdn-mf0.heartyhosting.com/sites/mensfitness.com/files/styles/gallery_slideshow_thumb_desktop/public/_main_deadlift_1.jpg?itok=JUKDHbv5",
                workout: "Leg Day",
                description: "Squat etc..."
            }];

            const filteredSession = sessions.filter(function (item) {
                return item.id == action.payload;
            });

            return { ...state, session: filteredSession[0] };
        default:
            return state;
    }
}

export default sessionEditReducer;