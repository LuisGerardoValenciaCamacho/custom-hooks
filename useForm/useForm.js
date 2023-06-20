import { useState } from "react";

export const useForm = (args = {}) => {

    const [formState, setFormState] = useState(args);

    const onInputChange = ({target}) => {
        const {name, value} = target;
        setFormState({
            ...formState,
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(args);
    }

    return {
        ...formState,
        formState,
        onInputChange,
        onResetForm
    }
}
