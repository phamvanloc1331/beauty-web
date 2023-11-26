import { useFormContext, Controller } from "react-hook-form";
import { TextField as MuiTextField } from "@mui/material";

const RhfTextField = ({ name, label, type = "text",disabled, ...rest }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        return (
          <MuiTextField
            {...field}
            {...rest}
            disabled={disabled}
            type={type}
            label={label}
            error={Boolean(error)}
            helperText={error?.message}
            fullWidth
            multiline={type == "text"}
            // InputLabelProps={{ shrink: Boolean(field.value) }}
          />
        );
      }}
    />
  );
};

export default RhfTextField;
