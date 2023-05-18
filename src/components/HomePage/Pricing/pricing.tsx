import { Badge, Card, Grid, Text, Image, Button, Group } from "@mantine/core";
import React from "react";

export function Pricing() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          marginTop: 40,
        }}
      >
        <Grid style={{ width: "90%" }}>
          <Grid.Col
            style={{
              display: "grid",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ paddingTop: 20 }} weight={700} size={48}>
              Transparent Pricing for every stage
            </Text>
          </Grid.Col>
          <Grid.Col style={{ display: "grid", justifyContent: "center",marginTop:25 }}>
            <div
              style={{
                width: 424,
                height: 73,
                backgroundColor: "#e1f6f5",
                borderRadius: 50,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  width: "40%",
                  height: "70%",
                  backgroundColor: "#01CECA",
                  borderRadius: 50,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text weight={400} size={24}>
                  Monthly
                </Text>
              </div>
              <div
                style={{
                  width: "40%",
                  height: "70%",
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#e1f6f5",
                  borderRadius: 50,
                }}
              >
                <Text weight={400} size={24}>
                  Yearly
                </Text>
              </div>
            </div>
          </Grid.Col>
          <Grid.Col>
            <Grid style={{position:'relative',marginTop:25,paddingBottom:60}}>
                <div style={{height:'70%',width:'100%',backgroundColor:'#01CECA',position:'absolute',bottom:0,zIndex:0}}>

                </div>
              <Grid.Col lg={4}>
                <Card
                  shadow="sm"
                  padding="lg"
                  radius="md"
                  withBorder
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 530,
                    flexDirection: "column",
                    position: "relative",
                    paddingTop:100,
                    border:0,
                    boxShadow:'0 0 0',
                    zIndex:1
                  }}
                >
                  <Card.Section
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                    }}
                  >
                    <Text weight={700} size={24}>
                      Freemium
                    </Text>
                    <Group>
                      <Text weight={700} size={60}>
                        {"\u0024"}0
                      </Text>
                      <Text weight={400} size={16} style={{ opacity: 0.5 }}>
                        /The First Month
                      </Text>
                    </Group>
                    <Text weight={400} size={16} style={{ opacity: 0.5 }}>
                      $0.99/month afterwards
                    </Text>
                  </Card.Section>
                  <Card.Section style={{ width: "80%",marginTop:20 }}>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img
                        src="images/tick.svg"
                        width={24}
                        height={24}
                        style={{ marginRight: 5 }}
                      />{" "}
                      Access to bartering marketplace
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      Build your network and community
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      Get stuff done anyway
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      Support 24/7
                    </Text>
                  </Card.Section>
                  <Button
                    variant="outline"
                    style={{
                      borderColor: "black",
                      color: "black",
                      position: "absolute",
                      bottom: 10,
                    }}
                  >
                    Get Started
                  </Button>
                </Card>
              </Grid.Col>
              <Grid.Col lg={4}>
                <Card
                  shadow="sm"
                  padding="lg"
                  withBorder
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 572,
                    flexDirection: "column",
                    position: "relative",
                    paddingLeft:0,
                    paddingRight:0,
                    borderRadius:20,
                    zIndex:1

                  }}
                >
                    <Card.Section
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      backgroundColor:'#FEED66',
                      width:'100%',
                      borderRadius:'20px 20px 0px 0px',
                      height:49
                    }}
                  >
                    <Text weight={700} size={24}>
                      FREE FOR BETA USERS
                    </Text>
                    
                  </Card.Section>

                  <Card.Section
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop:20
                    }}
                  >
                    <Text weight={700} size={24}>
                      Freemium
                    </Text>
                    <Group>
                      <Text weight={700} size={60}>
                        {"\u0024"}0
                      </Text>
                    </Group>
                  </Card.Section>
                  <Card.Section style={{ width: "80%",marginTop:20 }}>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img
                        src="images/tick.svg"
                        width={24}
                        height={24}
                        style={{ marginRight: 5 }}
                      />{" "}
                      Access to Vetted Barters
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      Barter Agreements
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      3 Barter Bucks for signing up
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:5 }}
                      size={16}
                      weight={400}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      Support 24/7
                    </Text>
                  </Card.Section>
                  <Button
                    variant="filled"
                    style={{
                      color: "black",
                      position: "absolute",
                      bottom: 10,
                      backgroundColor:'#FEED66'
                    }}
                  >
                    Get Started
                  </Button>
                </Card>
              </Grid.Col>
              <Grid.Col lg={4}>
              <Card
                  shadow="sm"
                  padding="lg"
                  withBorder
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 530,
                    flexDirection: "column",
                    position: "relative",
                    paddingLeft:0,
                    paddingRight:0,
                    borderRadius:20,
                    zIndex:1

                  }}
                >
                    <Card.Section
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      backgroundColor:'#FEED66',
                      width:'100%',
                      borderRadius:'20px 20px 0px 0px',
                      height:49
                    }}
                  >
                    <Text weight={700} size={24}>
                      PAY ONE TIME
                    </Text>
                    
                  </Card.Section>

                  <Card.Section
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      flexDirection: "column",
                      marginTop:20
                    }}
                  >
                    <Text weight={700} size={24}>
                      Lifetime
                    </Text>
                    <Group>
                      <Text weight={700} size={60}>
                        {"\u0024"}99
                      </Text>
                    </Group>
                  </Card.Section>
                  <Card.Section style={{ width: "80%",marginTop:20 }}>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:10 }}
                      weight={400}
                      size={16}
                    >
                      <img
                        src="images/tick.svg"
                        width={24}
                        height={24}
                        style={{ marginRight: 5 }}
                      />{" "}
                      Access to Vetted Barters
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:10 }}
                      weight={400}
                      size={16}
                    >
                      <img src="images/tick.svg" width={24} height={24} 
                      style={{ marginRight: 5 }}/>
                      Barter Agreements
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:10 }}
                      weight={400}
                      size={16}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      Exclusively for  business owners
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:10 }}
                      weight={400}
                      size={16}
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      100 Barter Bucks for Signing up and
Earn 10 Barter Bucks Annually
                    </Text>
                    <Text
                      style={{ display: "flex", alignItems: "center",marginTop:10 }}
                      weight={400}
                      size={16}
                    >
                      <img src="images/tick.svg" width={24} height={24} 
                      style={{ marginRight: 5 }}/>
                      Marketing Opportunities 
                    </Text>
                    <Text
                    weight={700}
                    
                      style={{ display: "flex", alignItems: "center",marginTop:10 }}
                      size={16}
                      
                    >
                      <img src="images/tick.svg" width={24} height={24}
                      style={{ marginRight: 5 }} />
                      Pay Once for Life.
                    </Text>
                  </Card.Section>
                  <Button
                    variant="outline"
                    style={{
                      borderColor: "black",
                      color: "black",
                      position: "absolute",
                      bottom: 10,
                    }}
                  >
                    Contact us
                  </Button>
                </Card>
              </Grid.Col>
            </Grid>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
