import { Flex, Grid,Text } from "@mantine/core";
import React from "react";

export function Footer() {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 40,
          paddingBottom: 30,
          borderBottom: "1px solid #999999",
        }}
      >
        <img
          style={{ borderRadius: 24 }}
          width={"92%"}
          src="images/footerImage.svg"
        />
      </div>
      <div style={{height:50,marginTop:40,display:'flex',alignItems:'center',flexDirection:'column'}}>
        <Grid style={{width:'90%',paddingBottom:30}}>
            <Grid.Col lg={12} style={{display:'grid',justifyContent:'center',paddingBottom:40,borderBottom:"1px solid #999999"}}>
                <Grid >
                    <Grid.Col lg={12} style={{display:'grid',justifyContent:'center',alignItems:'center'}}>
                    <img width={176} height={34} src={"images/logo.svg"} />
                    </Grid.Col>
                    <Grid.Col>
                        <Flex justify={'space-evenly'}>
                            <Text weight={400} size={12}>About</Text>
                            <Text weight={400} size={12}>Help</Text>
                            <Text weight={400} size={12}>Contact</Text>
                            <Text weight={400} size={12}>Privacy Policy</Text>
                        </Flex>
                    </Grid.Col>
                </Grid>
            </Grid.Col>
            <Grid.Col style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginTop:30}}>
                <Text  weight={400} size={12}>© 2022 The Barter Shop Inc. All rights reserved</Text>
                <div style={{display:'flex',justifyContent:'space-evenly', width:'30%'}}>
                <img
          style={{ borderRadius: 24 }}
          width={24}
          height={24}
          
          src="images/linkDin.svg"
        />
        <img
          style={{ borderRadius: 24  }}
          width={24}
          height={24}
          src="images/facebook.svg"
        />
        <img
          style={{ borderRadius: 24  }}
          width={24}
          height={24}
          src="images/instagram.svg"
        />
        <img
          style={{ borderRadius: 24  }}
          width={24}
          height={24}
          src="images/twitter shape.svg"
        />
        <img
          style={{ borderRadius: 24 }}
          width={24}
          height={24}
          src="images/pixels.svg"
        />
                </div>
            </Grid.Col>
        </Grid>

      </div>
    </>
  );
}
