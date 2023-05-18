import { Accordion, Button, Grid,Text } from "@mantine/core";
import React from "react";

export function Faqs(){
    return(<>
    <div style={{display:'flex',alignItems:'center',justifyContent:'center',flexDirection:'column',marginTop:40}}>
        <Grid style={{width:'90%'}}>
            <Grid.Col lg={4}>
                <Text weight={600} size={32}>FAQS</Text>
                <Text weight={700} size={60} style={{lineHeight:'65px'}}>Have more questions?</Text>
                <Text weight={400} size={20} style={{marginTop:20}}>That’s ok. Just drop a message and we will get back to you ASAP.</Text>
                <Button variant="outline" style={{marginTop:20,borderColor:'#01CECA',backgroundColor:'#e1f6f5',color:'black'}}>Contact us</Button>
            </Grid.Col>
            <Grid.Col lg={8}>
            <Accordion 
            chevron={<img width={176} height={34} src={"images/add.svg"} />}
            styles={()=>({
                label:{
                    fontSize:32,
                    fontWeight:700
                },
                item:{
                    paddingTop:30,
                    paddingBottom:20,
                    borderBottom:'3px solid #01CECA'
                },
            })}
            >
      <Accordion.Item value="why">
        <Accordion.Control>Why should I join?</Accordion.Control>
        <Accordion.Panel>Colors, fonts, shadows and many other parts are customizable to fit your design needs</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="who">
        <Accordion.Control>Who can join?</Accordion.Control>
        <Accordion.Panel>Configure components appearance and behavior with vast amount of settings or overwrite any part of component styles</Accordion.Panel>
      </Accordion.Item>

      <Accordion.Item value="what">
        <Accordion.Control>What will we be testing?</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
      <Accordion.Item value="how">
        <Accordion.Control>How do I join?</Accordion.Control>
        <Accordion.Panel>With new :focus-visible pseudo-class focus ring appears only when user navigates with keyboard</Accordion.Panel>
      </Accordion.Item>
    </Accordion>
            </Grid.Col>
        </Grid>

    </div>
    </>)
}