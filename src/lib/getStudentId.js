export default async function () {
        try {
            const response = await fetch(url,{
                credentials: "include",
                method:"POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body : JSON.stringify({
                    name,
                    Enrollment,
                    email,
                    password,
                }),
            });

            const data = await response.json();

                if (data) {
             // localStorage.setItem("token",data.token);
            // console.log(token);
            alert(data.msg)
            setsid(data.sid);
           
    
            if(data.msg=="User created"){
                setIsLogin(true)
            }
            
            if(data.msg=="Login success"){
                setOpen(false);
                setIsLogin(true);
                getuser(data.sid);
                console.log("done")
                
            }
        }
        } catch (error) {
            console.log(error);
        }
      }