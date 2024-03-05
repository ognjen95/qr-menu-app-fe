import { useSearchParams } from "next/navigation";
import React, { FC, use } from "react";
import {
  TextVariant,
  IconButton,
  IconType,
  ButtonTabs,
  Text,
} from "ui-components";
import { UseModalReturn } from "ui-components/src/modal/useModal";

import SectionListPreview from "./SectionListPrevies";
import { SectionPage } from "../../../../app/context/theme-context/enums";
import { Section } from "../../../../app/context/theme-context/types";
import BottomDrawer from "../../../../components/drawers/BottomDrawer";
import { HEADER_SECTIONS } from "../headers/headers.config";
import { MAIN_SECTIONS } from "../main/main.config";

export type SectionSelectDrawerProps = {
  addSectionModal: UseModalReturn<{
    section: Section;
    index: number;
  }>;
  handleAddSection: (section: Section) => void;
};

const SectionSelectDrawer: FC<SectionSelectDrawerProps> = ({
  addSectionModal,
  handleAddSection,
}) => {
  const { get } = useSearchParams();

  return (
    <BottomDrawer
      fullHeight
      isOpen={addSectionModal.isOpen}
      onClose={addSectionModal.close}
    >
      <div className="px-5 py-3">
        <div className="flex items-center justify-between pb-5">
          <Text color="text-primary-500" variant={TextVariant.HEADING5}>
            Add Section
          </Text>
          <IconButton
            iconProps={{
              onClick: addSectionModal.close,
              type: IconType.CLOSE,
            }}
          />
        </div>
        <div>
          <ButtonTabs
            defaultTab="Headers"
            tabs={[
              {
                text: "Headers",
                feature: (
                  <SectionListPreview
                    sectionList={HEADER_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "Headers",
              },
              {
                text: "Contact",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "contact",
              },
              {
                text: "About",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "about",
              },
              {
                text: "Services",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "services",
              },
              {
                text: "Gallery",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "gallery",
              },
              {
                text: "Testimonials",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "testimonials",
              },
              {
                text: "Footer",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "footer",
              },
              {
                text: "Working Hours",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "working-hours",
              },
              {
                text: "Offers",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "offers",
              },
              {
                text: "Reservations",
                feature: (
                  <SectionListPreview
                    sectionList={MAIN_SECTIONS}
                    onSectionSelect={(config) =>
                      handleAddSection({
                        ...config,
                        page: get("page") || SectionPage.HOME,
                      })
                    }
                  />
                ),
                id: "reservations",
              },
            ]}
          />
        </div>
      </div>
    </BottomDrawer>
  );
};

export default SectionSelectDrawer;
