import { Button, Divider, Grid, Text } from "@mantine/core";
import React from "react";
export function HowItWorks() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: 40,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        
        <Grid style={{ width: "90%" }}>
            <Grid.Col style={{display:'flex',justifyContent:"flex-start"}} span={12}>
            <Text weight={700} size={48}>How It works</Text>
            </Grid.Col>
        
          <Grid.Col  md={12} lg={6}>
            <div onClick={()=>console.log('hekkooo')} style={{marginTop:20}}>
              <Divider
                orientation="horizontal"
                size={"md"}
                color="#01CECA"
                
              ></Divider>
              <Text weight={800} size={32} style={{ color: "#01CECA",marginTop:20 }}>
                1.Register
              </Text>
              <Text weight={400} size={20} style={{paddingTop:5}}>
                Create an account and update your business details.
              </Text>
            </div>
            <div style={{marginTop:20}}>
              <Divider
              
                orientation="horizontal"
                size={"md"}
                color="#01CECA"
              ></Divider>
              <Text weight={800} size={32} style={{ color: "#01CECA",marginTop:20 }}>
                2.Search
              </Text>
              <Text weight={400} size={20} style={{paddingTop:5}}>
                Look through industry categories to quickly find vetted barter
                professionals by service or name.
              </Text>
            </div>
            <div style={{marginTop:20}}>
              <Divider
                orientation="horizontal"
                size={"md"}
                color="#01CECA"
              ></Divider>
              <Text weight={800} size={32} style={{ color: "#01CECA",marginTop:20 }}>
                3.Chat
              </Text>
              <Text weight={400} size={20} style={{paddingTop:5}}>
                Reach out and negotiate barter terms with someone local to you.
              </Text>
            </div>
            <div style={{marginTop:20}}>
              <Divider
                orientation="horizontal"
                size={"md"}
                color="#01CECA"
              ></Divider>
              <Text weight={800} size={32} style={{ color: "#01CECA",marginTop:20 }}>
                4.Barter
              </Text>
              <Text weight={400} size={20} style={{paddingTop:5}}>
                Initiate a barter right from the chat. All barters all
                solidified with a barter agreement signed by both parties via
                DocuSign.
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col
            md={12} lg={6}
            style={{ display: "grid", justifyContent: "flex-end" }}
          >
            <div
              style={{
                width: 592,
                height: 592,
                borderRadius: 40,
                background: "#01CECA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                <div
              style={{
                width: 480,
                height: 480,
                borderRadius: 20,
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position:'relative'
              }}
            >
                <img style={{position:'absolute',top:'10%'}} width={176} height={34} src={"images/logo.svg"} />
                <img style={{position:'absolute',top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)'}} width={'60%'} height={'60%'} src={"images/registerimage.svg"} />
            </div>

            </div>
          </Grid.Col>
          <Grid.Col>
            <Button variant="filled" style={{backgroundColor:'#FF5E5A',color:'white'}}>Get Started</Button>
          </Grid.Col>
        </Grid>
      </div>
    </>
  );
}
