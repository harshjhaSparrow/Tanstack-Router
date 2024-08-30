import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, VisuallyHidden, Box } from "@chakra-ui/react";


const AboutPage: React.FC = () => {
  return (
    <>
     <div className="p-2">
      <Tabs variant="enclosed">
      <TabList>
        <Tab>Tab 1</Tab>
        <Tab>Tab 2</Tab>
        <Tab>Tab 3</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <p>Content for Tab 1</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 2</p>
        </TabPanel>
        <TabPanel>
          <p>Content for Tab 3</p>
        </TabPanel>
      </TabPanels>
    </Tabs>
    </div>
    <div>
       <Box>
      <h1>Visible Heading</h1>
      <VisuallyHidden>
        <p>This text is hidden from view but accessible to screen readers.</p>
      </VisuallyHidden>
      <p>Some other visible content.</p>
    </Box>
    </div>
    </>
   
  );
};

export default AboutPage;
