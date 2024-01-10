"use client";

import { useState } from "react";
import { Button, Text, Paper, TextVariant } from "ui-components";

const navItems = ["Home", "About", "Contact", "Blog", "Careers"];

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <div className="fixed z-50 top-0 w-full bg-white">
        <Paper showShadow>
          <nav className="container flex justify-between items-center z-20">
            <div className="my-5 lg:my-6">
              <Text variant={TextVariant.HEADING5}>QR Menu </Text>
            </div>

            <div className="hidden lg:block text-sm text-neutral-grayish-blue">
              {navItems.map((navItem) => (
                <a
                  key={navItem}
                  className="mx-3 py-5 hover:gradient-border-bottom"
                  href="#"
                >
                  {navItem}
                </a>
              ))}
            </div>

            <Button>Create Menu</Button>
          </nav>
        </Paper>
      </div>
      <div />
    </div>
  );
};

export default Page;
