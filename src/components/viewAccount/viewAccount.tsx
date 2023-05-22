import React from 'react'
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
  import { useDisclosure, useMediaQuery } from "@mantine/hooks";

export function ViewAccount(){
    
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
  
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false);
  const { classes, theme } = useStyles();
    return(<>
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
      <div style={{display:'flex',justifyContent:'center',background:'#F2F2F2'}}>
        <Grid style={{width:'80%',marginTop:15}}>
            <Grid.Col xs={3} style={{height:'90vh',background:'white'}}>
            <Text weight={700} size={24} >
            You may also like
              </Text>
              <ScrollArea
            style={{marginTop:20}}
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
            <Grid.Col xs={8.6} style={{marginLeft:13,height:'90vh',background:'white'}}></Grid.Col>

        </Grid>

      </div>
    </>)
}