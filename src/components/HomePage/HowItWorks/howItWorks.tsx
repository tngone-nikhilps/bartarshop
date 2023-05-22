import { Button, Divider, Grid, Text } from "@mantine/core";
import { useMediaQuery } from "@mantine/hooks";
import React, { useState } from "react";
export function HowItWorks() {
  const [howWorks,setHowWorks]=useState(1)
  const xs = useMediaQuery('(max-width: 575.98px)');      
  const sm = useMediaQuery('(max-width: 767.98px)');    
  const md = useMediaQuery(' (max-width: 991.98px)');    
  const lg = useMediaQuery(' (max-width: 1199.98px)');   
  const xl = useMediaQuery('(max-width: 1380px)');
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
            <Text weight={700} size={xs?40:sm?42:md?44:lg?46:48}>How It works</Text>
            </Grid.Col>
        
          <Grid.Col  xs={xl?12:6}>
            <div onClick={()=>setHowWorks(1)} style={{marginTop:20}}>
              <Divider
                orientation="horizontal"
                size={"md"}
                color={howWorks==1?"#01CECA":'#c3f3f2'}
                
              ></Divider>
              <Text weight={800} size={xs?24:sm?26:md?28:lg?30:32} style={{ color: howWorks==1?"#01CECA":'#c3f3f2',marginTop:20 }}>
                1.Register
              </Text>
              <Text weight={400} size={xs?12:sm?14:md?16:lg?18:20} style={{paddingTop:5,color:howWorks==1?'black':'#d1d1d1'}}>
                Create an account and update your business details.
              </Text>
            </div>
            <div onClick={()=>setHowWorks(2)} style={{marginTop:20}}>
              <Divider
              
                orientation="horizontal"
                size={"md"}
                color={howWorks==2?"#01CECA":'#c3f3f2'}
              ></Divider>
              <Text weight={800} size={xs?24:sm?26:md?28:lg?30:32} style={{ color: howWorks==2?"#01CECA":'#c3f3f2',marginTop:20 }}>
                2.Search
              </Text>
              <Text weight={400} size={xs?12:sm?14:md?16:lg?18:20} style={{paddingTop:5,color:howWorks==2?'black':'#d1d1d1'}}>
                Look through industry categories to quickly find vetted barter
                professionals by service or name.
              </Text>
            </div>
            <div onClick={()=>setHowWorks(3)} style={{marginTop:20}}>
              <Divider
                orientation="horizontal"
                size={"md"}
                color={howWorks==3?"#01CECA":'#c3f3f2'}
              ></Divider>
              <Text weight={800} size={xs?24:sm?26:md?28:lg?30:32} style={{ color: howWorks==3?"#01CECA":'#c3f3f2',marginTop:20 }}>
                3.Chat
              </Text>
              <Text weight={400} size={xs?12:sm?14:md?16:lg?18:20} style={{paddingTop:5,color:howWorks==3?'black':'#d1d1d1'}}>
                Reach out and negotiate barter terms with someone local to you.
              </Text>
            </div>
            <div onClick={()=>setHowWorks(4)} style={{marginTop:20}}>
              <Divider
                orientation="horizontal"
                size={"md"}
                color={howWorks==4?"#01CECA":'#c3f3f2'}
              ></Divider>
              <Text weight={800} size={xs?24:sm?26:md?28:lg?30:32} style={{ color: howWorks==4?"#01CECA":'#c3f3f2',marginTop:20 }}>
                4.Barter
              </Text>
              <Text weight={400} size={xs?12:sm?14:md?16:lg?18:20} style={{paddingTop:5,color:howWorks==4?'black':'#d1d1d1'}}>
                Initiate a barter right from the chat. All barters all
                solidified with a barter agreement signed by both parties via
                DocuSign.
              </Text>
            </div>
          </Grid.Col>
          <Grid.Col
            xs={xl?12:6}
            style={{ display: "grid", justifyContent: xl?'center':"flex-end" }}
          >
            <div
              style={{
                width: xs?200:sm?300:md?400:lg?500:592,
                height:xs?200:sm?300:md?400:lg?500:592,
                borderRadius: 40,
                background: "#01CECA",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
                <div
              style={{
                aspectRatio:'1/1',
                width:'81%',
                
                borderRadius: 20,
                background: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                position:'relative'
              }}
            >
                <img style={{position:'absolute',top:'10%'}} width={'36%'} height={'7%'} src={"images/logo.svg"} />
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
