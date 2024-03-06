import React from "react";
import { EmptyList, Button } from "ui-components";

const EmptyState = ({ addSectionModal }: { addSectionModal(): void }) => (
  <div className="flex flex-col items-center justify-center p-10 space-y-5">
    <EmptyList
      title="Page is empty"
      description="Click on button bellow to add first section"
      url="/images/no-content.png"
    />
    <Button
      onClick={() => {
        addSectionModal();
      }}
    >
      Add Section
    </Button>
  </div>
);

export default EmptyState;
