export function linkState(component, attr) {
    let newInput
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
            console.log(x);
            let exercises = component.state.input.exercises;
            let exercise = exercises[index];
            //if has property name, it means the param is from inline text component
            if (x.hasOwnProperty('name')) {
                exercise[attr] = x.name;
            } else {
                exercise[attr] = x;
            }
            
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