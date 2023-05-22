import React from "react";
import {
  createStyles,
  Header,
  Group,
  Button,
  UnstyledButton,
  Text,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  Grid,
  Badge,
  Flex,
  TextInput,
  Rating,
} from "@mantine/core";
import {GoogleMap,useLoadScript,LoadScript, useJsApiLoader, Marker,Autocomplete} from '@react-google-maps/api'
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export function ViewAccount() {
    const center = {
        lat: 37.7749,
        lng: -122.4194,
      };
      const { isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBXdi9StkIdtumZaQkcZ2pZaZiYiXlqHpw",
        libraries:['places']
      })
  const useStyles = createStyles((theme) => ({
    link: {
      display: "flex",
      alignItems: "center",
      height: "100%",
      paddingLeft: theme.spacing.md,
      paddingRight: theme.spacing.md,
      textDecoration: "none",
      color: theme.colorScheme === "dark" ? theme.white : theme.black,
      fontWeight: 500,
      fontSize: theme.fontSizes.sm,

      [theme.fn.smallerThan("sm")]: {
        height: rem(42),
        display: "flex",
        alignItems: "center",
        width: "100%",
      },

      ...theme.fn.hover({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
      }),
    },

    subLink: {
      width: "100%",
      padding: `${theme.spacing.xs} ${theme.spacing.md}`,
      borderRadius: theme.radius.md,

      ...theme.fn.hover({
        backgroundColor:
          theme.colorScheme === "dark"
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
      }),

      "&:active": theme.activeStyles,
    },

    dropdownFooter: {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
      margin: `calc(${theme.spacing.md} * -1)`,
      marginTop: theme.spacing.sm,
      padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
      paddingBottom: theme.spacing.xl,
      borderTop: `${rem(1)} solid ${
        theme.colorScheme === "dark"
          ? theme.colors.dark[5]
          : theme.colors.gray[1]
      }`,
    },

    hiddenMobile: {
      [theme.fn.smallerThan("md")]: {
        display: "none",
      },
    },

    hiddenDesktop: {
      [theme.fn.largerThan("md")]: {
        display: "none",
      },
    },
  }));

  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  return (
    <>
      <Box style={{ display: "flex", justifyContent: "center" }}>
        <Header
          height={60}
          px="md"
          withBorder={false}
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "90%",
          }}
        >
          <Group position="apart" sx={{ height: "100%" }}>
            <img width={176} height={34} src={"images/logo.svg"} />
          </Group>

          <Group
            sx={{ height: "100%" }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <a
              style={{ color: "#111827", fontSize: 14 }}
              href="#"
              className={classes.link}
            >
              Discover Services
            </a>
            <a
              style={{ color: "#111827", fontSize: 14 }}
              href="#"
              className={classes.link}
            >
              How it Works
            </a>
            <a
              style={{ color: "#111827", fontSize: 14 }}
              href="#"
              className={classes.link}
            >
              Real Stories
            </a>
            <a
              style={{ color: "#111827", fontSize: 14 }}
              href="#"
              className={classes.link}
            >
              Media Coverage
            </a>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Text color="#000000" weight={"bold"} size={14}>
              Log in
            </Text>
            <Button variant="filled" style={{ backgroundColor: "#FF5E5A" }}>
              Sign up
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Header>

        <Drawer
          opened={drawerOpened}
          onClose={closeDrawer}
          size="100%"
          padding="md"
          title="Barter Shop"
          className={classes.hiddenDesktop}
          zIndex={1000000}
        >
          <ScrollArea h={`calc(100vh - ${rem(60)})`} mx="md">
            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />

            <a href="#" className={classes.link}>
              Discover Services
            </a>
            <UnstyledButton className={classes.link} onClick={toggleLinks}>
              <Center inline>
                <Box component="span" mr={5}>
                  How it Works
                </Box>
              </Center>
            </UnstyledButton>
            <a href="#" className={classes.link}>
              Real Stories
            </a>
            <a href="#" className={classes.link}>
              Media Coverage
            </a>

            <Divider
              my="sm"
              color={theme.colorScheme === "dark" ? "dark.5" : "gray.1"}
            />

            <Group position="center" grow pb="xl" px="md">
              <Button variant="default">Log in</Button>
              <Button variant="filled" style={{ backgroundColor: "#FF5E5A" }}>
                Sign up
              </Button>
            </Group>
          </ScrollArea>
        </Drawer>
      </Box>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          background: "#F2F2F2",
          height:'100%'
        }}
      >
        <Grid style={{ width: "80%", marginTop: 15 }}>
          <Grid.Col xs={3} style={{ background: "white" }}>
            <Text weight={700} size={24}>
              You may also like
            </Text>
            <ScrollArea
              style={{ marginTop: 20 }}
              styles={() => ({
                scrollbar: {
                  background: "#e6fafa",
                  width: 6,
                },
                thumb: {
                  background: "#01CECA",
                },
              })}
              h={850}
              type="scroll"
            >
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
              <Grid>
                <Grid.Col xs={3.5}>
                  <img
                    src="images/homeImage.svg"
                    width={80}
                    height={80}
                    style={{
                      borderRadius: "100%",
                      border: "1px solid #999999",
                    }}
                  />
                </Grid.Col>
                <Grid.Col xs={8}>
                  <Text weight={600} size={22}>
                    The Tech Coach LLC
                  </Text>
                  <Badge
                    style={{
                      color: "black",
                      background: " rgba(1, 206, 202, 0.2)",
                      fontWeight: "normal",
                      fontSize: 10,
                    }}
                  >
                    professional
                  </Badge>
                  <Text weight={400} size={14} opacity={0.5}>
                    Freelance Web and the{" "}
                  </Text>
                </Grid.Col>
              </Grid>
            </ScrollArea>
          </Grid.Col>
          <Grid.Col
            xs={8.6}
            style={{ marginLeft: 13, background: "white" }}
          >
            <Grid align="center" style={{ height:188,borderBottom:' 0.5px solid #999999' }}>
              <Grid.Col
                style={{
                  display: "flex",
                  height: "90%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                xs={2.5}
              >
                <img
                  src="images/homeImage.svg"
                  width={150}
                  height={150}
                  style={{
                    borderRadius: "100%",
                    border: "1px solid #999999",
                  }}
                />
              </Grid.Col>
              <Grid.Col xs={8} style={{display:'flex', height: "80%",flexDirection:'column',justifyContent:'space-between' }}>
                <Text weight={800} size={32}>
                  The Tech Coach LLC
                </Text>
                <Flex align={"center"} style={{paddingBottom:20}}>
                  <Rating defaultValue={2} color="red" />
                  <Text style={{paddingLeft:10}}>4.0</Text>
                  <Divider style={{marginLeft:10}} orientation="vertical" size={"sm"}></Divider>
                  <img
                    src={"/images/address2.svg"}
                    alt="Email Icon"
                    width={16}
                    height={16}
                    style={{paddingLeft:10}}
                  />
                  <Text style={{paddingLeft:10}}>tulsa</Text>
                  <Divider style={{marginLeft:10}} orientation="vertical" size={"sm"}></Divider>
                  <img
                    src={"/images/Years in business.svg"}
                    alt="Email Icon"
                    width={16}
                    height={16}
                    style={{paddingLeft:10}}
                  />
                  <Text style={{paddingLeft:10}}>1-3 Years in business</Text>
                </Flex>
                <Flex >
                  <Button
                    variant="outline"
                    radius={8}
                    style={{ backgroundColor: "rgba(1, 206, 202, 0.1)",borderColor:'rgba(1, 206, 202, 1)',color:'black'}}
                  >
                    Chat with us
                  </Button >
                  <Button radius={8} variant="filled" style={{backgroundColor:'#FEED66',color:'black',marginLeft:10}}>Barter NOW!</Button>
                </Flex>
              </Grid.Col>
            </Grid>
            <Grid style={{marginTop:9}}>
                <Grid.Col style={{padding:15,borderRight:'0.5px solid #999999'}}  xs={5}>
                    <Text weight={700} size={24} color="#FF5E5A">About Us</Text>
                    <video
                            src='images/dummy.mp4'
                            controls
                            width={'100%'}
                            height={212}
                            style={{ objectFit: "fill",marginTop:10 }}
                          />
                    <Text weight={700} size={24} style={{marginTop:10}} color="#FF5E5A">Business Website</Text>
                    <Text weight={400} size={18} style={{marginTop:5}} color="#018381">www.thetechcoach.dev</Text>
                    <Text weight={700} size={24} style={{marginTop:10}} color="#FF5E5A">Business hours</Text>
                    <Text weight={400} size={18} style={{marginTop:5}}>Open Sun, Oct 25 (12pm- 3pm)</Text>
                    <Text weight={700} size={24} style={{marginTop:10}} color="#FF5E5A">Address</Text>
                    <Text weight={400} size={18}>Tusla Ok</Text>
                    <div style={{height:236}}>
                    {isLoaded?<>
              <GoogleMap center={center} zoom={15} mapContainerStyle={{width:'100%',height:'100%'}}>
               <Marker position={{lat: 37.7749,
  lng: -122.4194}}></Marker>
               </GoogleMap>
            </>:null}
                    </div>
                    
                </Grid.Col>
                <Grid.Col style={{padding:15}} xs={7}>
                    <Grid>
                        <Grid.Col xs={6}>
                        <Text weight={700} size={24} color="#FF5E5A">Business industry</Text>
                        <Text weight={400} size={12}>Professional, Scientific, and Technical Services</Text>
                        </Grid.Col>
                        <Grid.Col xs={6}>
                        <Text weight={700} size={24} color="#FF5E5A">Business services</Text>
                        <Text weight={400} size={12}>Freelance IT services, Website design and/or maintenance/Instruction, Tutoring</Text>
                        </Grid.Col>
                        <Grid.Col>
                        <Text weight={700} size={24} color="#FF5E5A">About our business</Text>
                        <Text weight={400} size={12}>The Tech Coach works with a simple but solid focus to help youth choose a tech profession that aligns with their skills and interests, as well as build digital products! Their new extensive set of skills include, UI/UX Design, Project Management, and iOS development to increase their future organization's online presence.

We help youth explore all of their possible opportunities so that they can progress in becoming the next generation of entrepreneurs. When it comes to exposing the youngsters to this learning process, we make sure that it's fun, interactive, and engaging. Cultivating problem-solving, leadership, collaborative, and critical-thinking skills are all part of the progressiveness to help them develop personally as well as professionally. Our experts deal with every individual personally to understand their potential, interests, and aptitude to build the best solutions and possibilities.
</Text>
                        </Grid.Col>
                        <Grid.Col>
                        <Text weight={700} size={24} color="#FF5E5A">I can help your business with...</Text>
                        <Text weight={400} size={12}>Anything E commerce!
</Text>
                        </Grid.Col>
                    </Grid>
                    
                </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
