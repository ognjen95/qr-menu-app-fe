import clsx from "clsx";
import { FC, useEffect, useState } from "react";
import {
  Button,
  Icon,
  IconPlacement,
  IconSize,
  IconType,
  Input,
  InputSize,
  Text,
} from "ui-components";
import { ButtonColor, ButtonSize } from "ui-components/src/button/enums";
import { colors } from "ui-components/src/config/tailwind-config";

import useSelectCreateValidation from "~hooks/use-content-create-validation";

import { OnSubmitMetadata } from "./types";

export type MetadataInputProps = {
  isEdit?: boolean;
  onCancel: () => void;
  onSubmit: OnSubmitMetadata;
  loading?: boolean;
  defaultValue?: string;
  isVisible?: boolean;
  errMessage?: string | null;
};

const MetadataInput: FC<MetadataInputProps> = ({
  onCancel,
  onSubmit,
  isEdit = false,
  loading,
  defaultValue = "",
  isVisible = false,
  errMessage,
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const { errorMessage: validationErrorMessage, validate } =
    useSelectCreateValidation();

  useEffect(() => {
    if (isEdit && defaultValue) {
      setInputValue(defaultValue);
    }
  }, [isEdit, defaultValue]);

  return (
    <div className="flex justify-between py-3 border-t border-gray-100">
      <div className="flex items-center space-x-2">
        <div className="w-96">
          <Input
            autoFocus={isVisible}
            iconPlacement={IconPlacement.LEFT}
            size={InputSize.EXTRA_SMALL}
            placeholder="Type"
            value={inputValue}
            onChange={(e) => {
              validate(e.target.value);
              setInputValue(e.target.value);
            }}
          />
        </div>
        {(errMessage || validationErrorMessage) && (
          <div className="flex items-center pt-1 gap-2">
            <Icon
              type={IconType.CIRCLE_WARNING}
              size={IconSize.SMALL}
              fill="white"
              stroke={colors.red[500]}
            />
            <Text color="text-red-500">
              {errMessage || validationErrorMessage}
            </Text>
          </div>
        )}
      </div>
      <div
        className={clsx("space-x-2 flex justify-between pr-3", {
          "w-56": !isEdit,
          "w-96": isEdit,
        })}
      >
        <Button
          onClick={onCancel}
          size={ButtonSize.SMALL}
          color={ButtonColor.GREY}
          fullWidth
        >
          Cancel
        </Button>
        <Button
          disabled={!inputValue.trim() || !!validationErrorMessage}
          loading={loading}
          onClick={() => {
            if (validationErrorMessage) return;

            onSubmit(inputValue.trim(), () => {
              setInputValue("");
            });
          }}
          size={ButtonSize.SMALL}
          fullWidth
        >
          {isEdit ? "Save Changes" : "Add"}
        </Button>
      </div>
    </div>
  );
};

export default MetadataInput;
