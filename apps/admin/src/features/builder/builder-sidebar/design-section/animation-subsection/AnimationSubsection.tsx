import React from "react";
import { Switch, Text, TextVariant } from "ui-components";

import { AnimationType } from "../../../../../app/context/theme-context/enums";
import { useThemeContext } from "../../../../../app/context/theme-context/ThemeContext";

const AnimationSubsection = () => {
  const { theme, setAnimation } = useThemeContext();

  return (
    <div className="flex flex-col space-y-5">
      <div className="flex items-center space-x-3 justify-between">
        <Text customClasses="font-semibold" variant={TextVariant.BODY2}>
          Fade up
        </Text>
        <Switch
          checked={theme.animation?.type === AnimationType.FADE_UP}
          onCheckedChange={(checked) =>
            setAnimation({
              type: !checked ? AnimationType.NONE : AnimationType.FADE_UP,
            })
          }
        />
      </div>
      <div className="flex items-center space-x-3 justify-between">
        <Text customClasses="font-semibold" variant={TextVariant.BODY2}>
          Fade down
        </Text>
        <Switch
          checked={theme.animation?.type === AnimationType.FADE_DOWN}
          onCheckedChange={(checked) =>
            setAnimation({
              type: !checked ? AnimationType.NONE : AnimationType.FADE_DOWN,
            })
          }
        />
      </div>
      <div className="flex items-center space-x-3 justify-between">
        <Text customClasses="font-semibold" variant={TextVariant.BODY2}>
          Fade left
        </Text>
        <Switch
          checked={theme.animation?.type === AnimationType.FADE_LEFT}
          onCheckedChange={(checked) =>
            setAnimation({
              type: !checked ? AnimationType.NONE : AnimationType.FADE_LEFT,
            })
          }
        />
      </div>
      <div className="flex items-center space-x-3 justify-between">
        <Text customClasses="font-semibold" variant={TextVariant.BODY2}>
          Fade right
        </Text>
        <Switch
          checked={theme.animation?.type === AnimationType.FADE_RIGHT}
          onCheckedChange={(checked) =>
            setAnimation({
              type: !checked ? AnimationType.NONE : AnimationType.FADE_RIGHT,
            })
          }
        />
      </div>
    </div>
  );
};

export default AnimationSubsection;
