import { Accordion, Button, Grid, List, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React from "react";

export function Faqs() {
  const xs = useMediaQuery('(max-width: 575.98px)');      
  const sm = useMediaQuery('(max-width: 767.98px)');    
  const md = useMediaQuery(' (max-width: 991.98px)');    
  const lg = useMediaQuery(' (max-width: 1199.98px)');   
  const xl = useMediaQuery('(min-width: 1200px)');
  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 40,
        }}
      >
        <Grid style={{ width: "90%" }}>
          <Grid.Col lg={4}>
            <Text weight={600} size={32}>
              FAQS
            </Text>
            <Text weight={700} size={60} style={{ lineHeight: "65px" }}>
              Have more questions?
            </Text>
            <Text weight={400} size={20} style={{ marginTop: 20 }}>
              That’s ok. Just drop a message and we will get back to you ASAP.
            </Text>
            <Button
              variant="outline"
              style={{
                marginTop: 20,
                borderColor: "#01CECA",
                backgroundColor: "#e1f6f5",
                color: "black",
              }}
            >
              Contact us
            </Button>
          </Grid.Col>
          <Grid.Col lg={8}>
            <Accordion
              chevron={<img width={176} height={34} src={"images/add.svg"} />}
              styles={() => ({
                label: {
                  fontSize: xs?24:sm?26:md?28:lg?30:32,
                  fontWeight: 700,
                },
                item: {
                  paddingTop: 30,
                  paddingBottom: 20,
                  borderBottom: "3px solid #01CECA",
                },
              })}
            >
              <Accordion.Item value="why">
                <Accordion.Control>Why should I join?</Accordion.Control>
                <Accordion.Panel>
                  We're redefining the conventions of economics and pioneering a
                  new bartering micro economy that will enable your small
                  business to survive and thrive in times of hardship without
                  the need for cash money. During the Barter Beta, you will
                  discover the possibilities that the barter economy has to
                  offer, learn how you can expand and supplement your business
                  through local bartering and connect with your community
                  through shared value.
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="who">
                <Accordion.Control>Who can join?</Accordion.Control>
                <Accordion.Panel>
                  <Text>
                    Any business owner/ entrepreneur that can provide the
                    following information:
                  </Text>
                  <List style={{marginTop:10}}>
                    <List.Item>Buisness Name</List.Item>
                    <List.Item>Buisness Description</List.Item>
                    <List.Item>Industry</List.Item>
                    <List.Item>Websites</List.Item>
                    <List.Item>Service You can Provide</List.Item>
                    <List.Item>
                      Buisness Logo(300x300 Pixels Works Best)
                    </List.Item>
                    <List.Item>
                      Banner Profile photo (970 X 250 pixel works best)
                    </List.Item>
                    <List.Item>
                      Business verification doc(copy of business license,
                      certificate of insurance, Articles of
                      organization/corporation, etc)
                    </List.Item>
                    <List.Item>
                      A small video clip promoting your business(approximately
                      30 secs)optional
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item  value="what">
                <Accordion.Control>What will we be testing?</Accordion.Control>
                <Accordion.Panel>
                  As a Barter Shop beta member, you will be using and testing
                  The Barter Shop Web App platform. Our web app is a
                  user-friendly bartering marketplace platform, similar to our
                  mobile app, that will allow you to create your business
                  profile, browse for services, chat and negotiate with
                  potential barter partners, and generate personalized barter
                  agreements. Our team will be available to assist you at any
                  time should you need any help.
                </Accordion.Panel>
              </Accordion.Item>
              <Accordion.Item value="how">
                <Accordion.Control>How do I join?</Accordion.Control>
                <Accordion.Panel>
                  To join The Barter Shop Beta experiment,  click the ”join the
                  beta” button to signup. You may also reach out to our team, at
                  join@thebartershop.app, if you have any questions regarding
                  the application or acceptance process.
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
