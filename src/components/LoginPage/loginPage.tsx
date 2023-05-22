import { Button, Checkbox, Grid, Input, PasswordInput,Image,Text, Divider } from "@mantine/core";
import React from "react";
import  "./loginPage.css";

export function LoginPage(){
    return(
        <>
        <div style={{display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center'}}>
            <Grid style={{width:'90%'}}>
                <Grid.Col xs={6} >
                  <Grid>
                    <Grid.Col>
                <img style={{marginTop:20}} width={176} height={34} src={"images/logo.svg"} />
                </Grid.Col>
                
<Grid.Col style={{display:'flex',flex:1,justifyContent:'center',alignItems:'center' ,height:'80vh',flexDirection:'column'}}>
  <div style={{width:400}}>
    <Text weight={700} size={40} style={{marginBottom:20,display:'flex',justifyContent:'flex-start',width:'53.1%'}}>Log in</Text> 
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
          <Button
            size="lg"
            mb={10}
            sx={{ width: 400, backgroundColor: "turquoise",color:'black' }}
            // onClick={() => router.push("/network-management")}
            // onClick={() => {
            //   handleLogin();
            // }}
          >
            Log in
          </Button>
          <div style={{marginTop:20}}>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <div style={{height:1,backgroundColor:'#999999',width:'43%'}}></div>
              <span>Or</span>
              <div style={{height:1,backgroundColor:'#999999' ,width:'43%'}}></div>
            </div>

          </div>
          <div style={{marginTop:20,display:'flex',justifyContent:'center'}}>
            <Text weight={400} size={16} style={{marginRight:15}}>Don't have  account yet?</Text>
            <Text weight={700} size={16} style={{color:'turquoise'}}>Sign up now</Text>

          </div>
          </div>
          </Grid.Col>
          </Grid>
          
       
                </Grid.Col>
                <Grid.Col xs={6} style={{height:'90vh'}}>
                 
                <img style={{marginTop:20}} width={'100%'} height={'100%'} src={"images/loginLogo.svg"} />
               
                </Grid.Col>
            </Grid>
        </div>
        </>
    )
}