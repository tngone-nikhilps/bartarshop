import { Grid,Text,Image,TextInput, Select, Textarea, Button } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react';
import React from 'react'

export function CreateBAccount(){
    function generateYearOptions(startYear:number, endYear:number) {
        const years = [];
        for (let year = startYear; year >= endYear; year--) {
          years.push(year.toString());
        }
        return years;
      }
    return(
        <>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <Grid style={{width:'90%'}}>
                <Grid.Col xs={12} >
                  
                <img style={{marginTop:20}} width={176} height={34} src={"images/logo.svg"} />
                </Grid.Col>
                
<Grid.Col style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center' ,flexDirection:'column'}}>
    <Grid style={{width:'60%'}}>
        <Grid.Col style={{display:'flex',justifyContent:'center'}}>
            <Text weight={700} size={40}>Create Your Business Account</Text>
        </Grid.Col>
        <Grid.Col xs={6}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>Full name</Text>
          </div>
          <TextInput
          styles={()=>({
            input:{
              height:43
            }
          })}
            icon={
              <Image
                src={"/images/nameIcon.svg"}
                alt="Email Icon"
                width={16}
                height={16}
              />
            }
            // error={passwordError}
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value), setPasswordError("");
            // }}
            placeholder="Enter your name"
            sx={{ width: '100%',borderRadius:8,marginBottom:20 }}
           
          />
                </Grid.Col>
                <Grid.Col xs={6}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>Address</Text>
          </div>
          <TextInput
          styles={()=>({
            input:{
              height:43
            }
          })}
            icon={
              <Image
                src={"/images/address.svg"}
                alt="Email Icon"
                width={16}
                height={16}
              />
            }
            // error={passwordError}
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value), setPasswordError("");
            // }}
            placeholder="Enter your business address"
            sx={{ width: '100%',borderRadius:8,marginBottom:20 }}
           
          />
        </Grid.Col>
        <Grid.Col xs={6}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>Website</Text>
          </div>
          <TextInput
          styles={()=>({
            input:{
              height:43
            }
          })}
            icon={
              <Image
                src={"/images/website.svg"}
                alt="Email Icon"
                width={16}
                height={16}
              />
            }
            // error={passwordError}
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value), setPasswordError("");
            // }}
            placeholder="Enter your buisness website"
            sx={{ width: '100%',borderRadius:8,marginBottom:20 }}
           
          />
        </Grid.Col>
        <Grid.Col xs={6}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>Year in the Buisness</Text>
          </div>
          <Select
          icon={
            <Image
              src={"/images/year.svg"}
              alt="Email Icon"
              width={16}
              height={16}
            />
          }
           styles={()=>({
            input:{
              height:43
            },
            rightSection: { pointerEvents: 'none' }
          })}
  placeholder="Year in buisness"
  rightSection={<IconChevronDown size="1rem" />}
  rightSectionWidth={30}
  data={generateYearOptions(2020, 1946)}
/>
        </Grid.Col>
        <Grid.Col xs={6}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>About your Buisness</Text>
          </div>

          <Textarea
          styles={()=>({
            input:{
              height:259
            }
          })}
            
            // error={passwordError}
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value), setPasswordError("");
            // }}
            placeholder="Tell us about your Business"
            sx={{ width: '100%',borderRadius:8,marginBottom:20 }}
           
          />
        </Grid.Col>
        <Grid.Col xs={6}>
                <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>We can help your business with...</Text>
          </div>
          <Textarea
          styles={()=>({
            input:{
              height:259
            }
          })}
            // error={passwordError}
            // value={password}
            // onChange={(e) => {
            //   setPassword(e.target.value), setPasswordError("");
            // }}
            placeholder="Type here.."
            sx={{ width: '100%',borderRadius:8,marginBottom:20 }}
           
          />
        </Grid.Col>
        <Grid.Col style={{display:'flex',justifyContent:'center'}} span={12}>
        <Button
            size="lg"
            mb={10}
            sx={{ width: 400,fontSize:16,fontWeight:700, backgroundColor: "turquoise",color:'black',borderRadius:16 }}
            // onClick={() => router.push("/network-management")}
            // onClick={() => {
            //   handleLogin();
            // }}
          >
            Create Account
          </Button>
        </Grid.Col>
    </Grid>
  
          </Grid.Col>
          </Grid>
        </div>
        </>
    )
}