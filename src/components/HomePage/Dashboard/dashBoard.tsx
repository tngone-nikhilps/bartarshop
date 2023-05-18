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
} from "@mantine/core";
import Carousel from 'react-material-ui-carousel'
import { useDisclosure, useMediaQuery } from "@mantine/hooks";
import styles from "./dashboard.module.css";
import { Thumb } from "@mantine/core/lib/ColorPicker/Thumb/Thumb";
import { HowItWorks } from "../HowItWorks/howItWorks";

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
      theme.colorScheme === "dark" ? theme.colors.dark[5] : theme.colors.gray[1]
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

export function DashBoard() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
  const md = useMediaQuery("(max-width: 890px)");
  const sm = useMediaQuery("(max-width: 480px)");

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
          position: "relative",
        }}
      >
        <img
          style={{ borderRadius: 24 }}
          width={"92%"}
          src="images/Frame 1.svg"
        />
        <div
          style={{
            position: "absolute",
            top: "70%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Button size="xs" style={{backgroundColor:'#01ceca',color:'black',fontWeight:'bolder'}}>See how is work</Button>
        </div>
        <div
          style={{
            height: md?250:177,
            position: "absolute",
            bottom: 40,
            transform: 'translateY(100%)',
            backgroundColor: "white",
            borderRadius: 20,
            boxShadow: '0px 10px 16px rgba(0, 0, 0, 0.24)',
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            width: "80%",
            zIndex:2
          }}
        >
          <Text weight={700} size={sm?14:md?18:24} style={{ marginBottom: 20 }}>
            What service are you looking for?
          </Text>
          <Grid style={{ width: "90%" }}>
            <Grid.Col xs={md?12:6} >
              <TextInput
                placeholder="Tag Your Service"
                icon={
                  <img
                    src="/images/searchIcon.svg"
                    alt="iSportz"
                    height={20}
                    width={15}
                  />
                }
              />
            </Grid.Col>

            <Grid.Col xs={md?12:5}>
              <TextInput
                placeholder="Tag Your Service"
                icon={
                  <img
                    src="/images/locIcon.svg"
                    alt="iSportz"
                    height={20}
                    width={15}
                  />
                }
              />
            </Grid.Col>
            <Grid.Col xs={md?12:1}>
              <Button variant="fill" style={{ backgroundColor: "#01CECA" }}>
                Search
              </Button>
            </Grid.Col>
          </Grid>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop:md?200: 110,zIndex:1 }}>
        <Grid
          style={{
            width: "92%",
            border: "1px solid #999999",
            borderRadius: 24,
          }}
        >
          <Grid.Col
            md={12} lg={6}
            style={{
              height: 750,
              paddingTop: 40,
            }}
          >
            <Text weight={700} size={sm?18:24} >
                Discover what barterers near you
              </Text>
            <ScrollArea
            styles={()=>({
              scrollbar:{
                background: '#e6fafa',
                width:6
              },
              thumb:{
                background:'#01CECA'
              }
            })}
             h={650}
            type="scroll"
            >
              <Grid>
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
                <Grid.Col xs={2}>
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
          <Grid.Col xs={6}>
            <img
              style={{ objectFit: "fill" }}
              width={"100%"}
              height={750}
              src="images/map.svg"
            />
          </Grid.Col>
        </Grid>
      </div>
      <Grid
        style={{ backgroundColor: "#FEED66", marginTop: 40, width: "100%" }}
      >
        <Grid.Col
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Text size={48} weight={700}>
            Real Stories from Real Influencer
          </Text>
          <Text size={18} weight={400}>
            Get inspired by these stories.
          </Text>
        </Grid.Col>
        <Grid.Col>
          <Carousel>
          {/* <Item></Item> */}
          </Carousel>
          {/* <Carousel withIndicators align="center">
            <Carousel.Slide>2
              <Grid>
                <Grid.Col
                  xs={12} lg={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      width: 592,
                      height: 222,
                    }}
                  >
                    <Text weight={700} size={18} style={{paddingTop:20,padding:10}}>Reviving Bartering in a Modern Form for Small Businesses</Text>
                    <Text weight={400} size={14} style={{padding:10,paddingTop:12}}>As soon as I saw The Barter Shop idea come across my desk, I loved it. Bartering used to be the way of the world, and I love bringing it back in a modern form. Every small business should sign up and start trading services!</Text>
                  </div>
                </Grid.Col>

                <Grid.Col
                  xs={12} lg={6}
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      width: 592,
                      height: 222,
                    }}
                  >
                    <Text weight={700} size={18} style={{paddingTop:20,padding:10}}>Reviving Bartering in a Modern Form for Small Businesses</Text>
                    <Text  weight={400} size={14} style={{padding:10,paddingTop:12}}>
                    The Barter App is a revolutionary concept and is spearheaded by one of the brightest individuals to come through our Nest accelerator program here at the chamber. Growing up in a generation where people are choosing non-traditional paths more often, The Barter App allows them to not only make connections but provide value to people they otherwise would not have access to.
                </Text>
                  </div>
                </Grid.Col>
              </Grid>
            </Carousel.Slide>
            <Carousel.Slide>2</Carousel.Slide>
            <Carousel.Slide>3</Carousel.Slide>
          </Carousel> */}
        </Grid.Col>
      </Grid>
    </>
  );
}
