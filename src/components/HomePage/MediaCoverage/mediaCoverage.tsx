import { Badge, Button, Card, Grid, Group, Text, Image } from "@mantine/core";
import React from "react";
export function MediaCoverage() {
  return (
    <>
      <div
        style={{
          display: "flex",
          backgroundColor: "#FF5E5A",
          marginTop: 40,
          justifyContent: "center",
          position: "relative",
          paddingBottom:20
        }}
      >
        <div style={{ position: "absolute", top: "10%", right: "10%", zIndex: 0 }}>
        <img
          // style={{ position: "absolute", top: "10%", right: "10%", zIndex: 1 }}
          width={180}
          height={147}
          src={"images/Quote mark.svg"}
        />
        </div>
        <Grid justify="center" style={{ width: "90%" }}>
          <Grid.Col lg={12}
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{ paddingTop: 20, color: "white" }}
              weight={700}
              size={48}
            >
              Media Coverage
            </Text>
            <Text
              style={{ paddingTop: 15, color: "white" }}
              weight={400}
              size={18}
            >
              Get inspired by these stories.
            </Text>
          </Grid.Col>
          <Grid.Col  lg={12} >
            <Grid style={{zIndex:4}}>
              <Grid.Col lg={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                <Card style={{width:582,height:662}} shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="images/media1.svg"
                      height={290}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>GEEKZ VENTURES ANNOUNCES FIRST PRE-ACCELERATOR PROGRAM COHORT</Text>
                  </Group>

                  <Text style={{height:149}} size="sm" color="dimmed">
                  10 startups have been selected to join the first cohort of Geekz Ventures, a pre-accelerator program designed for minority founders bringing their tech ideas to life.
The program, which kicks off on March 14, will help founders with an Equity-free grant, mentoring, and resources for moving their business to the next level.
While the founder Kunbi Tinuoye is in Atlanta, the virtual accelerator and has brought in founders from around the country. Former WeWork Enablement executive Brandon Wilkins will serve as the program manager for the inaugural Geekz Ventures cohort.
                  </Text>
                  <Card.Section>
                    <img
                      src="images/hypepotamus 1.svg"
                      width={160}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                </Card>
              </Grid.Col>
              <Grid.Col lg={6} style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
              <Card style={{width:582,height:662}} shadow="sm" padding="lg" radius="md" withBorder>
                  <Card.Section>
                    <Image
                      src="images/media2.svg"
                      height={290}
                      alt="Norway"
                    />
                  </Card.Section>

                  <Group position="apart" mt="md" mb="xs">
                    <Text weight={500}>GEEKZ VENTURES ANNOUNCES FIRST PRE-ACCELERATOR PROGRAM COHORT</Text>
                  </Group>

                  <Text style={{height:149}} size="sm" color="dimmed">
                  A member of the Tulsa Remote program is investing in her new community. Shanice Brown and Kyle Smith joined News On 6 to discuss how both of their organizations are working together to help support and encourage local entrepreneurs.
                  </Text>
                  <Card.Section>
                    <img
                      src="images/News on 6 1.svg"
                      width={160}
                      height={160}
                      alt="Norway"
                    />
                  </Card.Section>
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
