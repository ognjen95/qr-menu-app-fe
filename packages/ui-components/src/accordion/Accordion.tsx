import * as Collapsabile from "@radix-ui/react-accordion";
import clsx from "clsx";
import React, { FC, ReactNode } from "react";

import { IconType } from "../icon/enums";
import Icon from "../icon/Icon";
import Text from "../text/Text";

export type AccordionItemProps = {
  children: React.ReactNode;
  className?: string;
  value: string;
};

const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(
  ({ children, className, value, ...props }, forwardedRef) => (
    <Collapsabile.Item
      value={value}
      className={clsx(
        "mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10"
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Collapsabile.Item>
  )
);

export type AccordionTriggerProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionTrigger = React.forwardRef<
  HTMLButtonElement,
  AccordionTriggerProps
>(({ children, className, ...props }, forwardedRef) => (
  <Collapsabile.Header className="flex">
    <Collapsabile.Trigger
      className={clsx(
        "hover:bg-mauve2 group flex overflow-hidden  flex-1 items-center justify-between bg-primary-500 p-5 hover:bg-primary-400 cursor-pointer text-[15px] leading-none shadow-[0_1px_0] outline-none focus:outline-none active:outline-none",
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      <Text truncate color="text-white">
        {children}
      </Text>
      <Icon type={IconType.CARET_DOWN} fill="none" stroke="white" />
    </Collapsabile.Trigger>
  </Collapsabile.Header>
));

export type AccordionContentProps = {
  children: React.ReactNode;
  className?: string;
};

const AccordionContent = React.forwardRef<
  HTMLDivElement,
  AccordionContentProps
>(({ children, className, ...props }, forwardedRef) => (
  <Collapsabile.Content
    className={clsx(
      "data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px] outline-none focus:outline-none active:outline-none",
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-5">{children}</div>
  </Collapsabile.Content>
));

export type AccordionProps = {
  options: {
    collapsed: boolean;
    title: string;
    description?: string;
    content: ReactNode;
  }[];
};

const Accordion: FC<AccordionProps> = ({ options }) => (
  <Collapsabile.Root
    className="bg-grey-50 w-full outline-none focus:outline-none active:outline-none"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    {options.map((option) => (
      <AccordionItem value={option.title} key={option.title}>
        <AccordionTrigger>
          <Text color="white" customClasses="block text-left font-semibold">
            {option.title}
          </Text>
          <Text truncate color="text-white" customClasses="block text-left">
            {option.description}
          </Text>
        </AccordionTrigger>
        <AccordionContent>{option.content}</AccordionContent>
      </AccordionItem>
    ))}
  </Collapsabile.Root>
);

export default Accordion;
