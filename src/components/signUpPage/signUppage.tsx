import { Grid, Input, PasswordInput, Button,Text,Image, Flex, Checkbox } from '@mantine/core'
import React from 'react'
import './signUpPage.css'

export function SignUpPage(){
    return(
        <>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <Grid style={{width:'90%'}}>
                <Grid.Col md={12} lg={6} >
                  <Grid>
                    <Grid.Col>
                <img style={{marginTop:20}} width={176} height={34} src={"images/logo.svg"} />
                </Grid.Col>
                
<Grid.Col style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center' ,height:'80vh',flexDirection:'column'}}>
  <div style={{width:400}}>
    <Text weight={700} size={40} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',width:'53.1%'}}>Sign up</Text> 
    <Flex>
    <Text weight={400} size={16} style={{marginBottom:20,display:'flex',justifyContent:'flex-start'}}>Already have an account?</Text> 
    <Text weight={700} size={16} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',color:'turquoise',paddingLeft:10}}>Log in</Text> 
    </Flex>
    <Text weight={700} size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',width:'53.1%'}}>Email</Text> 
                <Input.Wrapper
            id="input-demo"
            withAsterisk
            // error={emailError}
            style={{ marginBottom: 20,marginTop:5 }}
          >
            <Input
            
            
              icon={
                <Image
                  src={"/images/email.svg"}
                  alt="Email Icon"
                  width={16}
                  height={16}
                />
              }
              styles={()=>({
                input:{
                  height:43
                }
              })}
            //   error={emailError}
              placeholder="Email Address"
              sx={{ width: 400,borderRadius:8 }}
            //   value={email}
            //   onChange={(e) => {
            //     setEmail(e.target.value);
            //     setEmailError("");
            //   }}
            />
          </Input.Wrapper>
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>Password</Text>
          <Text weight={700} size={12} color="#01CECA">Forgot Password?</Text>
          </div>
          <PasswordInput
          styles={()=>({
            input:{
              height:43
            }
          })}
            icon={
              <Image
                src={"/images/padlock.svg"}
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
            placeholder="Password"
            sx={{ width: 400,borderRadius:8,marginBottom:20 }}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? (
                <Image
                  src={"/images/eyeClosed.svg"}
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={"/images/eyeOpened.svg"}
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
              )
            }
          />
          <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',marginBottom:5}}>
          <Text weight={700} className="login" size={20} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',margin:0}}>Confirm Password</Text>
          </div>
          <PasswordInput
          styles={()=>({
            input:{
              height:43
            }
          })}
            icon={
              <Image
                src={"/images/padlock.svg"}
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
            placeholder="Password"
            sx={{ width: 400,borderRadius:8,marginBottom:20 }}
            visibilityToggleIcon={({ reveal }) =>
              reveal ? (
                <Image
                  src={"/images/eyeClosed.svg"}
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={"/images/eyeOpened.svg"}
                  alt="Email Icon"
                  width={20}
                  height={20}
                />
              )
            }
          />
          <Flex align={'center'} justify={'flex-start'} >
              <Checkbox
              // styles={()=>({
              //   input:{
              //       '&:checked':{
              //       background:'#01CECA',
              //       width:'3px',
              //       height:'90%'
              //   }
              //   },
                
                
                
              // })}
                label="By Signing up, you’re agree to our"
                size="xs"
                sx={{ ["& .mantine-Checkbox-label"]: { color: "black",fontSize:12 } }}
              />
              < Text size={12} weight={700} style={{paddingLeft:10}} color='#01CECA'>Terms & Conditions</Text>
          </Flex>
          <Button
            size="lg"
            mb={10}
            sx={{ width: 400, backgroundColor: "turquoise",color:'black',marginTop:20 }}
            // onClick={() => router.push("/network-management")}
            // onClick={() => {
            //   handleLogin();
            // }}
          >
            Sign Up
          </Button>
        
          </div>
          </Grid.Col>
          </Grid>
          
       
                </Grid.Col>
                <Grid.Col  md={12} lg={6} style={{height:'90vh'}}>
                 
                <img style={{marginTop:20}} width={'100%'} height={'100%'} src={"images/loginLogo.svg"} />
               
                </Grid.Col>
            </Grid>
        </div>
        </>
    )
}