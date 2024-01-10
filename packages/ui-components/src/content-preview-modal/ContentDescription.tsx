import { FC } from "react";

import { ContentType } from "./enums";
import Chip from "../chip";
import Text from "../text";
import { TextVariant } from "../text/enums";

export type ContentDescriptionProps = {
  categories: string[];
  name: string;
  description: string;
  language: string;
  types: string[];
  tags: string[];
  isDailyPlan: boolean;
  dailyPlanName?: string;
  dailyPlanDescription?: string;
  contentType?: ContentType;
};

const ContentDescription: FC<ContentDescriptionProps> = ({
  categories,
  name,
  description,
  language,
  types,
  tags,
  isDailyPlan,
  contentType,
  dailyPlanName,
  dailyPlanDescription,
}) => (
  <div className="flex flex-col self-start justify-start space-y-6 min-h-0 overflow-y-auto">
    {isDailyPlan && (
      <>
        <Text variant={TextVariant.HEADING6} color="text-white">
          Plan information
        </Text>
        <div className="flex flex-col">
          <Text variant={TextVariant.BODY4} color="text-grey-400">
            Name
          </Text>
          <Text variant={TextVariant.BODY3} color="text-white">
            {dailyPlanName}
          </Text>
        </div>
        <div className="flex flex-col">
          <Text variant={TextVariant.BODY4} color="text-grey-400">
            Description
          </Text>
          <Text variant={TextVariant.BODY3} color="text-white capitalize">
            {dailyPlanDescription}
          </Text>
        </div>
      </>
    )}
    <Text variant={TextVariant.HEADING6} color="text-white">
      Content information
    </Text>
    <div className="flex flex-col">
      <Text variant={TextVariant.BODY4} color="text-grey-400">
        Name
      </Text>
      <Text variant={TextVariant.BODY3} color="text-white">
        {name}
      </Text>
    </div>
    {!isDailyPlan && (
      <div className="flex flex-col">
        <Text variant={TextVariant.BODY4} color="text-grey-400">
          Description
        </Text>
        <Text variant={TextVariant.BODY3} color="text-white">
          {description}
        </Text>
      </div>
    )}
    {!isDailyPlan && (
      <div className="flex flex-col">
        <Text variant={TextVariant.BODY4} color="text-grey-400">
          Language
        </Text>
        <Text variant={TextVariant.BODY3} color="text-white">
          {language}
        </Text>
      </div>
    )}
    {isDailyPlan && (
      <div className="flex flex-col space-y-2">
        <Text
          variant={TextVariant.BODY4}
          color="text-grey-400"
          customClasses="capitalize"
        >
          Format
        </Text>
        <Text
          variant={TextVariant.BODY3}
          color="text-white"
          customClasses="capitalize"
        >
          {contentType?.toLocaleLowerCase()}
        </Text>
      </div>
    )}
    <div className="flex flex-col space-y-2">
      <Text variant={TextVariant.BODY4} color="text-grey-400">
        Category
      </Text>
      <div className="flex gap-2 flex-wrap">
        {categories.map((category) => (
          <Chip text={category} key={`content-category-${category}`} />
        ))}
      </div>
    </div>
    {!isDailyPlan && (
      <div className="flex flex-col space-y-2">
        <Text variant={TextVariant.BODY4} color="text-grey-400">
          Type
        </Text>
        <div className="flex gap-2 flex-wrap">
          {types.map((type) => (
            <Chip text={type} key={`content-type-${type}`} />
          ))}
        </div>
      </div>
    )}
    {!isDailyPlan && (
      <div className="flex flex-col space-y-2">
        <Text variant={TextVariant.BODY4} color="text-grey-400">
          Tags
        </Text>
        <div className="flex gap-2 flex-wrap">
          {tags.map((tag) => (
            <Chip text={tag} key={`content-tag-${tag}`} />
          ))}
        </div>
      </div>
    )}
  </div>
);

export default ContentDescription;
