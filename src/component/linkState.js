export function linkState(component, attr) {
    return {
        value: component.state.input[attr],
        set(x) {
            component.setState({
                input: {
                    ...component.state.input,
                    [attr]: x
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
            //merge object
            component.setState({
                input: Object.assign(
                    {},
                    component.state.input,
                    {exercises: exercises}
                )
            }, () => {
                console.log('linkExerciseState on change handler => input', component.state.input);
            })
        }
    }
}