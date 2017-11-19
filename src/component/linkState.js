export function linkState(component, attr) {
    return {
        value: component.state.input[attr],
        set(x) {
            component.setState({
                input: {
                    [attr]: x,
                    exercises: component.state.input.exercises
                }
            }, () => {
                console.log('linkState on change handler => input', component.state.input);
            });
        }
    }
}

export function linkExerciseState(component, attr, index) {
    return {
        value: component.state.input.exercises[index][attr],
        set(x) {
            let exercises = component.state.input.exercises;
            let exercise = exercises[index];
            exercise[attr] = x;
            exercises[index] = exercise;

            component.setState({
                input: { 
                    exercises: exercises, 
                    description: component.state.input.description, 
                    workout: component.state.input.workout }
            }, () => {
                console.log('linkExerciseState on change handler => input', component.state.input);
            });
        }
    }
}