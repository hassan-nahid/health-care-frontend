import { getInputFieldError, IInputErrorState } from "@/lib/getInputFieldError";
import { FieldDescription } from "../ui/field";

interface FiledErrorProps {
    fieldName: string;
    state: IInputErrorState;
}

const InputFieldError = ({ fieldName, state }: FiledErrorProps) => {
    if (getInputFieldError(fieldName, state)) {
        return (
            <FieldDescription className="text-red-600">
                {getInputFieldError(fieldName, state)}
            </FieldDescription>
        );
    }
    return null;

}
export default InputFieldError